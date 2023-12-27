'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

function Loader() {
  const { resolvedTheme } = useTheme();

  return (
    <ProgressBar
      color={
        resolvedTheme === 'dark'
          ? 'hsl(var(--primary-static))'
          : 'hsl(var(--accent))'
      }
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}

export default dynamic(() => Promise.resolve(Loader), { ssr: false });
