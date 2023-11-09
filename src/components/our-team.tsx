import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ourTeam } from '@/assets/images';
import { NavRoutes } from '@/constants/nav-routes';
import { TEAM } from '@/constants/team';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Section } from './default-elements';
import { H2, Subheading } from './ui/typography';

export default function OurTeam() {
  return (
    <div className="py-16">
      <div className="relative">
        <Section>
          <div className="p-6">
            <div className="flex flex-col items-center gap-4 md:gap-8">
              <H2
                className="text-center lg:font-bold "
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Our Exceptional Team
              </H2>
              <Subheading
                className="font-normal text-center "
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Our exceptional team is the heartbeat of Techstacks, embodying
                expertise, dedication, and a passion for innovation.
              </Subheading>
              <Link
                className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-muted-static group bg-primary-static"
                data-aos="fade-up"
                data-aos-delay={300}
                href={NavRoutes.Company.OurTeam}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent/75 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-foreground group-hover:text-accent-foreground">
                  Meet our team
                </span>
              </Link>
            </div>
          </div>
        </Section>
        <Image alt="Team image" className="pointer-events-none" src={ourTeam} />
        <div className="absolute top-0 bottom-0 flex items-end w-full h-full pointer-events-none">
          {TEAM.map(({ name, src, id, position, profile }) => (
            <div key={id}>
              <HoverCard closeDelay={0} openDelay={0}>
                <HoverCardTrigger asChild>
                  <Image alt={name} className="pointer-events-auto" src={src} />
                </HoverCardTrigger>
                <HoverCardContent
                  className="bg-popover/75 backdrop-blur"
                  side="top"
                >
                  <div className="flex flex-col item-center gap-2">
                    <Avatar className="flex self-center">
                      <AvatarImage asChild src={profile.src}>
                        <Image alt={name} src={profile} />
                      </AvatarImage>
                      <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg text-center font-medium">{name}</h3>
                    <p className="text-sm font-medium text-center text-muted">
                      {position}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
