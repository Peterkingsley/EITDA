import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: 'EITDA — Earning in the Digital Age',
  description:
    'The second edition of EITDA takes place 28 November 2026 at Women War Memorial, Ikot Abasi, Akwa Ibom. General admission is free and VIP tickets are ₦15,000.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'EITDA — Earning in the Digital Age',
    description:
      'EITDA Second Edition · 28 November 2026 · Women War Memorial, Ikot Abasi · Free entry · VIP ₦15,000.',
    type: 'website',
    images: [{ url: '/eitda-community.jpg', width: 1920, height: 1280, alt: 'The EITDA community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EITDA — Earning in the Digital Age',
    description:
      'EITDA Second Edition · 28 November 2026 · Women War Memorial, Ikot Abasi · Free entry · VIP ₦15,000.',
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
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
