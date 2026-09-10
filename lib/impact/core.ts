import { impactConfig } from './config';

export type Cell = string | number | boolean;
export type Row = Record<string, Cell>;
export type Table = 'Advocates' | 'People' | 'Events' | 'Milestones' | 'PublicImpact';
export type State = Record<Table, Row[]>;
export type Payload = Record<string, unknown>;
export type Runtime = { now: () => string; id: () => string; hash: (value: string) => string; token: (value: string) => string };
export class ImpactError extends Error {
  status: number;
  constructor(message: string, status = 400) { super(message); this.status = status; }
}
export const schemas: Record<Table, string[]> = {
  Advocates: ['advocate_id','impact_code','first_name','last_name','email','phone','city','country','twitter','linkedin','instagram','profession_person_in_mind','experience_range_person_in_mind','outside_income_answer','date_joined','status','total_people_reached','current_milestone','submission_id','submission_hash','submission_secret_hash','dashboard_token_hash','privacy_consent_at','privacy_version','recognition_consent','possible_duplicate'],
  People: ['person_id','advocate_code','first_name','profession','years_experience','outside_income','known_for','discovery_goal','email','phone','city','country','registration_status','ticket_status','public_display_consent','date_added','submission_id','submission_hash','submission_secret_hash','consent_token_hash','privacy_consent_at','privacy_version','person_number','featured','story_collected','outcome_recorded'],
  Events: ['event_id','timestamp','event_type','advocate_code','person_id','metadata','submission_id'],
  Milestones: ['advocate_code','milestone','date_achieved','notification_status'],
  PublicImpact: ['public_id','first_name_or_initial','profession','years_experience','advocate_first_name','date_added','featured'],
};
export function emptyState(): State { return { Advocates: [], People: [], Events: [], Milestones: [], PublicImpact: [] }; }
export function textField(value: unknown, label: string, max: number, required = true): string {
  if (value == null && !required) return '';
  if (typeof value !== 'string') throw new ImpactError(`Please enter ${label}.`);
  const result = value.normalize('NFKC').replace(/[\u0000-\u001f\u007f-\u009f<>]/g, '').trim();
  if ((required && !result) || result.length > max) throw new ImpactError(`Please check ${label} (up to ${max} characters).`);
  return result;
}
function option(value: unknown, choices: readonly string[], label: string) {
  if (typeof value !== 'string' || !choices.includes(value)) throw new ImpactError(`Please choose ${label}.`);
  return value;
}
function email(value: unknown, required: boolean) {
  const result = textField(value, 'your email', 254, required).toLowerCase();
  if (result && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result)) throw new ImpactError('Please check your email address.');
  return result;
}
function phone(value: unknown, required: boolean) {
  const result = textField(value, 'your phone number', 30, required);
  if (result && (!/^[+\d\s().-]+$/.test(result) || result.replace(/\D/g, '').length < 7)) throw new ImpactError('Please check your phone number.');
  return result;
}
function bool(value: unknown, label: string) {
  if (typeof value !== 'boolean') throw new ImpactError(`Please check ${label}.`);
  return value;
}
export const consented = (value: unknown) => value === true || value === 'TRUE';
export function sheetSafe(value: Cell): Cell {
  return typeof value === 'string' && /^[\s]*[=+\-@*'\t\r]/.test(value) ? `'${value}` : value;
}
export function safeEqual(a: string, b: string) {
  let mismatch = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return mismatch === 0;
}
export function activePeople(state: State) { return state.People.filter(p => p.registration_status === 'experience_completed'); }
function advocateFor(state: State, code: unknown, required = true) {
  const advocate = state.Advocates.find(a => a.impact_code === code && a.status === 'active');
  if (required && !advocate) throw new ImpactError('This impact link is unavailable. Ask the person who shared it for a new link.', 404);
  return advocate;
}
function requireToken(row: Row | undefined, token: unknown, field: string, runtime: Runtime) {
  if (!row || typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token) || !safeEqual(String(row[field]), runtime.hash(token))) {
    throw new ImpactError('Use your private access link to open this page.', 401);
  }
  return row;
}
function event(state: State, runtime: Runtime, type: string, code = '', person = '', metadata: Payload = {}, key = runtime.id()) {
  const eventId = runtime.hash(`event:${key}`).slice(0, 32);
  if (!state.Events.some(e => e.event_id === eventId)) state.Events.push({event_id: eventId, timestamp: runtime.now(), event_type: type, advocate_code: code, person_id: person, metadata: JSON.stringify(metadata), submission_id: key});
}
export function reconcile(state: State, runtime: Runtime) {
  const people = activePeople(state);
  for (const advocate of state.Advocates) {
    const reached = people.filter(p => p.advocate_code === advocate.impact_code).length;
    advocate.total_people_reached = reached;
    advocate.current_milestone = Math.max(0, ...impactConfig.milestones.filter(n => n <= reached));
    for (const milestone of impactConfig.milestones.filter(n => n <= reached)) {
      if (!state.Milestones.some(m => m.advocate_code === advocate.impact_code && Number(m.milestone) === milestone)) {
        state.Milestones.push({advocate_code: advocate.impact_code, milestone, date_achieved: runtime.now(), notification_status: 'not_sent'});
        event(state, runtime, 'milestone_reached', String(advocate.impact_code), '', {milestone}, `${advocate.impact_code}:${milestone}`);
      }
    }
  }
  state.PublicImpact = people.map(p => publicPerson(state, p));
}
export function publicPerson(state: State, person: Row): Row {
  const visible = consented(person.public_display_consent);
  const advocate = advocateFor(state, person.advocate_code, false);
  return {
    public_id: person.person_id,
    first_name_or_initial: visible ? person.first_name : '',
    profession: person.profession,
    years_experience: person.years_experience,
    advocate_first_name: visible && advocate && consented(advocate.recognition_consent) ? advocate.first_name : '',
    date_added: person.date_added,
    featured: visible && consented(person.featured),
  };
}
export function campaignStats(state: State) {
  const people = activePeople(state);
  return { people: people.length, combined_years: people.reduce((sum, p) => sum + (typeof p.years_experience === 'number' && Number.isFinite(p.years_experience) ? p.years_experience : 0), 0) };
}
function pageOf<T>(items: T[], payload: Payload) {
  const offset = payload.offset == null ? 0 : Number(payload.offset);
  const limit = payload.limit == null ? impactConfig.wallPageSize : Number(payload.limit);
  if (!Number.isInteger(offset) || offset < 0 || !Number.isInteger(limit) || limit < 1 || limit > 48) throw new ImpactError('Please check the page requested.');
  return { items: items.slice(offset, offset + limit), next_offset: offset + limit < items.length ? offset + limit : null, total: items.length };
}
function submission(payload: Payload, runtime: Runtime) {
  const id = textField(payload.submission_id, 'the submission ID', 80);
  const secret = textField(payload.submission_secret, 'the submission key', 80);
  if (!/^[a-f0-9-]{32,80}$/.test(id) || !/^[a-f0-9]{64}$/.test(secret)) throw new ImpactError('Please refresh the form and try again.');
  return { id, secret, secretHash: runtime.hash(secret) };
}
function retryRecord(rows: Row[], id: string, secretHash: string, hash: string) {
  const old = rows.find(r => r.submission_id === id);
  if (old && (!safeEqual(String(old.submission_secret_hash), secretHash) || !safeEqual(String(old.submission_hash), hash))) throw new ImpactError('This submission was already used with different details. Start a new form.', 409);
  return old;
}
export function perform(state: State, action: string, payload: Payload, runtime: Runtime): Payload {
  if (action === 'getCampaignStats') return campaignStats(state);
  if (action === 'getPublicImpact') return pageOf(activePeople(state).slice().reverse().map(p => publicPerson(state, p)), payload);
  if (action === 'getRecognition') return {items: state.Advocates.filter(a => a.status === 'active' && consented(a.recognition_consent)).map(a => ({first_name: a.first_name, people: activePeople(state).filter(p => p.advocate_code === a.impact_code).length})).filter(a => a.people > 0).slice(0, 6)};
  if (action === 'getAdvocate') {
    const a = advocateFor(state, payload.code)!;
    return {code: a.impact_code, first_name: consented(a.recognition_consent) ? a.first_name : '', active: true};
  }
  if (action === 'getAdvocateImpact') {
    const a = requireToken(advocateFor(state, payload.code, false), payload.token, 'dashboard_token_hash', runtime);
    const people = activePeople(state).filter(p => p.advocate_code === a.impact_code);
    const reached = people.length;
    return {code: a.impact_code, first_name: a.first_name, people: reached, milestone: Math.max(0, ...impactConfig.milestones.filter(n => n <= reached)), milestones: state.Milestones.filter(m => m.advocate_code === a.impact_code).map(m => ({milestone: m.milestone, date_achieved: m.date_achieved})), ...pageOf(people.slice().reverse().map(p => ({...publicPerson(state, p), status: ['confirmed','attended'].includes(String(p.ticket_status)) ? 'Coming to EITDA' : 'Experience completed'})), payload)};
  }
  if (action === 'getPerson') {
    const p = requireToken(state.People.find(p => p.person_id === payload.person_id), payload.token, 'consent_token_hash', runtime);
    return {person_id: p.person_id, first_name: p.first_name, public_display_consent: consented(p.public_display_consent), ticket_status: p.ticket_status};
  }
  if (action === 'createAdvocate') {
    const sub = submission(payload, runtime);
    if (payload.privacy_consent !== true || payload.commitment !== true) throw new ImpactError('Please confirm both required checkboxes.');
    const linkedin = textField(payload.linkedin, 'your LinkedIn profile', 240, false);
    if (linkedin && !/^https:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9%_-]+\/?$/.test(linkedin)) throw new ImpactError('Use a full LinkedIn profile link.');
    const fields: Row = {
      first_name: textField(payload.first_name, 'your first name', 60), last_name: textField(payload.last_name, 'your last name', 60), email: email(payload.email, true), phone: phone(payload.phone, true), city: textField(payload.city, 'your city', 80), country: textField(payload.country, 'your country', 80), twitter: textField(payload.twitter, 'your X username', 60, false), linkedin, instagram: textField(payload.instagram, 'your Instagram username', 60, false),
      profession_person_in_mind: option(payload.profession_person_in_mind, impactConfig.professions, 'a profession'), experience_range_person_in_mind: option(payload.experience_range_person_in_mind, impactConfig.experienceRanges, 'an experience range'), outside_income_answer: option(payload.outside_income_answer, impactConfig.intentIncome, 'an answer'), recognition_consent: bool(payload.recognition_consent ?? false, 'recognition consent'),
    };
    const hash = runtime.hash(JSON.stringify(fields));
    let advocate = retryRecord(state.Advocates, sub.id, sub.secretHash, hash);
    const token = runtime.token(`dashboard:${sub.id}:${sub.secret}`);
    if (!advocate) {
      let code = '';
      for (let i = 0; i < 20; i++) { code = `ONE${runtime.id().replace(/-/g, '').slice(0, 8).toUpperCase()}`; if (!state.Advocates.some(a => a.impact_code === code)) break; code = ''; }
      if (!code) throw new ImpactError('Please try again in a moment.', 503);
      advocate = {...fields, advocate_id: runtime.id(), impact_code: code, date_joined: runtime.now(), status: 'active', total_people_reached: 0, current_milestone: 0, submission_id: sub.id, submission_hash: hash, submission_secret_hash: sub.secretHash, dashboard_token_hash: runtime.hash(token), privacy_consent_at: runtime.now(), privacy_version: impactConfig.privacyVersion, possible_duplicate: state.Advocates.some(a => a.email === fields.email)};
      state.Advocates.push(advocate);
    }
    event(state, runtime, 'advocate_created', String(advocate.impact_code), '', {}, `advocate:${sub.id}`);
    reconcile(state, runtime);
    return {code: advocate.impact_code, first_name: advocate.first_name, dashboard_token: token};
  }
  if (action === 'createPerson') {
    const sub = submission(payload, runtime);
    if (payload.privacy_consent !== true) throw new ImpactError('Please agree to the privacy notice.');
    const code = textField(payload.advocate_code ?? '', 'the impact code', 32, false).toUpperCase();
    if (code) advocateFor(state, code);
    if (typeof payload.years_experience !== 'number' || !Number.isInteger(payload.years_experience) || payload.years_experience < 0 || payload.years_experience > 80) throw new ImpactError('Enter your actual years of experience, from 0 to 80.');
    const fields: Row = {advocate_code: code, first_name: textField(payload.first_name, 'your first name', 60), profession: option(payload.profession, impactConfig.professions, 'your profession'), years_experience: payload.years_experience, outside_income: option(payload.outside_income, impactConfig.outsideIncome, 'an answer'), known_for: textField(payload.known_for, 'what people ask you for help with', 500), discovery_goal: option(payload.discovery_goal, impactConfig.goals, 'what you want to understand'), email: email(payload.email, false), phone: phone(payload.phone, false), city: textField(payload.city, 'your city', 80, false), country: textField(payload.country, 'your country', 80, false), public_display_consent: bool(payload.public_display_consent ?? false, 'wall consent')};
    const hash = runtime.hash(JSON.stringify(fields));
    let person = retryRecord(state.People, sub.id, sub.secretHash, hash);
    const token = runtime.token(`consent:${sub.id}:${sub.secret}`);
    if (!person) {
      person = {...fields, person_id: runtime.id(), registration_status: 'experience_completed', ticket_status: 'not_started', date_added: runtime.now(), submission_id: sub.id, submission_hash: hash, submission_secret_hash: sub.secretHash, consent_token_hash: runtime.hash(token), privacy_consent_at: runtime.now(), privacy_version: impactConfig.privacyVersion, person_number: Math.max(0, ...state.People.map(p => Number(p.person_number) || 0)) + 1, featured: false, story_collected: false, outcome_recorded: false};
      state.People.push(person);
    }
    event(state, runtime, 'experience_completed', code, String(person.person_id), {}, `person:${sub.id}`);
    reconcile(state, runtime);
    return {person_id: person.person_id, person_number: person.person_number, first_name: person.first_name, profession: person.profession, years_experience: person.years_experience, consent_token: token, public_display_consent: consented(person.public_display_consent), stats: campaignStats(state)};
  }
  if (action === 'updateConsent') {
    const p = requireToken(state.People.find(p => p.person_id === payload.person_id), payload.token, 'consent_token_hash', runtime);
    p.public_display_consent = bool(payload.public_display_consent, 'wall consent');
    event(state, runtime, 'consent_updated', String(p.advocate_code), String(p.person_id), {public_display_consent: p.public_display_consent});
    reconcile(state, runtime);
    return {public_display_consent: p.public_display_consent};
  }
  if (action === 'trackEvent') {
    const type = option(payload.event_type, ['impact_link_opened', 'experience_started', 'share_clicked', 'ticket_clicked'], 'an activity');
    const id = textField(payload.submission_id, 'the activity ID', 80);
    if (!/^[a-f0-9-]{32,80}$/.test(id)) throw new ImpactError('Invalid activity.');
    let code = textField(payload.advocate_code ?? '', 'the impact code', 32, false).toUpperCase();
    let personId = '';
    const metadata: Payload = {};
    if (type === 'ticket_clicked') {
      const p = requireToken(state.People.find(p => p.person_id === payload.person_id), payload.token, 'consent_token_hash', runtime);
      if (p.ticket_status === 'not_started') p.ticket_status = 'clicked';
      personId = String(p.person_id); code = String(p.advocate_code);
      metadata.ticket = option(payload.ticket, ['general','vip'], 'a ticket');
    } else if (code) advocateFor(state, code);
    if (type === 'share_clicked') metadata.channel = option(payload.channel, ['copy','whatsapp','x','linkedin','facebook','download','native'], 'a share option');
    event(state, runtime, type, code, personId, metadata, `activity:${id}`);
    return {recorded: true};
  }
  throw new ImpactError('This action is not available.', 404);
}
