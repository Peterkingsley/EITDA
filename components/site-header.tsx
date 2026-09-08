import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? ' site-header-solid' : ''}`}>
      <Link className="brand" href="/" aria-label="EITDA home">
        <Image
          src="/eshiet-foundation-full-logo.png"
          alt="Eshiet Foundation"
          width={600}
          height={200}
          unoptimized
        />
        <span>
          <strong>EITDA</strong>
          <small>Second Edition · 2026</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#programme">Programme</Link>
        <Link href="/#speakers">Speakers</Link>
        <Link href="/#tickets">Tickets</Link>
        <Link href="/#impact">Impact</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/blog" aria-current={solid ? 'page' : undefined}>
          Stories
        </Link>
      </nav>

      <Link
        className="mobile-stories-link"
        href="/blog"
        aria-current={solid ? 'page' : undefined}
      >
        Stories
      </Link>

      <Link className="nav-cta" href="/#tickets">
        Book tickets
        <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </header>
  );
}
