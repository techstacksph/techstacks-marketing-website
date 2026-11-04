import { Slot } from '@radix-ui/react-slot';
import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          'relative overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
GlowCard.displayName = 'glow-card';

export const GlowCardContent = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp className={cn(className)} {...props} ref={ref} />;
  },
);
GlowCardContent.displayName = 'glow-card-content';
