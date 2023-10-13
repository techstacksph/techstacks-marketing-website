'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';
import { borderAnimateVariants } from '@/utils/border-animate';
import OurPartners from '@/components/our-partners';
import ServiceTools from '@/components/service-tools';
import { companyLink } from '@/constants/nav-links';
import ScrollbarValues from '@/components/scrollbar-values';
import OurTeam from '@/components/our-team';

export default function AboutUs() {
  const aboutUsLink = companyLink[0]?.link.find(
    (item) => item.label === 'About us',
  );

  return (
    <>
      <Section className="py-10">
        <div className="w-full">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-4xl font-bold md:text-6xl xl:text-7xl">
                {aboutUsLink?.label}
              </h2>
              <p className="text-base text-muted md:text-lg">
                {aboutUsLink?.description}
              </p>
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
      <OurPartners />
      <ScrollbarValues />
      <ServiceTools />
      <OurTeam />
    </>
  );
}
