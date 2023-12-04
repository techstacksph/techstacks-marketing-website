import React from 'react';
import { Section } from '@/components/default-elements';
import { Subheading, H1 } from '@/components/ui/typography';
import TraineesWorksParallax from '@/components/trainees-works-parallax';

export default function TraineesWork() {
  return (
    <div className="flex flex-col gap-10 justify-center w-full py-16">
      <Section>
        <div className="flex flex-col gap-8 justify-center">
          <H1
            asChild
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h2>Discover the Outstanding Works of our OJT Interns</h2>
          </H1>
          <Subheading
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We believe in nurturing and empowering young talent. Explore their
            remarkable works and witness firsthand the passion, creativity, and
            innovation they bring to our projects.
          </Subheading>
        </div>
      </Section>
      <TraineesWorksParallax />
    </div>
  );
}
