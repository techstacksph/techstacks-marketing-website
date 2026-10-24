import './globals.css';

import { Providers } from '@/components/providers';
import Loader from '@/components/route-progress-bar';
import { dmSans, inter, poppins } from '@/lib/fonts';
import { cn } from '@/utils/cn';
import { SkipToMain } from '@/components/skip-main-btn';
import { CookieBanner } from '@/components/cookie-banner';
import { createMetadata } from '@/utils/create-metadata';
import { Toaster } from '@/components/ui/toaster';

export const metadata = createMetadata();

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://techstacksph.com/#organization',
  name: 'Techstacks IT Services Inc.',
  legalName: 'Techstacks IT Services Inc.',
  alternateName: 'Techstacks',
  url: 'https://techstacksph.com/',
  disambiguatingDescription:
    'Techstacks IT Services Inc. is a corporation and is not affiliated with, owned by, or operated under Techstacks IT Web Development Services, a separate sole proprietorship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(
        'scroll-smooth',
        dmSans.variable,
        poppins.variable,
        inter.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body className="font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SkipToMain />
        <Providers>
          <Loader />
          {children}
        </Providers>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
