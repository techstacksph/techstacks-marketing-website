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
