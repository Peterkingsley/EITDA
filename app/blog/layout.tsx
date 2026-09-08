import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-shell">
      <a className="blog-skip-link" href="#blog-main">
        Skip to content
      </a>
      <SiteHeader solid />
      {children}
      <SiteFooter />
    </div>
  );
}
