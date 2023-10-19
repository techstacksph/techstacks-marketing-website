import React from 'react';
import Image from 'next/image';
import {
  ourTeam,
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
  teamImg7,
  teamImg8,
} from '@/assets/images';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Section } from './default-elements';

const TEAM = [
  {
    id: 1,
    name: 'Florante Sugian III',
    position: 'Owner/CTO',
    src: teamImg1,
  },
  {
    id: 2,
    name: 'Marcus Leviticus Dela Cruz',
    position: 'Front-end Developer',
    src: teamImg2,
  },
  {
    id: 3,
    name: 'Francis "Franz" Bernardino',
    position: 'Front-end Developer',
    src: teamImg3,
  },
  {
    id: 4,
    name: 'Sammuel "Sam" Espiritu',
    position: 'Front-end Developer',
    src: teamImg4,
  },
  {
    id: 5,
    name: 'Frances Kaye "Kai" Albis',
    position: 'Admin Officer',
    src: teamImg5,
  },
  {
    id: 6,
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    src: teamImg6,
  },
  {
    id: 7,
    name: 'John Aira Feleo',
    position: 'Back-end Developer',
    src: teamImg7,
  },
  {
    id: 8,
    name: 'Ara Belle Agarem',
    position: 'Marketing and SEO Specialist',
    src: teamImg8,
  },
] as const;

export default function OurTeam() {
  return (
    <div className="relative">
      <Section>
        <div className="p-6">
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <h3 className="text-2xl font-semibold text-center lg:font-bold lg:text-4xl xl:text-5xl">
              Our Exceptional Team
            </h3>
            <p className="text-base font-normal text-center text-foreground lg:text-xl">
              Our exceptional team is the heartbeat of Techstacks, embodying
              expertise, dedication, and a passion for innovation.
            </p>
            <Button>Meet our team</Button>
          </div>
        </div>
      </Section>
      <Image alt="Team image" className="pointer-events-none" src={ourTeam} />
      <div className="absolute top-0 bottom-0 flex items-end w-full h-full pointer-events-none">
        {TEAM.map(({ name, src, id, position }) => (
          <div key={id}>
            <HoverCard closeDelay={0} openDelay={0}>
              <HoverCardTrigger asChild>
                <Image alt={name} className="pointer-events-auto" src={src} />
              </HoverCardTrigger>
              <HoverCardContent
                className="bg-popover/75 backdrop-blur"
                side="top"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      {/* TODO profile images */}
                      <AvatarImage asChild src={src.src}>
                        <Image alt={name} src={src} />
                      </AvatarImage>
                      <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-medium">{name}</h3>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted">{position}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
}
