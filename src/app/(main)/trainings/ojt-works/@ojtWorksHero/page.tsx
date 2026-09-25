'use client';

import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
// eslint-disable-next-line import/named -- package exports the hook from its implementation
import { useWindowScroll } from '@uidotdev/usehooks';
import { Section } from '@/components/default-elements';
import { BottomShape } from '@/components/icons/bottom-shape';
import { H1, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';

export default function OjtWorksPage() {
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
    <div className="relative py-16 bg-primary-static/10">
      <div className="absolute inset-x-0 bottom-0">
        <BottomShape className="w-full -mb-1 text-white dark:text-black" />
      </div>
      <Section
        ref={sectionRef}
        style={{ opacity: visibility, scale: visibility }}
      >
        <div className="w-full max-w-3xl flex flex-col justify-center items-center mx-auto pt-0 lg:py-16">
          <div className="relative w-full items-center flex flex-col gap-8">
            <H1
              className="tracking-wide text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Meet Our Interns and Explore Their{' '}
              <span className="text-primary-static">Impressive Projects</span>
            </H1>
            <Subheading
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Unveiling the Next Generation of Talent: A Glimpse into Our
              Intern&apos;s Remarkable Initiatives
            </Subheading>

            <Link
              className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
              data-aos="fade-up"
              data-aos-delay={300}
              href={NavRoutes.Contact}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
                Inquire now
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
