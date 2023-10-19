'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import NextTopLoader from 'nextjs-toploader';

function Loader() {
  const { resolvedTheme } = useTheme();
  return (
    <NextTopLoader
      color={
        resolvedTheme === 'dark'
          ? 'hsl(var(--primary-static))'
          : 'hsl(var(--accent))'
      }
      showSpinner={false}
    />
  );
}

export default dynamic(() => Promise.resolve(Loader), { ssr: false });
