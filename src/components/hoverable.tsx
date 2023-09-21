import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const hoverableParent = cva(
  [
    'relative',
    'before:absolute before:w-full before:border-t-2 before:-z-[1] before:pointer-events-none before:transition-all before:opacity-0',
    'after:absolute after:w-full after:border-b-2 after:-z-[1] after:pointer-events-none after:transition-all after:opacity-0',
    'hover:before:opacity-100',
    'hover:after:opacity-100',
  ],
  {
    variants: {
      variant: {
        y: [
          'after:-bottom-10 hover:after:bottom-0',
          'before:-top-10 hover:before:top-0',
        ],
        x: [
          'after:-right-10 hover:after:right-0',
          'before:-left-10 hover:before:left-0',
        ],
      },
    },
    defaultVariants: {
      variant: 'y',
    },
  },
);

interface HoverableParentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hoverableParent> {
  asChild?: boolean;
}

const HoverableParent = forwardRef<HTMLDivElement, HoverableParentProps>(
  ({ asChild, className, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(hoverableParent({ variant, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
HoverableParent.displayName = 'hoverable-parent';

const hoverableChild = cva([
  'relative before:absolute before:bg-white before:transition-all before:pointer-events-none before:-z-[1]',
  'before:w-0 before:h-0 before:top-1/2 before:left-1/2',
  'before:hover:top-0 before:hover:left-0 before:hover:h-full before:hover:w-full',
]);

interface HoverableChildProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hoverableChild> {
  asChild?: boolean;
}

const HoverableChild = forwardRef<HTMLDivElement, HoverableChildProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(hoverableChild({ className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
HoverableChild.displayName = 'hoverable-child';

export { HoverableParent, hoverableParent, HoverableChild, hoverableChild };
