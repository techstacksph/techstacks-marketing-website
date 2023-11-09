'use client';

import { useCallback, useEffect, useRef } from 'react';
import { Separator } from './ui/separator';
import { H3 } from './ui/typography';

interface BenefitCardProps {
  index: number;
  title: string;
  description: string;
}

function BenefitCard({ index, title, description }: BenefitCardProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

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
    <div
      className="relative p-1 overflow-hidden rounded-lg"
      data-aos={index % 2 ? 'fade-left' : 'fade-right'}
      data-aos-delay={index * 100}
    >
      <div className="w-full h-full pt-3 pb-4 transition rounded-lg px-7 bg-background/50 backdrop-blur-3xl">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="space-y-4">
            <H3 className="space-y-4">
              <span className="block text-primary-static">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="block">{title}</span>
            </H3>
            <p className="text-lg text-muted">{description}</p>
          </div>

          <Separator className="h-1 bg-primary-static" />
        </div>
      </div>

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
    </div>
  );
}

export { BenefitCard };
