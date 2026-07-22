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
      <div className="w-full flex justify-center py-16 bg-primary-static/10 rounded-bl-[150px] md:rounded-bl-[250px] lg:rounded-bl-[450px] ">
        <Section
          ref={sectionRef}
          style={{ opacity: visibility, scale: visibility }}
        >
          <div className="grid gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
            <div className="space-y-8 xl:mx-auto xl:max-w-[640px] xl:self-center">
              <BreadCrumbs>
                <BreadCrumbItem>LED Display</BreadCrumbItem>
              </BreadCrumbs>
              <div className="space-y-6">
                <H1 className="mx-auto max-w-3xl text-black dark:text-white">
                  Own Your Event LED Screens — No More Expensive Rentals
                </H1>
                <Subheading className="mx-auto max-w-2xl text-muted-foreground">
                  Premium, event-grade LED signages backed by a 20-year LED
                  manufacturer — best price, proven quality, and ready stock in
                  the Philippines.
                </Subheading>
              </div>
            </div>

            <div>
              <div className="h-full min-h-[360px]">
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                      alt="LED Wall Image"
                      className="w-full h-full object-cover"
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
