import { Slot } from '@radix-ui/react-slot';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface MainProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Main = forwardRef<HTMLElement, MainProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'main';
    return <Comp className={cn('space-y-8', className)} {...props} ref={ref} />;
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
        className={cn('w-full max-w-7xl px-4 mx-auto', className)}
        {...props}
        ref={ref}
      />
    );
  },
);
Section.displayName = 'section';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h1';
    return (
      <Comp
        className={cn(
          'text-3xl font-semibold leading-tight lg:text-5xl xl:text-7xl',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Comp>
    );
  },
);
H1.displayName = 'h1';

interface SubheadingProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
export const Subheading = forwardRef<HTMLParagraphElement, SubheadingProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(
          'text-base leading-loose text-left text-muted lg:text-xl',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Comp>
    );
  },
);
Subheading.displayName = 'subheading';
