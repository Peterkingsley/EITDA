'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Check, Copy, Download, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { NativeSelect } from '@/components/ui/native-select';
import { SocialIcon } from '@/components/social-icon';
import { impactConfig } from '@/lib/impact/config';
import { activity, analytics, api, publicLink, type PublicPerson, type Stats } from '@/lib/impact/client';

export function Field({label,name,value,onChange,required=true,type='text',maxLength=80,autoComplete,children}: {label:string;name:string;value:string;onChange:(value:string)=>void;required?:boolean;type?:string;maxLength?:number;autoComplete?:string;children?:ReactNode}) {
  return <label className="impact-field" htmlFor={name}><span>{label}{!required && <small> Optional</small>}</span>{children || <Input id={name} name={name} type={type} value={value} required={required} maxLength={maxLength} autoComplete={autoComplete} onChange={e=>onChange(e.target.value)} />}</label>;
}
export function SelectField({label,name,value,onChange,options}: {label:string;name:string;value:string;onChange:(value:string)=>void;options:string[]}) {
  return <Field label={label} name={name} value={value} onChange={onChange}><NativeSelect id={name} name={name} value={value} required onChange={e=>onChange(e.target.value)}><option value="">Choose an answer</option>{options.map(item=><option key={item} value={item}>{item}</option>)}</NativeSelect></Field>;
}
export function ConsentCheck({id,checked,onChange,children,required=false}: {id:string;checked:boolean;onChange:(value:boolean)=>void;children:ReactNode;required?:boolean}) {
  return <div className="impact-check"><Checkbox id={id} checked={checked} required={required} onCheckedChange={onChange} /><label htmlFor={id}>{children}</label></div>;
}
export function ErrorNotice({message}: {message:string}) { return message ? <p className="impact-error" role="alert">{message}</p> : null; }
export function StepHeading({step,total,title,copy}: {step:number;total:number;title:string;copy:string}) {
  return <div className="impact-step-heading"><p className="impact-kicker">One person · Step {step} of {total}</p><h1 tabIndex={-1} id="impact-step-title">{title}</h1><p>{copy}</p><div className="impact-steps" aria-label={`Step ${step} of ${total}`}>{Array.from({length:total},(_,i)=><span key={i} className={i<step?'is-complete':''} />)}</div></div>;
}
export function useDraft<T extends object>(key:string, initial:T) {
  const [value,setValue] = useState(initial);
  const ready = useRef(false);
  useEffect(()=>{
    try { const saved = JSON.parse(sessionStorage.getItem(key) || 'null'); if (saved && Date.now()-saved.at < 86400000 && typeof saved.value === 'object') setValue({...initial,...saved.value}); } catch { /* Form still works without browser storage. */ }
    ready.current=true;
    // The form's initial schema is constant; restore once per form instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[key]);
  useEffect(()=>{if(ready.current) try {sessionStorage.setItem(key,JSON.stringify({value,at:Date.now()}));} catch { /* In-memory answers remain available. */ }},[key,value]);
  const clear = ()=>{try{sessionStorage.removeItem(key);sessionStorage.removeItem(`${key}:submission`);}catch{/* Optional storage. */}};
  return {value,setValue,clear};
}
export function ImpactGrid({people,total,newPerson=false}: {people:PublicPerson[];total:number;newPerson?:boolean}) {
  const visible = people.slice(0,15);
  const occupied = Math.min(total,15);
  return <div className="impact-grid-wrap"><div className="impact-people-grid" aria-label={`${total} people have completed discovery. Each filled tile represents one person.`}>{Array.from({length:16},(_,i)=>{
    const person=visible[i]; const active=i<occupied || (newPerson && i===15);
    return <div key={i} className={`impact-person-tile ${active?'is-active':''} ${newPerson&&i===15?'just-added':''}`} aria-hidden="true">{active ? <>{person?.first_name_or_initial ? <b>{person.first_name_or_initial.slice(0,1)}</b>:<UserRound size={23}/>}<small>{person?.profession || (newPerson&&i===15?'You':'One person')}</small>{person && <span>{person.years_experience} years</span>}</>:<span className="impact-empty-tile">+</span>}</div>;
  })}</div><p className="impact-grid-caption"><span /> One tile. One person. One first step.</p></div>;
}
export function PersonCard({person}: {person:PublicPerson}) {
  return <article className="impact-person-card"><div className="impact-person-card-top"><span className="impact-initial" aria-hidden="true">{person.first_name_or_initial ? person.first_name_or_initial.slice(0,1) : <UserRound size={22}/>}</span><span>{person.first_name_or_initial || 'A person with experience'}</span></div><h3>{person.profession}</h3><p className="impact-years"><strong>{person.years_experience}</strong> {person.years_experience===1?'year':'years'} of experience</p>{person.status && <p className="impact-person-status"><Check size={14} aria-hidden="true" />{person.status}</p>}{person.advocate_first_name && <p className="impact-person-by">Brought here by {person.advocate_first_name}</p>}</article>;
}
export function ImpactCounter({initial}: {initial?:Stats}) {
  const [stats,setStats]=useState<Stats|undefined>(initial); const [failed,setFailed]=useState(false);
  useEffect(()=>{let active=true; const refresh=()=>{if(document.hidden)return; void api<Stats>('getCampaignStats').then(data=>{if(active){setStats(data);setFailed(false);}}).catch(()=>{if(active)setFailed(true);});};refresh(); const timer=setInterval(refresh,impactConfig.statsRefreshMs); return()=>{active=false;clearInterval(timer);};},[]);
  return <section className="impact-counters" aria-label="Campaign totals"><div><strong>{stats?stats.people.toLocaleString():'—'}</strong><span>People have taken the first step</span></div><div><strong>{stats?stats.combined_years.toLocaleString():'—'}</strong><span>Years of combined experience</span></div>{failed && <p role="status">{stats?'Showing the last available count.':'The live count is temporarily unavailable.'}</p>}</section>;
}
export function ShareButtons({code}: {code:string}) {
  const [notice,setNotice]=useState(''); const [link,setLink]=useState('');
  useEffect(()=>setLink(publicLink(code)),[code]);
  const copy=async()=>{try{await navigator.clipboard.writeText(link);setNotice('Link copied. Think of one person to send it to.');analytics('impact_link_copied');activity('share_clicked',code,'copy');}catch{setNotice('Select the link above and copy it to share.');}};
  const message=encodeURIComponent(`${impactConfig.shareText}\n${link}`); const url=encodeURIComponent(link);
  const links=[{name:'WhatsApp',icon:'whatsapp' as const,channel:'whatsapp',href:`https://wa.me/?text=${message}`},{name:'X',icon:'x' as const,channel:'x',href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(impactConfig.shareText)}&url=${url}`},{name:'LinkedIn',icon:'linkedin' as const,channel:'linkedin',href:`https://www.linkedin.com/sharing/share-offsite/?url=${url}`},{name:'Facebook',icon:'facebook' as const,channel:'facebook',href:`https://www.facebook.com/sharer/sharer.php?u=${url}`}];
  return <div className="impact-share"><label htmlFor={`share-${code}`}>Your public impact link</label><div className="impact-copy-row"><Input id={`share-${code}`} value={link} readOnly onFocus={e=>e.target.select()} /><Button className="impact-button" onClick={copy} disabled={!link}><Copy size={18} aria-hidden="true"/>Copy link</Button></div><div className="impact-share-buttons">{links.map(item=><a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" onClick={()=>{analytics('impact_link_shared',{channel:item.channel});activity('share_clicked',code,item.channel);}}><SocialIcon name={item.icon}/><span>{item.name}</span><span className="sr-only"> (opens in a new tab)</span></a>)}</div><p className="impact-status" role="status">{notice}</p></div>;
}
export function PrivateLink({url,label='Save your private dashboard link'}: {url:string;label?:string}) {
  const [copied,setCopied]=useState(false);
  return <details className="impact-private-link"><summary>{label}</summary><p>Keep this link for yourself. It gives access from another device. Do not share it with someone you invite.</p><Input aria-label={label} value={url} readOnly onFocus={e=>e.target.select()}/><Button className="impact-button impact-button-outline" onClick={async()=>{try{await navigator.clipboard.writeText(url);setCopied(true);}catch{setCopied(false);}}}>{copied?'Copied':'Copy private link'}</Button></details>;
}
export function MilestoneCard({count,name,code}: {count:number;name:string;code:string}) {
  const [error,setError]=useState(''); const [busy,setBusy]=useState(false);
  const download=async()=>{setBusy(true);setError('');try{
    await document.fonts.ready;
    const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1080;const c=canvas.getContext('2d');if(!c)throw new Error();
    c.fillStyle='#07101f';c.fillRect(0,0,1080,1080);c.fillStyle='#ffc400';c.fillRect(72,72,72,8);c.font='bold 36px Arial';c.fillStyle='#fff';c.fillText('EITDA',72,148);c.font='bold 230px Arial';c.fillStyle='#ffc400';c.fillText(String(count),65,400);c.font='bold 64px Arial';c.fillStyle='#fff';c.fillText(count===1?'PERSON.':'PEOPLE.',72,490);
    const wrap=(text:string,y:number,size:number)=>{c.font=`${size}px Arial`;let line='';for(const word of text.split(' ')){if(c.measureText(`${line}${word} `).width>900&&line){c.fillText(line.trim(),72,y);y+=size*1.35;line='';}line+=`${word} `;}c.fillText(line.trim(),72,y);return y;};
    let y=wrap(`I helped ${count===1?'one person':`${count} people`} take the first step toward discovering what their experience is worth.`,595,44);y=wrap(`Because ${name} thought of someone.`,y+110,30);c.fillStyle='#ffc400';wrap('Earning in the Digital Age · Eshiet Foundation',970,26);
    const blob=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(new Error()),'image/png'));
    const href=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=href;anchor.download=`eitda-${count}-people.png`;anchor.click();setTimeout(()=>URL.revokeObjectURL(href),1000);analytics('milestone_shared',{milestone:count,channel:'download'});activity('share_clicked',code,'download');
  }catch{setError('The card couldn’t download. Please try again.');}finally{setBusy(false);}};
  return <div><article className="impact-milestone-card"><p className="impact-kicker">EITDA · Because you thought of someone</p><strong>{count.toLocaleString()}</strong><h2>{count===1?'PERSON.':'PEOPLE.'}</h2><p>{count===1?'One person has':`${count} people have`} taken a step toward discovering what their experience is worth because of you.</p><span>Earning in the Digital Age</span></article><Button className="impact-button impact-button-outline" onClick={download} disabled={busy||count===0}><Download size={18} aria-hidden="true"/>{busy?'Preparing your card…':'Download your impact card'}</Button><ErrorNotice message={error}/></div>;
}
export function CampaignLink({href,children}: {href:string;children:ReactNode}) { return <a className="impact-button" href={href}>{children}<ArrowUpRight size={18} aria-hidden="true"/></a>; }
