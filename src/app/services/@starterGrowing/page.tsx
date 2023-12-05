import React from 'react';
import { Section } from '@/components/default-elements';
import { H2, H3, Subheading } from '@/components/ui/typography';
import { workWithUs } from '@/constants/work-with-us';

export default function StarterGrowing() {
  return (
    <div className="w-full bg-primary-static/10">
      <div className="w-full flex justify-center py-16 bg-background rounded-tr-[150px] md:rounded-tr-[250px] lg:rounded-tr-[450px] 2xl:rounded-tr-full">
        <Section>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <H2
                className="text-center [&>span]:text-primary-static"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Start growing with <span>Techstacks</span>
              </H2>
              <Subheading
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Unlock Your Digital Potential with Expert Web Development
              </Subheading>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 items-center">
              {workWithUs.map(({ title, Icon, desc }, index) => (
                <div
                  className="flex flex-col gap-6 p-4 lg:p-8 w-full h-full border border-primary-static dark:border-white rounded-lg [&>svg]:hover:animate-unsteady"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  key={title}
                >
                  <Icon className="w-28 h-28 lg:w-36 lg:h-36 self-center" />
                  <H3>{title}</H3>
                  <Subheading>{desc}</Subheading>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
