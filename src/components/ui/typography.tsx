import { Slot } from '@radix-ui/react-slot';
import { type HTMLAttributes, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const headingVariants = cva('font-display', {
  variants: {
    level: {
      1: 'text-4xl font-bold leading-[1.12] tracking-[-0.01em] lg:text-5xl xl:text-6xl',
      2: 'text-3xl font-bold leading-[1.18] tracking-[-0.01em] lg:text-4xl xl:text-[2.75rem]',
      3: 'text-xl font-semibold lg:text-2xl',
      4: 'text-xl font-semibold uppercase',
    },
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  asChild?: boolean;
};

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h1';
    return (
      <Comp
        className={cn(headingVariants({ level: 1, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
H1.displayName = 'h1';

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h2';
    return (
      <Comp
        className={cn(headingVariants({ level: 2, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
H2.displayName = 'h2';

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h3';
    return (
      <Comp
        className={cn(headingVariants({ level: 3, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
H3.displayName = 'h3';

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h4';
    return (
      <Comp
        className={cn(headingVariants({ level: 4, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
H4.displayName = 'h4';

type SubheadingProps = HTMLAttributes<HTMLParagraphElement> & {
  asChild?: boolean;
};
export const Subheading = forwardRef<HTMLParagraphElement, SubheadingProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        {...props}
        className={cn(
          'text-base leading-relaxed text-muted-foreground lg:text-lg',
          className,
        )}
        ref={ref}
      />
    );
  },
);
Subheading.displayName = 'subheading';
