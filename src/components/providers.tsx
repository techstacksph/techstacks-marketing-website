'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      defaultTheme="system"
      enableSystem
      storageKey="theme"
      themes={['light', 'dark', 'system']}
    >
      {children}
    </ThemeProvider>
  );
}
