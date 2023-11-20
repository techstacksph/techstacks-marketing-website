import React, { Fragment } from 'react';
import Image from 'next/image';
import { values } from '@/constants/values';
import { cn } from '@/utils/cn';
import { isOdd as utilIsOdd } from '@/utils/is-odd';
import { Separator } from '@/components/ui/separator';
import { Section } from '@/components/default-elements';
import { H2, Subheading } from '@/components/ui/typography';

export default function StatementsSection() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-col items-center md:block">
          {values.map((value, i) => {
            const isOdd = utilIsOdd(i);
            return (
              <Fragment key={value.title}>
                <div className="transition-all border rounded-md border-border/25 md:border-0 md:px-8">
                  <div
                    className="grid md:grid-cols-[1fr_1px_1fr] gap-x-8 items-center"
                    data-aos="fade-up"
                  >
                    <div className={cn('md:py-4', isOdd && 'md:order-last')}>
                      <div className="p-4 rounded-lg md:border">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-col gap-4 space-y-2">
                            <Subheading>{value.title}</Subheading>
                            <H2 className="text-2xl font-semibold xl:font-bold xl:text-4xl">
                              {value.heading}{' '}
                              <span className="text-primary-static">
                                {value.highlight}
                              </span>
                            </H2>
                            <Subheading className="text-base text-muted lg:text-xl">
                              {value.description}
                            </Subheading>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator orientation="vertical" />

                    <div className={cn('py-4', isOdd && 'md:order-first')}>
                      <div>
                        <Image alt={`${value.title} image`} src={value.image} />
                      </div>
                    </div>
                  </div>
                </div>

                {i < values.length - 1 ? (
                  <Separator
                    className="h-24 md:hidden bg-border/25"
                    orientation="vertical"
                  />
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
