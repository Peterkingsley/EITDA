'use client';

export type Stats = {people: number; combined_years: number};
export type PublicPerson = {public_id: string; first_name_or_initial: string; profession: string; years_experience: number; advocate_first_name: string; date_added: string; featured: boolean; status?: string};
export type WallPage = {items: PublicPerson[]; next_offset: number | null; total: number};
export type Dashboard = WallPage & {code: string; first_name: string; people: number; milestone: number; milestones: {milestone: number; date_achieved: string}[]};
export type SignupResult = {code: string; first_name: string; dashboard_token: string};
export type PersonResult = {person_id: string; person_number: number; first_name: string; profession: string; years_experience: number; consent_token: string; public_display_consent: boolean; stats: Stats};
export type PersonAccount = {person_id: string; first_name: string; public_display_consent: boolean; ticket_status: string};
export class ApiError extends Error { status: number; constructor(message: string, status: number) { super(message); this.status = status; } }
export async function api<T>(action: string, payload: Record<string, unknown> = {}, method: 'GET' | 'POST' = 'GET'): Promise<T> {
  const query = new URLSearchParams({action});
  if (method === 'GET') Object.entries(payload).forEach(([key,value]) => { if (value != null) query.set(key,String(value)); });
  try {
    const response = await fetch(`/api/impact${method === 'GET' ? `?${query}` : ''}`, {method, credentials:'same-origin', headers: method === 'POST' ? {'Content-Type':'application/json'} : undefined, body: method === 'POST' ? JSON.stringify({action,payload}) : undefined, signal:AbortSignal.timeout(25_000)});
    const result = await response.json() as {success:boolean; data:T; error?:string};
    if (!response.ok || !result.success) throw new ApiError(result.error || 'Please try again.',response.status);
    return result.data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('We couldn’t save this right now. Please try again. Your answers are still here.',503);
  }
}
export function randomHex() { return Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2,'0')).join(''); }
export function submissionKeys(key: string) {
  try { const old = JSON.parse(sessionStorage.getItem(key) || 'null'); if (old && /^[a-f0-9]{64}$/.test(old.submission_secret) && typeof old.submission_id === 'string') return old as {submission_id:string;submission_secret:string}; } catch { /* Private browsing may block tab storage. */ }
  const keys = {submission_id:crypto.randomUUID(),submission_secret:randomHex()};
  try { sessionStorage.setItem(key,JSON.stringify(keys)); } catch { /* The mounted form retains the keys for retries. */ }
  return keys;
}
type AnalyticsName = 'impact_page_view' | 'advocate_signup_started' | 'advocate_signup_completed' | 'impact_link_copied' | 'impact_link_shared' | 'experience_started' | 'experience_completed' | 'ticket_clicked' | 'impact_wall_viewed' | 'milestone_shared';
export function analytics(name: AnalyticsName, details: {channel?:string; milestone?:number} = {}) {
  // Connect an analytics provider to this event later. Never include names,
  // answers, email, phone, access credentials or full URLs in analytics.
  window.dispatchEvent(new CustomEvent('eitda:analytics',{detail:{name,...details}}));
}
export function activity(event_type: string, code = '', channel?: string) {
  void api('trackEvent',{event_type,advocate_code:code,channel,submission_id:crypto.randomUUID()},'POST').catch(() => { /* Optional analytics must not block the person's journey. */ });
}
export function publicLink(code: string) { return `${window.location.origin}/one-person/${code}`; }
