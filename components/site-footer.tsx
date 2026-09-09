import { SiteImage } from '@/components/site-image';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <SiteImage
            src="/eshiet-foundation-full-logo.png"
            alt="Eshiet Foundation"
            width={600}
            height={200}
            sizes="(max-width: 520px) 148px, 170px"
          />

          <div>
            <strong>EITDA</strong>
            <span>Earning in the Digital Age</span>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <a href="/#about">About</a>
          <a href="/#programme">Programme</a>
          <a href="/#speakers">Speakers</a>
          <a href="/#tickets">Tickets</a>
          <a href="/#impact">Impact</a>
          <a href="/#faq">FAQ</a>
          <a href="/blog">Stories</a>
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
