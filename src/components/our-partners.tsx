import React from 'react';
import Image from 'next/image';
import { goDaddyImg, philgepsImg } from '@/assets/images';
import { Section } from './default-elements';
import { H2, Subheading } from './ui/typography';

export default function OurPartners() {
  return (
    <div className="w-full flex justify-center py-16 bg-primary/50">
      <Section>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-8 items-center justify-center lg:flex-row">
            <H2
              className="text-center lg:w-1/2 lg:font-bold lg:text-left"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              A Trusted Connection to <span>Our Partners</span>
            </H2>
            <Subheading
              className="font-normal text-center lg:w-1/2 lg:text-left"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We value trust and teamwork, working closely to achieve shared
              goals. Together, we grow and support each other, creating a solid
              foundation for success.
            </Subheading>
          </div>
          <div
            className="flex flex-row gap-6 justify-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div>
              <Image alt="GoDaddy image" src={goDaddyImg} />
            </div>
            <div>
              <Image alt="Philgeps image" src={philgepsImg} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
