'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { values } from '@/constants/values';
import { cn } from '@/utils/cn';
import { isOdd } from '@/utils/is-odd';
import { Section } from '@/components/default-elements';
import { H2, Subheading } from '@/components/ui/typography';
import { MovingLine } from '@/components/icons/moving-line';

export default function StatementsSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const pathSpring = useSpring(pathLengthValue, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <div className="w-full flex justify-center py-16">
      <Section ref={ref}>
        <div className="flex flex-row gap-20 items-start w-full ">
          <MovingLine
            className="hidden flex-shrink-0 md:block w-1"
            progress={pathSpring}
          />
          <div className="flex flex-col gap-10 lg:gap-20 w-full">
            {values.map((value, i) => (
              <div
                className={cn(
                  'flex flex-col md:flex-row gap-8 items-center md:items-start',
                  isOdd(i) && 'md:flex-row-reverse',
                )}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={value.title}
              >
                <div className="w-full md:w-1/2">
                  <Subheading>{value.title}</Subheading>
                  <H2>
                    {value.heading}{' '}
                    <span className="text-primary-static">
                      {value.highlight}
                    </span>
                  </H2>
                  <Subheading>{value.description}</Subheading>
                </div>
                <div className="contents md:flex w-full md:w-1/2">
                  <Image alt={`${value.title} image`} src={value.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
