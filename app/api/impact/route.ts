import { randomBytes } from 'node:crypto';
import { ImpactError, type Payload } from '@/lib/impact/core';
import { clientFingerprint, dataMode, impactAction, localRateLimit } from '@/lib/impact/server';

export const dynamic = 'force-dynamic';
const readActions = ['getCampaignStats','getPublicImpact','getRecognition','getAdvocate','getAdvocateImpact','getPerson'];
const writeActions = ['createAdvocate','createPerson','trackEvent','updateConsent','authenticate','logout'];
function cookieValue(request: Request, name: string) {
  return (request.headers.get('cookie') || '').split(';').map(part => part.trim()).find(part => part.startsWith(`${name}=`))?.slice(name.length + 1) || '';
}
function session(request: Request, type: 'advocate' | 'person') {
  const [id, token] = cookieValue(request, `eitda_${type}`).split('.');
  return {id, token};
}
function cookie(name: string, value: string, secure: boolean, maxAge = 604800) {
  return `${name}=${value}; Path=/api/impact; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
}
async function handle(request: Request) {
  const headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-store', 'Referrer-Policy':'no-referrer', 'X-Content-Type-Options':'nosniff'});
  try {
    const url = new URL(request.url);
    const secure = url.protocol === 'https:' || process.env.NODE_ENV === 'production';
    let visitor = cookieValue(request, 'eitda_visitor');
    if (!/^[a-f0-9]{32}$/.test(visitor)) { visitor = randomBytes(16).toString('hex'); headers.append('Set-Cookie', cookie('eitda_visitor', visitor, secure)); }
    const remote = (request.headers.get('x-forwarded-for') || 'local').split(',').at(-1)?.trim() || 'local';
    const fingerprint = clientFingerprint(`${visitor}:${remote}`);
    let action: string;
    let payload: Payload;
    if (request.method === 'POST') {
      const origin = request.headers.get('origin');
      const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : url.origin;
      if (!origin || ![url.origin, configuredOrigin].includes(origin) || request.headers.get('sec-fetch-site') === 'cross-site') throw new ImpactError('Please submit this form from the EITDA website.', 403);
      if (!request.headers.get('content-type')?.startsWith('application/json')) throw new ImpactError('Please use the campaign form.', 415);
      // Read a bounded stream; Content-Length alone is not trustworthy.
      const reader = request.body?.getReader();
      let body = '', bytes = 0;
      if (reader) { const decoder = new TextDecoder(); while (true) { const chunk = await reader.read(); if (chunk.done) break; bytes += chunk.value.length; if (bytes > 16384) { await reader.cancel(); throw new ImpactError('This submission is too large.', 413); } body += decoder.decode(chunk.value, {stream:true}); } body += decoder.decode(); }
      let parsed: Payload;
      try { parsed = JSON.parse(body) as Payload; } catch { throw new ImpactError('Please check your submission.'); }
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new ImpactError('Invalid submission.');
      action = String(parsed.action || '');
      if (!writeActions.includes(action)) throw new ImpactError('This action is not available.', 404);
      if (!parsed.payload || typeof parsed.payload !== 'object' || Array.isArray(parsed.payload)) throw new ImpactError('Invalid submission.');
      payload = parsed.payload as Payload;
      localRateLimit(`visitor:${fingerprint}`);
      localRateLimit(`network:${clientFingerprint(remote)}`, 300);
      if (payload.website) throw new ImpactError('Please try again.');
    } else {
      action = url.searchParams.get('action') || '';
      if (!readActions.includes(action)) throw new ImpactError('This action is not available.', 404);
      payload = Object.fromEntries(['code','offset','limit','person_id'].map(key => [key, url.searchParams.get(key) ?? undefined]));
      localRateLimit(`read:${fingerprint}`, 180);
    }
    if (action === 'logout') {
      headers.append('Set-Cookie', cookie('eitda_advocate', '', secure, 0));
      headers.append('Set-Cookie', cookie('eitda_person', '', secure, 0));
      return Response.json({success:true, data:{}}, {headers});
    }
    let result: Payload;
    if (action === 'authenticate') {
      if (!['advocate','person'].includes(String(payload.kind))) throw new ImpactError('Invalid private link.', 401);
      const kind = payload.kind as 'advocate' | 'person';
      const id = String(payload.id || '');
      if (!/^[a-zA-Z0-9-]{6,80}$/.test(id)) throw new ImpactError('Invalid private link.', 401);
      result = await impactAction(kind === 'advocate' ? 'getAdvocateImpact' : 'getPerson', {...(kind === 'advocate' ? {code:id} : {person_id:id}), token: payload.token}, fingerprint);
      headers.append('Set-Cookie', cookie(`eitda_${kind}`, `${id}.${payload.token}`, secure));
    } else {
      if (action === 'getAdvocateImpact') { const auth = session(request, 'advocate'); payload.token = payload.code === auth.id ? auth.token : ''; }
      if (action === 'getPerson' || action === 'updateConsent' || (action === 'trackEvent' && payload.event_type === 'ticket_clicked')) {
        const auth = session(request, 'person');
        if (payload.person_id && payload.person_id !== auth.id) throw new ImpactError('Use your private access link.', 401);
        payload.person_id = auth.id; payload.token = auth.token;
      }
      result = await impactAction(action, payload, fingerprint);
      if (action === 'createAdvocate') headers.append('Set-Cookie', cookie('eitda_advocate', `${result.code}.${result.dashboard_token}`, secure));
      if (action === 'createPerson') headers.append('Set-Cookie', cookie('eitda_person', `${result.person_id}.${result.consent_token}`, secure));
    }
    return Response.json({success:true, data:result, mode:dataMode()}, {headers});
  } catch (error) {
    const known = error instanceof ImpactError;
    const status = known ? error.status : 503;
    if (status === 429) headers.set('Retry-After', '600');
    return Response.json({success:false, error:known ? error.message : "We couldn’t save this right now. Please try again."}, {status, headers});
  }
}
export const GET = handle;
export const POST = handle;
