import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { NavRoutes } from '@/constants/nav-routes';
import { TEAM1 } from '@/constants/team';

export default function OurTeamHero() {
  

  return (
    <Section>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center justify-center gap-12 ">
          <div className="hidden md:flex flex-row items-center justify-between w-full -z-10 absolute top-5">
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center gap-5 pt-5">
                {TEAM1.map((team) => (
                  <div
                    key={team.id}
                    className="flex flex-col items-center justify-center  bg-gradient-to-r from-teal-500 to-teal-300 w-full "
                    style={{ minWidth: '200px', minHeight: '200px' }}
                  >
                    <Image alt="test" src={team.src} width="100" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-5 pt-5">
                {TEAM1.map((team) => (
                  <div
                    key={team.id}
                    className="flex flex-col items-center justify-center  bg-gradient-to-r from-teal-500 to-teal-300 w-full "
                    style={{ minWidth: '200px', minHeight: '200px' }}
                  >
                    <Image alt="test" src={team.src} width="100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center gap-5 pt-5">
                {TEAM1.map((team) => (
                  <div
                    key={team.id}
                    className="flex flex-col items-center justify-center  bg-gradient-to-r from-teal-500 to-teal-300 w-full "
                    style={{ minWidth: '200px', minHeight: '200px' }}
                  >
                    <Image alt="test" src={team.src} width="100" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-5 pt-5">
                {TEAM1.map((team) => (
                  <div
                    key={team.id}
                    className="flex flex-col items-center justify-center  bg-gradient-to-r from-teal-500 to-teal-300 w-full "
                    style={{ minWidth: '200px', minHeight: '200px' }}
                  >
                    <Image alt="test" src={team.src} width="100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-5"
            style={{ minHeight: '500px' }}
          >
            <h1 className="font-poppins text-5xl font-black leading-snug text-teal-600 text-center max-w-lg ">
              Meet the Faces Behind The Codes
            </h1>
            <p className="font-inter text-base font-medium leading-7 text-2x max-w-xl text-start lg:mb-8">
              At the core of our web development prowess, our team embodies the
              dedication and innovation that drive us to deliver top-notch
              services.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <Link href={NavRoutes.Company.Apply}>
                <p className="rounded-br-lg rounded-tl-lg  border border-green-500 bg-gradient-to-t from-[#12182B] via-[#1B4C3F] to-[#21CD9C] text-neutral-colors-100 text-white py-2 px-5 font-inter text-base  font-normal leading-tight">
                  Become a Techstacker
                </p>
              </Link>
              <Link href={NavRoutes.Company.Apply}>
                <p className="rounded-br-lg rounded-tl-lg border border-green-500 py-2 px-5">
                  Explore Open Position
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
