import { createHash, createHmac, randomBytes, randomUUID } from 'node:crypto';
import { perform, emptyState, reconcile, ImpactError, type Payload, type Runtime, type State } from './core';
import seed from '@/content/impact-mock.json';

export function dataMode() {
  const mode = process.env.EITDA_DATA_MODE || (process.env.NODE_ENV === 'production' ? 'google_sheets' : 'mock');
  if (!['mock', 'google_sheets'].includes(mode)) throw new ImpactError('Campaign configuration needs attention.', 503);
  return mode;
}
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
type Mock = {state: State; runtime: Runtime};
const globalImpact = globalThis as typeof globalThis & { __eitdaMock?: Mock; __eitdaRate?: Map<string, {count: number; until: number}>; __eitdaStats?: {data: Payload; until: number} };
export function mockStore(): Mock {
  if (!globalImpact.__eitdaMock) {
    const secret = randomBytes(32).toString('hex');
    const runtime: Runtime = {now: () => new Date().toISOString(), id: randomUUID, hash, token: value => createHmac('sha256', secret).update(value).digest('hex')};
    const state = emptyState();
    for (const item of seed.advocates) state.Advocates.push({...item, dashboard_token_hash: hash(item.demo_token)});
    for (const person of seed.people) state.People.push({...person, consent_token_hash: hash('0'.repeat(64))});
    reconcile(state, runtime);
    globalImpact.__eitdaMock = {state, runtime};
  }
  return globalImpact.__eitdaMock;
}
export function localRateLimit(key: string, limit = 40) {
  const rates = globalImpact.__eitdaRate ??= new Map();
  const now = Date.now();
  if (rates.size > 5000) for (const [id, bucket] of rates) if (bucket.until <= now) rates.delete(id);
  if (rates.size > 10000) throw new ImpactError('Please try again shortly.', 429);
  const bucket = rates.get(key);
  if (bucket && bucket.until > now) {
    if (++bucket.count > limit) throw new ImpactError('Please wait a few minutes before trying again.', 429);
  } else rates.set(key, {count: 1, until: now + 600_000});
}
export async function callAppsScript(action: string, payload: Payload, clientKey: string, fetcher: typeof fetch = fetch): Promise<Payload> {
  const endpoint = process.env.EITDA_APPS_SCRIPT_URL;
  const secret = process.env.EITDA_APPS_SCRIPT_SECRET;
  if (!endpoint || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint) || !secret || !/^[a-f0-9]{64}$/.test(secret)) throw new ImpactError('This campaign is not connected yet. Please try again later.', 503);
  try {
    const response = await fetcher(endpoint, {method: 'POST', redirect: 'follow', headers: {'Content-Type':'application/json'}, body: JSON.stringify({action, payload, api_secret: secret, client_key: clientKey}), signal: AbortSignal.timeout(20_000), cache: 'no-store'});
    if (!response.ok) throw new Error('Upstream unavailable');
    const result = await response.json() as {success?: boolean; data?: Payload; error?: string; status?: number};
    if (result.success === false) throw new ImpactError(result.error || "We couldn’t save this right now. Please try again.", [400,401,404,409,429,503].includes(Number(result.status)) ? Number(result.status) : 503);
    if (result.success !== true || !result.data || typeof result.data !== 'object') throw new Error('Invalid upstream response');
    return result.data;
  } catch (error) {
    if (error instanceof ImpactError) throw error;
    throw new ImpactError("We couldn’t save this right now. Please try again.", 503);
  }
}
export async function impactAction(action: string, payload: Payload, clientKey: string): Promise<Payload> {
  if (dataMode() === 'mock') {
    const {state, runtime} = mockStore();
    // Synchronous mutation is atomic in the single-process local demo.
    return perform(state, action, payload, runtime);
  }
  if (action === 'getCampaignStats' && globalImpact.__eitdaStats && globalImpact.__eitdaStats.until > Date.now()) return globalImpact.__eitdaStats.data;
  const result = await callAppsScript(action, payload, clientKey);
  if (action === 'getCampaignStats') globalImpact.__eitdaStats = {data: result, until: Date.now() + 30_000};
  if (['createPerson','updateConsent'].includes(action)) globalImpact.__eitdaStats = undefined;
  return result;
}
export const clientFingerprint = (value: string) => hash(value);
