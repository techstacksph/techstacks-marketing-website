import { Slot } from '@radix-ui/react-slot';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface MainProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Main = forwardRef<HTMLElement, MainProps>(
  ({ asChild, className, id = 'main-content', ...props }, ref) => {
    const Comp = asChild ? Slot : 'main';
    return (
      <Comp
        className={cn('space-y-8 overflow-x-clip', className)}
        id={id}
        {...props}
        ref={ref}
      />
    );
  },
);
Main.displayName = 'main';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        className={cn('w-full max-w-7xl px-4 mx-auto scroll-mt-20', className)}
        {...props}
        ref={ref}
      />
    );
  },
);
Section.displayName = 'section';
