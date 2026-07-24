'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import ledWall from '@/assets/images/led/led-wall.png';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { H1, Subheading } from '@/components/ui/typography';

export function LedHero() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const visibility = useMemo(() => {
    const scrollProgress = scrollY;
    const sectionHeight = sectionRef.current?.offsetHeight ?? 0;
    const FULL_PERCENT = 100 as const;
    const SECTION_HALF = sectionHeight / 2;

    const value =
      (FULL_PERCENT - (scrollProgress / SECTION_HALF) * FULL_PERCENT) /
      FULL_PERCENT;

    return value > 0 ? value : 0;
  }, [scrollY]);

  return (
    <div className="w-full">
      <div className="flex w-full justify-center rounded-bl-[80px] bg-primary-static/10 py-8 sm:rounded-bl-[120px] sm:py-12 md:rounded-bl-[250px] lg:py-16">
        <Section
          ref={sectionRef}
          style={{ opacity: visibility, scale: visibility }}
        >
          <div className="grid gap-8 md:gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
            <div className="space-y-6 text-center xl:mx-auto xl:max-w-[640px] xl:self-center xl:text-left">
              <BreadCrumbs>
                <BreadCrumbItem>LED Display</BreadCrumbItem>
              </BreadCrumbs>
              <div className="space-y-4 sm:space-y-6">
                <H1 className="mx-auto max-w-3xl text-black dark:text-white">
                  Own Your Event LED Screens — No More Expensive Rentals
                </H1>
                <Subheading className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Premium, event-grade LED signages backed by a 20-year LED
                  manufacturer — best price, proven quality, and ready stock in
                  the Philippines.
                </Subheading>
              </div>
            </div>

            <div>
              <div className="h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="w-full overflow-hidden rounded-2xl">
                    <Image
                      alt="LED Wall Image"
                      className="h-full w-full object-cover"
                      src={ledWall}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
