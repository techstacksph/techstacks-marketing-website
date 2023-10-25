'use client';

import React from 'react';
import Image from 'next/image';
import { serviceToolsLogo } from '@/constants/service-tools';
import { Section } from './default-elements';

export default function ServiceTools() {
  return (
    <div className="w-full flex justify-center py-16 bg-primary/50">
      <Section>
        <div className="flex flex-col gap-14 items-center md:flex-row">
          <div className="flex flex-col gap-8 items-center justify-center md:w-1/2 ">
            <h3
              className="text-2xl  font-semibold text-center  lg:font-bold lg:text-4xl  xl:text-5xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Our Tailored Service Tools
            </h3>
            <p
              className="text-base font-normal text-muted text-center  lg:text-lg"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We believe in crafting experiences that align seamlessly with your
              goals, and our tailored service tools play a vital role in
              achieving this.
            </p>
          </div>
          <div
            className="grid grid-cols-4 gap-4 items-center justify-evenly h-auto w-full md:w-1/2"
            data-aos="fade-up"
            data-aos-delay={100}
          >
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
        </div>
      </Section>
    </div>
  );
}
