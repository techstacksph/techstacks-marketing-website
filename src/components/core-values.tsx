import React from 'react';
import { coreValues } from '@/constants/core-values';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export default function CoreValues() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 ">
          <div
            // TODO: change hard coded tw colors
            className="w-full lg:w-1/2 flex   flex-col items-center lg:items-end bg-gradient-to-r from-emerald-400 to-emerald-900"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <div className="w-full px-8 max-w-screen-md  lg:py-8  ">
              <Accordion collapsible type="single">
                {coreValues.map((core, index) => (
                  <AccordionItem
                    className="hover:border-background/90 active:border-background/90 focus:border-background/90"
                    data-aos="fade-right"
                    data-aos-delay={100 * index}
                    key={core.title}
                    value={core.title}
                  >
                    <AccordionTrigger className="hover:text-background/90 hover:no-underline active:text-background/90  focus:text-background/90 ">
                      <div className="flex text-lg xl:text-xl font-semibold flex-row items-center gap-4">
                        <span className="text-xl xl:text-3xl w-14 py-2 px-3 border-r ">
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
            <div className="flex flex-col w-full max-w-screen-md p-4 md:p-16 gap-8">
              <h3
                className="text-2xl text-center font-semibold lg:font-bold lg:text-4xl lg:text-left xl:text-5xl"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                Our Guiding{' '}
                <span className="text-primary-static">Principles</span>
              </h3>
              <p
                className="text-base text-center lg:text-left font-normal text-muted lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                Discover the core values that drive our website&apos;s mission
                and shape our every decision. Explore the bedrock principles
                that define our commitment to excellence, integrity, and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
