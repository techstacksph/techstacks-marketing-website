import { Slot } from '@radix-ui/react-slot';
import { type HTMLAttributes, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const headingVariants = cva('font-poppins', {
  variants: {
    level: {
      1: 'text-3xl font-semibold leading-tight lg:text-5xl xl:text-7xl xl:leading-normal',
      2: 'text-3xl font-semibold [&]:leading-normal lg:text-4xl xl:text-5xl',
      3: 'text-2xl font-medium',
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
          'text-base leading-loose text-muted-foreground lg:text-xl',
          className,
        )}
        ref={ref}
      />
    );
  },
);
Subheading.displayName = 'subheading';
