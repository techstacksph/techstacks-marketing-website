import React, { Fragment } from 'react';
import Image from 'next/image';
import { values } from '@/constants/values';
import { cn } from '@/utils/cn';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import { H2, Subheading } from './ui/typography';

export default function ScrollbarValues() {
  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="flex flex-col items-center md:block">
          {values.map((value, i) => {
            const isOdd = Boolean(i % 2);
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
                          <div className="space-y-2 flex flex-col gap-4">
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
        {/* <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-5 w-1/2 ">
            {values.map((value) => (
              <div key={value.title}>
                <p>{value.title}</p>
                <h3>
                  {value.heading} <span>{value.highlight}</span>
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">asd</div>
        </div> */}
      </Section>
    </div>
  );
}
