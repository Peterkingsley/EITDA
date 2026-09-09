import { ArrowUpRight } from 'lucide-react';
import { SiteImage } from '@/components/site-image';

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? ' site-header-solid' : ''}`}>
      <a className="brand" href="/" aria-label="EITDA home">
        <SiteImage
          src="/eshiet-foundation-full-logo.png"
          alt="Eshiet Foundation"
          width={600}
          height={200}
          sizes="(max-width: 520px) 84px, (max-width: 820px) 94px, 112px"
          loading="eager"
        />
        <span>
          <strong>EITDA</strong>
          <small>Second Edition · 2026</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#programme">Programme</a>
        <a href="/#speakers">Speakers</a>
        <a href="/#tickets">Tickets</a>
        <a href="/#impact">Impact</a>
        <a href="/#faq">FAQ</a>
        <a href="/blog" aria-current={solid ? 'page' : undefined}>
          Stories
        </a>
      </nav>

      <a
        className="mobile-stories-link"
        href="/blog"
        aria-current={solid ? 'page' : undefined}
      >
        Stories
      </a>

      <a className="nav-cta" href="/#tickets">
        Book tickets
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </header>
  );
}
