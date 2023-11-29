'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { useMemo, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/default-elements';
import { H1, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';

export default function PortfoliosHero() {
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
    <Section
      className="min-h-[calc(theme(height.screen)-theme(height.16))] sticky top-[theme(height.16)]"
      ref={sectionRef}
      style={{ opacity: visibility, scale: visibility }}
    >
      <div className="flex flex-col min-h-[inherit] gap-8 items-center py-16">
        <BreadCrumbs className="self-start">
          <BreadCrumbItem>Portfolio</BreadCrumbItem>
        </BreadCrumbs>
        <div className="flex flex-col items-center gap-8 my-auto">
          <H1 className="text-center">
            Showcasing our Digital{' '}
            <span className="text-primary-static">Excellence</span>
          </H1>
          <Subheading className="text-center">
            Explore our digital portfolio, a fusion of cutting-edge innovation
            and tangible impact, reflecting our commitment to pushing boundaries
            and delivering results.
          </Subheading>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
              // TODO: where to route
              href="#"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
                Get started <ArrowRight className="inline" />
              </span>
            </Link>
            <Link
              className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
              // TODO: where to route
              href="#"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
                Learn more
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
