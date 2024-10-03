import React from 'react';
import { coreValues } from '@/constants/core-values';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { H2, Subheading } from '@/components/ui/typography';

export default function CoreValues() {
  return (
    <div className="flex justify-center w-full py-16">
      <div className="w-full">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row ">
          <div
            // TODO: change hard coded tw colors
            className="flex flex-col items-center w-full lg:w-1/2 lg:items-end bg-transparent"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <div className="w-full max-w-screen-md px-8 lg:py-8 ">
              <Accordion collapsible type="single">
                {coreValues.map((core, index) => (
                  <AccordionItem
                    className="hover:border-primary-static active:border-primary-static focus:border-primary-static"
                    data-aos="fade-right"
                    data-aos-delay={100 * index}
                    key={core.title}
                    value={core.title}
                  >
                    <AccordionTrigger className="hover:text-primary-static hover:no-underline active:text-primary-static focus:text-primary-static ">
                      <div className="flex flex-row items-center gap-4 text-lg font-semibold xl:text-xl">
                        <span className="px-3 py-2 text-xl border-r xl:text-3xl w-14 ">
                          {core.key}
                        </span>
                        {core.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-normal xl:text-lg">
                      {core.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div
            className="flex flex-col items-center lg:items-start w-full lg:w-1/2 shadow-lg [&&]:shadow-primary-static/40 border border-r-0 border-primary-static bg-background/50"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <div className="flex flex-col w-full max-w-screen-md gap-8 p-4 md:p-16">
              <H2
                className="text-center lg:font-bold lg:text-left "
                data-aos="fade-left"
                data-aos-delay={200}
              >
                Our Guiding{' '}
                <span className="text-primary-static">Principles</span>
              </H2>
              <Subheading
                className="font-normal text-center lg:text-left"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                Discover the core values that drive our team&apos;s mission and
                shape our every decision. Explore the principles that define our
                commitment to excellence, and innovation.
              </Subheading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
