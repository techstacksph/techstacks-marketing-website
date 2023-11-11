'use client';

import { Slot } from '@radix-ui/react-slot';
import {
  type HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { cn } from '@/utils/cn';

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};
export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const glowRef = useRef<HTMLDivElement>(null);
    const hiddenRef = useRef<HTMLDivElement>(null);
    const Comp = asChild ? Slot : 'div';

    const handleMouseMove = useCallback((evt: MouseEvent) => {
      const rec = hiddenRef.current?.getBoundingClientRect();

      glowRef.current?.animate(
        [
          {
            transform: `translate(${
              evt.clientX - (rec?.left || 0) - (rec?.width || 0) / 2
            }px,${evt.clientY - (rec?.top || 0) - (rec?.height || 0) / 2}px)`,
          },
        ],
        {
          duration: 300,
          fill: 'forwards',
        },
      );
    }, []);

    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [handleMouseMove]);

    return (
      <Comp
        className={cn('relative p-1 overflow-hidden rounded-lg', className)}
        {...props}
        ref={ref}
      >
        {children}

        <div
          className="absolute -z-[1] top-0 left-0 w-64 h-64 rounded-full bg-primary-static/30 blur-2xl"
          ref={glowRef}
          role="none"
        />
        <div
          className="absolute -z-[1] top-0 left-0 w-52 h-52 rounded-full invisible"
          ref={hiddenRef}
          role="none"
        />
      </Comp>
    );
  },
);
GlowCard.displayName = 'glow-card';

export const GlowCardContent = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          'transition bg-background/50 backdrop-blur-3xl rounded-lg',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
GlowCardContent.displayName = 'glow-card-content';
