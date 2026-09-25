'use client';

import React, { useMemo, useRef } from 'react';
import Link from 'next/link';
// eslint-disable-next-line import/named -- package exports the hook from its implementation
import { useWindowScroll } from '@uidotdev/usehooks';
import { Section } from '@/components/default-elements';
import { DotsIcon } from '@/components/icons/dots-icon';
import { H1, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { NavRoutes } from '@/constants/nav-routes';

export default function ServicesHero() {
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
    <div className="w-full">
      <div className="w-full flex justify-center py-16 bg-primary-static/10 rounded-bl-[150px] md:rounded-bl-[250px] lg:rounded-bl-[450px] 2xl:rounded-bl-full">
        <Section
          ref={sectionRef}
          style={{ opacity: visibility, scale: visibility }}
        >
          <div className="flex flex-col min-h-[inherit] gap-8 items-center">
            <BreadCrumbs className="self-start">
              <BreadCrumbItem>Services</BreadCrumbItem>
            </BreadCrumbs>
            <div className="flex flex-col items-center gap-8 my-40">
              <H1 className="text-center">
                <span className="relative inline-block">
                  <DotsIcon
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 animate-pulse text-primary-static lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  />
                  <span
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Your trusted I.T web development services partner!
                  </span>
                </span>
              </H1>
              <Subheading
                className="text-center "
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in delivering top-notch IT services and web
                solutions tailored to meet your unique business needs.
              </Subheading>
              <div className="flex flex-col gap-4 md:flex-row">
                <Link
                  className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-white border rounded dark:bg-transparent md:w-52 h-14 border-primary-static group"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  href={NavRoutes.Contact}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-white dark:group-hover:text-black">
                    Let&apos;s work together
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
