import React from 'react';
import { Button } from './ui/button';
import { Section } from './default-elements';

export default function OurTeam() {
  return (
    <div className="w-full h-full py-2 flex justify-center md:py-10 lg:py-20 xl:py-40 bg-[url('/images/our-team-img.jpg')] bg-no-repeat bg-cover bg-center">
      <Section>
        <div className="flex flex-col gap-4  items-center md:gap-8">
          <h3 className="text-2xl font-semibold text-center  lg:font-bold lg:text-4xl  xl:text-5xl">
            Our Exceptional Team
          </h3>
          <p className="text-base font-normal text-white text-center  lg:text-xl">
            Our exceptional team is the heartbeat of Techstacks, embodying
            expertise, dedication, and a passion for innovation.
          </p>
          <Button>Meet our team</Button>
        </div>
      </Section>
    </div>
  );
}
