import { SiteImage } from '@/components/site-image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SocialIcon, type SocialIconName } from '@/components/social-icon';

const contactLinks: {
  icon: SocialIconName;
  label: string;
  prompt: string;
  href: string;
  accessibleLabel: string;
}[] = [
  {
    icon: 'x', label: 'X', prompt: 'Follow us on',
    href: 'https://x.com/EshietS12477',
    accessibleLabel: 'Follow Eshiet Foundation on X',
  },
  {
    icon: 'whatsapp', label: 'WhatsApp Channel', prompt: 'Join our',
    href: 'https://whatsapp.com/channel/0029Vb86kPQ2ZjCmbY8RrY1x',
    accessibleLabel: 'Join the Eshiet Foundation WhatsApp Channel',
  },
  {
    icon: 'linkedin', label: 'LinkedIn', prompt: 'Connect on',
    href: 'https://www.linkedin.com/company/eshiet-foundation/',
    accessibleLabel: 'Connect with Eshiet Foundation on LinkedIn',
  },
  {
    icon: 'facebook', label: 'Facebook', prompt: 'Follow us on',
    href: 'https://www.facebook.com/eshietfoundation',
    accessibleLabel: 'Follow Eshiet Foundation on Facebook',
  },
  {
    icon: 'tiktok', label: 'TikTok', prompt: 'Follow us on',
    href: 'https://www.tiktok.com/@eshiet.foundation',
    accessibleLabel: 'Follow Eshiet Foundation on TikTok',
  },
  {
    icon: 'email', label: 'eshietsfoundation@gmail.com', prompt: 'Email us',
    href: 'mailto:eshietsfoundation@gmail.com',
    accessibleLabel: 'Email Eshiet Foundation at eshietsfoundation@gmail.com',
  },
];

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

        <section
          className="footer-social-links"
          aria-label="Eshiet Foundation social channels and email"
        >
          {contactLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target={link.icon === 'email' ? undefined : '_blank'}
              rel={link.icon === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={link.accessibleLabel}
            >
              <span className="social-mark" aria-hidden="true">
                <SocialIcon name={link.icon} />
              </span>
              <span className="social-link-copy">
                <small>{link.prompt}</small>
                <strong>{link.label}</strong>
              </span>
              {link.icon === 'email'
                ? <Mail className="social-arrow" size={18} aria-hidden="true" />
                : <ArrowUpRight className="social-arrow" size={18} aria-hidden="true" />}
            </a>
          ))}
        </section>
      </div>

      <div className="footer-bottom">
        <span>An initiative of Eshiet Foundation</span>
        <span>© {new Date().getFullYear()} Eshiet Foundation</span>
      </div>
    </footer>
  );
}
