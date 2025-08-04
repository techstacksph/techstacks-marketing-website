'use client';
import { useWindowScroll } from '@uidotdev/usehooks';
import { useMemo, useRef } from 'react';
import { Section } from '@/components/default-elements';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { H1, Subheading } from '@/components/ui/typography';
import { DotsIcon } from '@/components/icons/dots-icon';

export function ProductHero() {
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
      <div className="w-full flex justify-center py-16 bg-primary-static/10 rounded-bl-[150px] md:rounded-bl-[250px] lg:rounded-bl-[450px] ">
        <Section
          ref={sectionRef}
          style={{ opacity: visibility, scale: visibility }}
        >
          <div className="flex flex-col min-h-[inherit] gap-8 items-center">
            <BreadCrumbs className="self-start">
              <BreadCrumbItem>Products</BreadCrumbItem>
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
                    Product Selection
                  </span>
                </span>
              </H1>
              <Subheading
                className="text-center "
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Launch your website faster with ready-made, customizable
                templates
              </Subheading>
              <div className="flex flex-col gap-4 md:flex-row" />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
