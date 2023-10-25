'use client';

import React from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import dynamic from 'next/dynamic';
import { serviceToolsLogo } from '@/constants/service-tools';

function ToolsCarousel() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      infinite
      items={serviceToolsLogo.map((tools) => (
        <div
          className="flex h-10 items-center place-content-center px-4"
          key={tools.title}
        >
          <Image
            alt={`${tools.title} logo`}
            className="grayscale"
            height={36}
            src={tools.logo}
          />
        </div>
      ))}
      mouseTracking
      responsive={{
        0: { items: 2 },
        375: { items: 3 },
      }}
    />
  );
}

export default dynamic(() => Promise.resolve(ToolsCarousel), { ssr: false });
