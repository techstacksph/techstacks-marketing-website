'use client';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@uidotdev/usehooks';
import { serviceToolsLogo } from '@/constants/service-tools';
import ToolsCarousel from './tools-carousel';
import { Section } from './default-elements';

export default function ServiceTools() {
  const isMobile = useMediaQuery('(min-width:768px)');

  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="flex flex-col gap-14 items-center lg:flex-row">
          <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2 ">
            <h3 className="text-2xl  font-semibold text-center  lg:font-bold lg:text-4xl  xl:text-5xl">
              Our Tailored Service Tools
            </h3>
            <p className="text-base font-normal text-muted text-center  lg:text-lg">
              We believe in crafting experiences that align seamlessly with your
              goals, and our tailored service tools play a vital role in
              achieving this.
            </p>
          </div>
          {isMobile ? (
            <div className="grid grid-cols-4 gap-4 items-center justify-evenly h-auto w-1/2">
              {serviceToolsLogo.map((serviceTools) => (
                <div key={serviceTools.title}>
                  <Image
                    alt={`${serviceTools.title} logo`}
                    className="transition duration-300 ease-in-out grayscale hover:scale-110 hover:grayscale-0"
                    src={serviceTools.logo}
                  />
                </div>
              ))}
            </div>
          ) : (
            <ToolsCarousel />
          )}
        </div>
      </Section>
    </div>
  );
}
