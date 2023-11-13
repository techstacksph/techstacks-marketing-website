'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface OurTeamCardProps {
  img?: StaticImageData;
  name?: string;
  position?: string;
  index: number;
}

export default function OurTeamCard({
  img,
  name,
  position,
  index,
}: OurTeamCardProps) {
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
      className="relative bg-primary-static/50 backdrop-blur-3xl overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {img ? (
        <Image
          alt={`${name} image`}
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={img}
        />
      ) : null}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
        <h3 className="text-lg text-white font-medium">{name}</h3>
        <p className="text-base text-white">{position}</p>
      </div>
      <div
        className="absolute -z-[1] top-0 left-0 w-64 h-64 rounded-full bg-primary-static/70 blur-2xl"
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
