import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://uniqor.com'),
  title: {
    default: 'Uniqor — Agent Infrastructure for Critical Systems',
    template: '%s | Uniqor'
  },
  description:
    'Uniqor gives institutions secure, governed, auditable AI that reasons across departments, systems, policies, and workflows so every decision can be traced, defended, and trusted.',
  applicationName: 'Uniqor',
  keywords: [
    'institutional AI',
    'agent infrastructure',
    'AI governance',
    'auditable AI',
    'decision intelligence',
    'regulated enterprise AI',
    'AI trust layer',
    'governed intelligence core'
  ],
  authors: [{ name: 'Uniqor' }],
  creator: 'Uniqor',
  publisher: 'Uniqor',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Uniqor — The Core Intelligence Stack for Critical Systems',
    description:
      'Secure, governed, auditable AI for institutions where accuracy, accountability, and governance are non-negotiable.',
    url: 'https://uniqor.com',
    siteName: 'Uniqor',
    images: [
      {
        url: '/brand/Logo_Dark_BG.png',
        width: 1200,
        height: 1200,
        alt: 'Uniqor logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniqor — Agent Infrastructure for Critical Systems',
    description:
      'The governed intelligence core for institutions where decisions must be traceable, defensible, and trusted.',
    images: ['/brand/Logo_Dark_BG.png']
  },
  icons: {
    icon: '/brand/Monogram_Dark_BG.png',
    apple: '/brand/Monogram_Dark_BG.png'
  }
};

export const viewport: Viewport = {
  themeColor: '#040B14',
  colorScheme: 'dark'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
