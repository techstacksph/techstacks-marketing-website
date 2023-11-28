import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { OJT_TEAM } from '@/constants/ojt-team';
import { H2, H3, Subheading } from '@/components/ui/typography';
import { GlowCard, GlowCardContent } from '@/components/glow-card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function TeamOjtPage() {
  return (
    <div className="flex flex-col justify-center py-16">
      <Section>
        <div className="flex flex-col gap-10 items-center">
          <H2 className="text-center" data-aos="fade-up" data-aos-delay={100}>
            The <span className="text-primary-static">talented interns</span>{' '}
            behind the scenes
          </H2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-8">
            {OJT_TEAM.map(({ author, avatar, id, position, time }, index) => (
              <GlowCard
                className="h-full"
                data-aos="fade-up"
                data-aos-delay={index + 100}
                key={id}
              >
                <GlowCardContent className="flex h-full justify-between flex-col items-center gap-4 p-4 xl:p-8">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      alt={`${author} profile`}
                      asChild
                      className="w-full h-full"
                      src={avatar.src}
                    >
                      <Image alt={`${author} profile`} src={avatar} />
                    </AvatarImage>
                  </Avatar>
                  <H3 className="text-lg text-center">{author}</H3>
                  <Subheading className="lg:text-base text-center">
                    {position}
                  </Subheading>
                  <Separator
                    className="h-1 bg-primary-static"
                    variant="horizon"
                  />
                  <Subheading className="lg:text-base text-center">
                    {time}
                  </Subheading>
                </GlowCardContent>
              </GlowCard>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
