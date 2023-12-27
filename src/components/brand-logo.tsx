import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { TechstacksLogo } from './icons/techstacks-logo';

type BrandLogoProps = HTMLAttributes<HTMLDivElement>;

export default function BrandLogo({ className, ...props }: BrandLogoProps) {
  return (
    <div
      className={cn('flex gap-2 items-center transition-all', className)}
      {...props}
    >
      <TechstacksLogo className="text-4xl" />
      <span className="text-sm font-semibold tracking-wide font-poppins">
        Techstacks
      </span>
    </div>
  );
}
