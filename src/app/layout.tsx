import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteStructuredData } from '@/components/structured-data';
import { WhatsAppFab } from '@/components/whatsapp-fab';
import { site } from '@/content/site';
import './globals.css';

/**
 * schema.org `sameAs` — the profiles that corroborate this is the same entity.
 * Read off the footer's Follow column so a link added there is picked up here
 * automatically; placeholder "#" entries are skipped.
 */
const socialProfiles = site.footer.columns
  .flatMap((column) => column.links)
  .map((link) => link.href)
  .filter((href) => href.startsWith('http'));

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const body = Hanken_Grotesk({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: {
    // Applies to child segments only, so the home page keeps `default` verbatim
    // rather than being suffixed twice.
    default: site.meta.title,
    template: `%s | ${site.meta.titleSuffix}`,
  },
  description: site.meta.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.meta.titleSuffix,
    locale: site.meta.locale,
    url: '/',
    title: site.meta.title,
    description: site.meta.description,
    images: '/nathan-hero.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.meta.title,
    description: site.meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteStructuredData sameAs={socialProfiles} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
