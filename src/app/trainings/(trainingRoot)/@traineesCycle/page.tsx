import React from 'react';
import { Section } from '@/components/default-elements';
import { SvgTrainingCycleFinal } from '@/components/icons/svg-training-cycle';
import { Subheading, H2 } from '@/components/ui/typography';

export default function TraineesCycle() {
  return (
    <div className="w-full flex justify-center py-16 ">
      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <H2>
              Setting you up for{' '}
              <span className="text-primary-static">success</span>
            </H2>
            <Subheading>
              With our training cycle, you&apos;ll have access to top-notch
              resources and guidance from experienced professionals to support
              your growth and development.
            </Subheading>
          </div>
          <div
            className="w-full h-full flex items-center justify-center "
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <SvgTrainingCycleFinal className="w-full h-[500px]" />
          </div>
        </div>
      </Section>
    </div>
  );
}
