'use client';

import React, { useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowScroll } from '@uidotdev/usehooks';
import { Section } from '@/components/default-elements';
import { trainingBg } from '@/assets/images';
import { NavRoutes } from '@/constants/nav-routes';
import { H1, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { TvIcon } from '@/components/icons/tv-icon';
import { StarsIcon } from '@/components/icons/stars-icon';

export default function Trainings() {
  const [{ y }] = useWindowScroll();
  const sectionRef = useRef<HTMLElement>(null);

  const visibility = useMemo(() => {
    const scrollProgress = y ?? 0;
    const sectionHeight = sectionRef.current?.offsetHeight ?? 0;
    const FULL_PERCENT = 100 as const;
    const SECTION_HALF = sectionHeight / 2;

    const value =
      (FULL_PERCENT - (scrollProgress / SECTION_HALF) * FULL_PERCENT) /
      FULL_PERCENT;

    return value > 0 ? value : 0;
  }, [y]);

  return (
    <div className="w-full bg-background ">
      <div className="w-full flex justify-center py-16 bg-primary-static/10 rounded-bl-[450px] rounded-tr-[450px]">
        <Section
          ref={sectionRef}
          style={{ opacity: visibility, scale: visibility }}
        >
          <div className="flex flex-col gap-20 lg:gap-0 items-center justify-between lg:flex-row">
            <div className="flex flex-col gap-8">
              <div
                className="flex flex-col gap-4 lg:max-w-xl lg:pr-5"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <BreadCrumbs className="self-start">
                  <BreadCrumbItem>Trainings</BreadCrumbItem>
                </BreadCrumbs>
                <H1 className="xl:text-6xl">
                  Elevate your web development prospects and unlock a world of{' '}
                  <span className="inline-block border-b-8 border-yellow-400 dark:border-white px-1 font-bold text-primary-static">
                    opportunities
                  </span>
                </H1>
                <Subheading>
                  We believe that the OJT Program is not just a learning
                  experience, it&apos;s also a chance for you to{' '}
                  <span>discover your passion and purpose</span>
                </Subheading>
              </div>
              <Link
                className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border border-primary-static rounded w-44 h-14  group bg-transparent"
                data-aos="fade-up"
                data-aos-delay={200}
                href={NavRoutes.Services}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out text- dark:text-white group-hover:text-background">
                  Inquire now
                </span>
              </Link>
            </div>
            <div
              className="relative lg:ml-32 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                <TvIcon className="absolute left-0 md:-left-10 -top-20 h-28 w-28 rounded-xl text-primary-static animate-unsteady" />
                <StarsIcon className="absolute right-0 animate-pulse -bottom-20 h-28 w-28 rounded-xl text-yellow-400" />
                <div className="flex w-full flex-wrap">
                  <Image
                    alt="Training background"
                    className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-72 md:h-96 lg:h-full"
                    src={trainingBg}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
