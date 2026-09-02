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
  title: 'EITDA — Earning in the Digital Age',
  description:
    'EITDA 2026 takes place 28 November at Women War Memorial, Ikot Abasi, Akwa Ibom. General admission is free and VIP tickets are ₦15,000.',
  icons: { icon: '/eshiet-foundation-logo.png' },
  openGraph: {
    title: 'EITDA — Earning in the Digital Age',
    description:
      '28 November 2026 · Women War Memorial, Ikot Abasi · Free entry · VIP ₦15,000.',
    type: 'website',
    images: [{ url: '/eitda-community.jpg', width: 1920, height: 1280, alt: 'The EITDA community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EITDA — Earning in the Digital Age',
    description:
      '28 November 2026 · Women War Memorial, Ikot Abasi · Free entry · VIP ₦15,000.',
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
