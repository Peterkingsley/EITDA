'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { speakers } from '@/content/speakers';
import { SiteImage } from '@/components/site-image';

export function SpeakersMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <section
        className="speaker-marquee"
        aria-label="EITDA 2026 speakers, panelists and co-hosts"
      >
        <div
          className="speaker-marquee-track"
          style={{
            animationDuration: `${(speakers.length + 1) * 16}s`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {[0, 1].map((copy) => (
            <div className="speaker-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {speakers.map((speaker) => (
                <article className="speaker-card" key={speaker.name}>
                  <SiteImage
                    className="speaker-poster"
                    src={speaker.image}
                    alt={copy === 0 ? `EITDA 2026 ${speaker.role.toLowerCase()} reveal poster for ${speaker.name}` : ''}
                    sizes="(max-width: 620px) 78vw, (max-width: 1385px) 26vw, 360px"
                  />
                  <div className="speaker-card-copy">
                    <small>{speaker.role}</small>
                    <h3>{speaker.name}</h3>
                    <p>{speaker.title}</p>
                  </div>
                </article>
              ))}
              <article className="speaker-card speaker-coming-soon">
                <span className="speaker-coming-soon-mark" aria-hidden="true">+</span>
                <div className="speaker-card-copy">
                  <small>The lineup is growing</small>
                  <h3>More voices.<br />More possibilities.</h3>
                  <p>More speakers and panelists will be announced soon.</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
      <div className="speaker-marquee-controls">
        <button type="button" onClick={() => setPaused((value) => !value)}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? 'Resume sliding' : 'Pause sliding'}
        </button>
      </div>
    </>
  );
}
