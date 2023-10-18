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

const TEAM = [
  {
    id: 1,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg1,
  },
  {
    id: 2,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg2,
  },
  {
    id: 3,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg3,
  },
  {
    id: 4,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg4,
  },
  {
    id: 5,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg5,
  },
  {
    id: 6,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg6,
  },
  {
    id: 7,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg7,
  },
  {
    id: 8,
    name: 'name',
    description: 'description',
    position: 'position',
    src: teamImg8,
  },
] as const;

export default function OurTeam() {
  return (
    <div className="relative">
      <Image alt="Team image" src={ourTeam} />
      <div className="absolute top-0 bottom-0 flex items-end w-full h-full">
        {TEAM.map(({ name, src, id, description, position }) => (
          <div key={id}>
            <HoverCard closeDelay={0} openDelay={0}>
              <HoverCardTrigger asChild>
                <Image alt={name} src={src} />
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
                    <p className="text-sm font-medium">{position}</p>
                    <p className="text-sm text-muted">{description}</p>
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
