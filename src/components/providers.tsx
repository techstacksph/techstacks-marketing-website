'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, type PropsWithChildren } from 'react';
import AOS from 'aos';

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <ThemeProvider
      defaultTheme="system"
      enableColorScheme
      enableSystem
      storageKey="theme"
      themes={['light', 'dark', 'system']}
    >
      {children}
    </ThemeProvider>
  );
}
