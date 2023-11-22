import React from 'react';
import { Section } from '@/components/default-elements';
// import { TechstacksLogo } from '@/components/icons/techstacks-logo';
import { H2, Subheading } from '@/components/ui/typography';
import TraineesCarousel from '@/components/trainees-carousel';

export default function TraineesJourney() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center py-16 bg-primary-static/10">
      <Section>
        <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-8 border border-primary-static rounded-lg">
          {/* <div className="flex flex-row justify-center md:justify-start items-center gap-4">
            <TechstacksLogo className="animate-bounce w-10 h-10 text-primary-static " />
            <H3 className="text-xl text-primary-static ">Techstacks PH</H3>
          </div> */}
          <div className="flex flex-col gap-8">
            <H2 className="text-center">
              Explore the journey of our OJT trainees, including their
              achievements, project, and valueble learnings.
            </H2>
            <Subheading className="text-center">
              Learn from the real-world experiences of our OJT trainees and how
              they have leveraged their training to excel in the industry
            </Subheading>
          </div>
        </div>
      </Section>
      <TraineesCarousel />
    </div>
  );
}
