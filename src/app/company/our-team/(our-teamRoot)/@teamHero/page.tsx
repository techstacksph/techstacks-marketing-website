import React from 'react';
import Link from 'next/link';
import { BottomShape } from '@/components/icons/bottom-shape';
import { Section } from '@/components/default-elements';
import { H1, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';

export default function TeamHero() {
  return (
    <div className="relative py-16 bg-primary-static/10">
      <div className="absolute inset-x-0 bottom-0">
        <BottomShape className="w-full -mb-1 text-white dark:text-black" />
      </div>
      <Section>
        <BreadCrumbs>
          <BreadCrumbItem>Our team</BreadCrumbItem>
        </BreadCrumbs>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl pt-0 mx-auto lg:py-16">
          <div className="relative flex flex-col w-full gap-8">
            <H1
              className="tracking-wide text-center whitespace-pre-wrap"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Meet the Faces{'\n'}Behind the{' '}
              <span className="text-primary-static">Codes</span>
            </H1>
            <Subheading
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              At the core of our web development prowess, our team embodies the
              dedication and innovation that drive us to deliver top-notch
              services.
            </Subheading>
            <div className="flex gap-4 place-content-center">
              <Link
                className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
                href={NavRoutes.Company.Careers}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
                  Explore open positions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
