'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const separatorVariants = cva('shrink-0', {
  variants: {
    variant: {
      default: 'bg-border',
      horizon:
        'bg-radial-gradient from-white via-primary-static to-transparent',
    },
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px h-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> &
  VariantProps<typeof separatorVariants>;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      variant,
      orientation = 'horizontal',
      decorative = true,
      ...props
    },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      className={cn(separatorVariants({ variant, orientation, className }))}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
