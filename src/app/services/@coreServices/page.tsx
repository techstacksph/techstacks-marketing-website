import React from 'react';
import { Section } from '@/components/default-elements';
import { coreServices } from '@/constants/core-services';
import { CoreServicesCard } from '@/components/core-services';
import { H2, Subheading } from '@/components/ui/typography';

export default function CoreServices() {
  return (
    <div className="w-full py-16 flex justify-center ">
      <Section>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <H2
              className="text-center "
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Core Services
            </H2>
            <Subheading
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Discover the key services at the heart of successful web
              development.
            </Subheading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
            {coreServices.map((core, index) => (
              <CoreServicesCard
                index={index}
                key={core.title}
                src={core.icon}
                title={core.title}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
