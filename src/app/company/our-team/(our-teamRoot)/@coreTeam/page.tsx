'use client';
import React from 'react';
import { Section } from '@/components/default-elements';
import { DotsIcon } from '@/components/icons/dots-icon';
import { H2, Subheading } from '@/components/ui/typography';
import { OUR_TEAM } from '@/constants/our-team';
import OurTeamCard from '@/components/our-team-card';

export default function OurTeam() {
  return (
    <div className="w-full flex justify-center py-16 bg-primary-static/10">
      <Section>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p
              className="inline-block text-base lg:text-xl font-semibold text-muted "
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Core Team
            </p>
            <H2 className="text-center" data-aos="fade-up" data-aos-delay={300}>
              <span className="relative inline-block">
                <DotsIcon className="absolute animate-pulse text-primary-static top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" />
                <span className="relative">Welcome</span>
              </span>{' '}
              our talented Team of{' '}
              <span className="text-primary-static">Professionals</span>
            </H2>
            <Subheading
              className="text-center w-full max-w-3xl"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              We&apos;re a dynamic team of IT professionals, specializing in
              cutting-edge development solutions for today&apos;s digital
              landscape. Our passion is innovation, and our mission is to shape
              the future of technology.
            </Subheading>
          </div>
          <div className="grid gap-4 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {OUR_TEAM.map(({ id, img, name, position }, index) => (
              <OurTeamCard
                img={img}
                index={index}
                key={id}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
