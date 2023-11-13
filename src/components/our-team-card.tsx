'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { GlowCard, GlowCardContent } from './glow-card';

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
  return (
    <GlowCard data-aos="fade-up" data-aos-delay={index * 100}>
      <GlowCardContent>
        {img ? (
          <Image
            alt={`${name} image`}
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={img}
          />
        ) : null}
        <div className="absolute inset-0 flex flex-col justify-center gap-4 px-5 py-4 text-center rounded-lg transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <h3 className="text-lg text-white font-medium">{name}</h3>
          <p className="text-base text-white">{position}</p>
        </div>
      </GlowCardContent>
    </GlowCard>
  );
}
