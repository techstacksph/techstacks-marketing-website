'use client';

import React from 'react';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { Section } from '@/components/default-elements';
import OurPartners from '@/components/our-partners';
import ServiceTools from '@/components/service-tools';
import { companyLink } from '@/constants/nav-links';
import ScrollbarValues from '@/components/scrollbar-values';
import OurTeam from '@/components/our-team';
import Hero from '@/components/hero';
import { NavRoutes } from '@/constants/nav-routes';
import CoreValues from '@/components/core-values';

export default function AboutUs() {
  const aboutUsLink = companyLink[0]?.link.find(
    (item) => item.label === 'About us',
  );

  return (
    <>
      <div className="w-full flex justify-center py-16 ">
        <Section>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-8 items-start">
              <div
                className="flex flex-row gap-2 items-center text-lg"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <Link href={NavRoutes.Home}>
                  <GoHome />
                </Link>
                <IoIosArrowForward />
                <p className="text-muted">{aboutUsLink?.label}</p>
              </div>
              <h2
                className="text-3xl font-semibold leading-tight text-center lg:text-left lg:text-5xl xl:text-7xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Who we are
              </h2>
              <p
                className="text-base leading-loose text-left text-muted lg:text-xl"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {aboutUsLink?.description}
              </p>
              <Link
                className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-muted-static group bg-primary-static"
                data-aos="fade-up"
                data-aos-delay={400}
                href={NavRoutes.Company.Apply}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent/75 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-foreground group-hover:text-accent-foreground">
                  Let&apos;s work together
                </span>
              </Link>
            </div>
            <div className="aspect-square">
              <Hero />
            </div>
          </div>
        </Section>
      </div>
      <OurPartners />
      <ScrollbarValues />
      <CoreValues />
      <ServiceTools />
      <OurTeam />
    </>
  );
}
