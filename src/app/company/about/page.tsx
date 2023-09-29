'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';
import { borderAnimateVariants } from '@/utils/border-animate';
import WhoWeAre from '@/components/who-we-are';
import OurProcess from '@/components/our-process';

export default function AboutUs() {
  return (
    <>
      <Section className="py-10">
        <div className="w-full">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-4xl font-bold md:text-6xl xl:text-7xl">
                About us
              </h2>
              <Button className={borderAnimateVariants()}>
                Lets work together
              </Button>
            </div>
            <div>
              <Player autoplay loop src="/lottie/about-us.json" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <WhoWeAre />
      </Section>

      <Section>
        <OurProcess />
      </Section>
    </>
  );
}
