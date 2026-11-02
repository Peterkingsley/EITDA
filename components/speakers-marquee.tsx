'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import createAutoScroll from 'embla-carousel-auto-scroll';
import { speakers } from '@/content/speakers';
import { SiteImage } from '@/components/site-image';

export function SpeakersMarquee() {
  const [paused, setPaused] = useState(false);
  const autoScroll = useMemo(() => createAutoScroll({
    speed: 0.4,
    startDelay: 1500,
    stopOnInteraction: true,
    breakpoints: { '(prefers-reduced-motion: reduce)': { playOnInit: false } },
  }), []);
  const [carouselRef, carousel] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoScroll],
  );

  useEffect(() => {
    if (!carousel) return;
    const syncAutoScroll = () => {
      if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        autoScroll.stop();
      } else {
        autoScroll.play(1500);
      }
    };
    syncAutoScroll();
    carousel.on('pointerUp', syncAutoScroll).on('reInit', syncAutoScroll);
    return () => {
      carousel.off('pointerUp', syncAutoScroll).off('reInit', syncAutoScroll);
    };
  }, [carousel, autoScroll, paused]);

  function browse(direction: 'previous' | 'next') {
    if (!carousel) return;
    autoScroll.stop();
    if (direction === 'previous') carousel.scrollPrev();
    else carousel.scrollNext();
    if (!paused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      autoScroll.play(1500);
    }
  }

  return (
    <>
      <section
        ref={carouselRef}
        className="speaker-marquee"
        aria-label="EITDA 2026 speakers, panelists and co-hosts"
      >
        <div className="speaker-marquee-track">
          {[0, 1].map((copy) => (
            <Fragment key={copy}>
              {speakers.map((speaker) => (
                <article className="speaker-card" key={speaker.name} aria-hidden={copy === 1 ? true : undefined}>
                  <SiteImage
                    className="speaker-poster"
                    src={speaker.image}
                    draggable={false}
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
              <article className="speaker-card speaker-coming-soon" aria-hidden={copy === 1 ? true : undefined}>
                <span className="speaker-coming-soon-mark" aria-hidden="true">+</span>
                <div className="speaker-card-copy">
                  <small>The lineup is growing</small>
                  <h3>More voices.<br />More possibilities.</h3>
                  <p>More speakers and panelists will be announced soon.</p>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </section>
      <div className="speaker-marquee-controls">
        <span>Drag or swipe to explore</span>
        <button type="button" aria-label="Previous speaker" onClick={() => browse('previous')}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="speaker-pause" type="button" onClick={() => setPaused((value) => !value)}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? 'Resume sliding' : 'Pause sliding'}
        </button>
        <button type="button" aria-label="Next speaker" onClick={() => browse('next')}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
