'use client';

import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect, type PropsWithChildren } from 'react';
import AOS from 'aos';
import { env } from '@/env.mjs';

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <>
      <GoogleAnalytics
        gaMeasurementId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        trackPageViews
      />
      <ThemeProvider
        defaultTheme="light"
        enableColorScheme
        enableSystem
        storageKey="theme"
        themes={['light', 'dark', 'system']}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
