import Link from 'next/link';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Image
            src="/eshiet-foundation-full-logo.png"
            alt="Eshiet Foundation"
            width={600}
            height={200}
            unoptimized
          />

          <div>
            <strong>EITDA</strong>
            <span>Earning in the Digital Age</span>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <Link href="/#about">About</Link>
          <Link href="/#programme">Programme</Link>
          <Link href="/#speakers">Speakers</Link>
          <Link href="/#tickets">Tickets</Link>
          <Link href="/#impact">Impact</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/blog">Stories</Link>
        </nav>
      </div>

      <div className="footer-socials">
        <div className="footer-socials-copy">
          <span>Stay connected</span>
          <strong>Follow the journey beyond the event.</strong>
        </div>

        <div
          className="footer-social-links"
          aria-label="Eshiet Foundation social channels"
        >
          <a
            href="https://x.com/EshietS12477"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Eshiet Foundation on X"
          >
            <span className="social-mark" aria-hidden="true">
              X
            </span>
            <span className="social-link-copy">
              <small>Follow us on</small>
              <strong>X</strong>
            </span>
            <span className="social-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb86kPQ2ZjCmbY8RrY1x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Eshiet Foundation WhatsApp Channel"
          >
            <span className="social-mark whatsapp-mark" aria-hidden="true">
              W
            </span>
            <span className="social-link-copy">
              <small>Join our</small>
              <strong>WhatsApp Channel</strong>
            </span>
            <span className="social-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>An initiative of Eshiet Foundation</span>
        <span>© {new Date().getFullYear()} Eshiet Foundation</span>
      </div>
    </footer>
  );
}
