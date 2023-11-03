'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Separator } from './ui/separator';

interface CoreServicesCardProps {
  index: number;
  title?: string;
  description?: string;
  src?: StaticImageData;
}

function CoreServicesCard({
  index,
  src,
  title,
  description,
}: CoreServicesCardProps) {
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
      className="relative p-1 overflow-hidden rounded-lg h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-full h-full p-8 lg:p-10 transition rounded-lg  bg-background/50 backdrop-blur-3xl">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="space-y-4">
            <div className="h-10 w-20">
              {src ? <Image alt={`${title} icon`} src={src} /> : null}
            </div>
            <h3 className="space-y-4 text-lg md:text-2xl font-bold">
              <span className="block">{title}</span>
            </h3>
            <p className="text-lg text-muted">{description}</p>
          </div>

          <Separator className="h-1 bg-primary-static" />
        </div>
      </div>

      <div
        className="absolute -z-[1] top-0 left-0 w-64 h-64 rounded-full bg-primary-static/80 blur-2xl"
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

export { CoreServicesCard };
