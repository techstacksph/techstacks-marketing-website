'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, type PropsWithChildren } from 'react';
import AOS from 'aos';
import hljs from 'highlight.js';

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    hljs.configure({ cssSelector: '[data-hljs] pre:has(code) > code' });
    hljs.highlightAll();
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
