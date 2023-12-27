'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Avatar, AvatarImage } from './ui/avatar';
import { GlowCard, GlowCardContent } from './glow-card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { H3, Subheading } from './ui/typography';

interface OurTeamCardProps {
  img?: StaticImageData;
  name?: string;
  position?: string;
  time?: string;
  web?: StaticImageData;
  index: number;
}

export default function TeamOjtCard({
  img,
  name,
  position,
  index,
  time,
  web,
}: OurTeamCardProps) {
  return (
    <GlowCard data-aos="fade-up" data-aos-delay={index * 100}>
      <GlowCardContent>
        {img ? (
          <Image
            alt={`${name} image`}
            className="object-cover rounded-lg w-full h-full"
            src={img}
          />
        ) : null}
        <div className="absolute inset-0 flex flex-col justify-center gap-4 px-5 py-4 text-center rounded-lg transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100 [&>h3]:hover:text-primary-static [&>p]:hover:text-yellow-500">
          <h3 className="text-lg text-white font-medium">{name}</h3>
          <p className="text-base text-white">{position}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="flex self-center w-24 hover:text-primary-static hover:bg-transparent"
                variant="ghost"
              >
                See more
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full p-8 max-w-screen-lg">
              <div className="flex p-2 flex-row gap-8">
                <div className="flex flex-row gap-4 w-1/2">
                  {img ? (
                    <Avatar className="w-16 h-16">
                      <AvatarImage alt={name} asChild src={img.src}>
                        <Image alt={`${name} profile`} src={img} />
                      </AvatarImage>
                    </Avatar>
                  ) : null}
                  <div className="flex flex-col gap-2">
                    <H3>{name}</H3>
                    <Subheading>{position}</Subheading>
                    <Subheading>{time}</Subheading>
                  </div>
                </div>
                <div className="w-1/2">
                  {web ? <Image alt="Portfolio" src={web} /> : null}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </GlowCardContent>
    </GlowCard>
  );
}
