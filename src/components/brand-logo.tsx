'use client';

import { useTheme } from 'next-themes';
import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { poppins } from '@/lib/font-poppins';
import { TechstacksLogo } from './icons/techstacks-logo';

type BrandLogoProps = HTMLAttributes<HTMLDivElement>;

function BrandLogo({ className, ...props }: BrandLogoProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        'flex gap-2 items-center',
        resolvedTheme === 'dark' && 'text-primary-foreground',
        resolvedTheme === 'light' && 'text-white',
        className,
      )}
      suppressHydrationWarning
      {...props}
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
