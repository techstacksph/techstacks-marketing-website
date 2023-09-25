'use client';

import { useTheme } from 'next-themes';
import { Poppins } from 'next/font/google';
import { cn } from '@/utils/cn';
import { TechstacksLogo } from './icons/techstacks-logo';

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

function BrandLogo() {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        'flex gap-2 items-center',
        resolvedTheme === 'dark' && 'text-primary',
        resolvedTheme === 'light' && 'text-white',
      )}
      suppressHydrationWarning
    >
      <TechstacksLogo className="text-4xl" />
      <span
        className={cn('font-semibold text-sm tracking-wide', poppins.className)}
      >
        Techstacks
      </span>
    </div>
  );
}

export default BrandLogo;
