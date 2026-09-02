import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EITDA 2.0 | Turn Your Experience Into an Offer People Can Buy',
  description:
    'Join EITDA 2.0 in Ikot Abasi or online on 28 November 2026. Learn how to package your knowledge, skills, and experience into products, services, opportunities, and income.',
  icons: { icon: '/eshiet-foundation-logo.png' },
  openGraph: {
    title: 'Your Experience Has Value Beyond Your Job Title | EITDA 2.0',
    description:
      'Discover how to turn what you already know into a clear offer, reach the right audience, price your value, and build something you own.',
    type: 'website',
    images: [{ url: '/eitda-community.jpg', width: 1920, height: 1280, alt: 'The EITDA community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Experience Has Value Beyond Your Job Title | EITDA 2.0',
    description:
      'Turn what you already know into a clear offer, reach the right audience, price your value, and build something you own.',
    images: ['/eitda-community.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
