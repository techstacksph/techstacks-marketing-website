import React from 'react';
import Image from 'next/image';
import { goDaddyImg, philgepsImg } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { H2, Subheading } from '@/components/ui/typography';

export default function PartnersSection() {
  return (
    <div className="flex justify-center w-full py-16 bg-gradient-to-b from-background from-50% via-primary-static/50 via-75% to-background to-90%">
      <Section>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <H2
              className="text-center lg:w-1/2 lg:font-bold lg:text-left"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              A Trusted Connection to{' '}
              <span className="border-b-4 text-primary-static border-b-yellow-500">
                Our Partners
              </span>
            </H2>
            <Subheading
              className="font-normal text-center  lg:w-1/2 lg:text-left"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We value trust and teamwork, working closely to achieve shared
              goals. Together, we grow and support each other, creating a solid
              foundation for success.
            </Subheading>
          </div>
          <div
            className="flex flex-row justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div>
              <Image alt="GoDaddy image" src={goDaddyImg} />
            </div>
            <div>
              <Image
                alt="Philgeps image"
                className="text-primary-static"
                src={philgepsImg}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
