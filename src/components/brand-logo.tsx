'use client';

import type { HTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/utils/cn';
import { TechstacksLogo } from './icons/techstacks-logo';

type BrandLogoProps = HTMLAttributes<HTMLDivElement>;

function BrandLogo({ className, ...props }: BrandLogoProps) {
  return (
    <div
      className={cn(
        'flex gap-2 items-center text-white dark:text-primary-foreground',
        className,
      )}
      {...props}
    >
      <TechstacksLogo className="text-4xl" />
      <span className="text-sm font-semibold tracking-wide font-poppins">
        Techstacks
      </span>
    </div>
  );
}

export default dynamic(() => Promise.resolve(BrandLogo));
