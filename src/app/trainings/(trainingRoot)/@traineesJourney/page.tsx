import React from 'react';
import { Section } from '@/components/default-elements';
// import { TechstacksLogo } from '@/components/icons/techstacks-logo';
import { H2, Subheading } from '@/components/ui/typography';
import TraineesCarousel from '@/components/trainees-carousel';

export default function TraineesJourney() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center py-16 ">
      <Section>
        <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-8">
          <div className="flex flex-col gap-8">
            <H2 className="text-center" data-aos="fade-up" data-aos-delay={100}>
              Explore the journey of our OJT trainees, including their
              achievements, project, and valueble learnings.
            </H2>
            <Subheading
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
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
