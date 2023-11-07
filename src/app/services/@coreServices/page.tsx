import React from 'react';
import { Section } from '@/components/default-elements';
import { coreServices } from '@/constants/core-services';
import { CoreServicesCard } from '@/components/core-services';

export default function CoreServices() {
  return (
    <div className="w-full py-16 flex justify-center ">
      <Section>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3
              className="text-2xl font-semibold text-center lg:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Core Services
            </h3>
            <p
              className="text-base text-muted text-center lg:text-xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Discover the key services at the heart of successful web
              development.
            </p>
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
