import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { TEAM1 } from '@/constants/team';

const sirjayvee = TEAM1.find((member) => member.id === 2);

export default function OurTeamTestimonial() {
  return (
    <Section>
      <div className="w-full flex flex-col items-start justify-start shadow-2xl">
        <div className="w-full flex flex-col items-start justify-end gap-5 md:gap-5 bg-white px-8 py-8 md:px-36 md:pt-20 md:pb-10">
          <h1 className="text-teal-500 text-4xl font-bold">
            From the Teams Viewpoint
          </h1>
          <p className="max-w-md font-medium text-2xl text-gray-500">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua”
          </p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-teal-300 w-full px-5 py-5 md:px-32 md:py-10 relative">
          {sirjayvee
            ? TEAM1.map(
                (member) =>
                  member.id === 2 && (
                    <div key={member.id}>
                      <h1 className="font-Poppins text-20 font-bold leading-20 text-white">
                        {member.name}
                      </h1>
                      <p className="font-Poppins text-xs text-white font-medium leading-20">
                        {member.position}
                      </p>
                      <Image
                        alt={member.name}
                        src={member.src}
                        width="200"
                        className="absolute hidden xl:block right-52 bottom-0"
                        style={{ minWidth: '300px' }}
                      />
                    </div>
                  ),
              )
            : null}
        </div>
      </div>
    </Section>
  );
}
