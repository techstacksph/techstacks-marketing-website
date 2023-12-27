import React from 'react';
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';
import { Section } from '@/components/default-elements';
import { H1, H3, Subheading } from '@/components/ui/typography';
import { OJT_TEAM } from '@/constants/ojt-team';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/utils/cn';
import { isOdd } from '@/utils/is-odd';

export default function TraineesTestimonial() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col w-full gap-4 lg:w-10/12 xl:w-1/2">
            <H1 asChild data-aos="fade-up" data-aos-delay={100}>
              <h2>
                Inspiring Testimonials from our{' '}
                <span className="text-primary-static">Interns</span>
              </h2>
            </H1>
            <Subheading data-aos="fade-up" data-aos-delay={200}>
              Hear directly from our former OJT trainees as they share their
              remarkable experiences and the invaluable impact of our program on
              their careers.
            </Subheading>
          </div>
          <div className="grid justify-center w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {OJT_TEAM.map(({ id, author, avatar, position, quote }, index) => (
              <div
                className={cn(
                  'flex flex-col justify-between gap-4 p-4 xl:p-8 h-full border border-primary-static shadow-lg [&&]:shadow-primary-static/40',
                  isOdd(index) && 'bg-primary-static/80',
                )}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={id}
              >
                <Subheading className="text-foreground">
                  <span className="relative inline-block">
                    <span className="absolute top-0 left-0 -z-10 text-8xl dark:text-muted-foreground/50 text-muted-foreground/30">
                      <BsQuote />
                    </span>
                    {quote}
                  </span>
                </Subheading>
                <div className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage alt={author} asChild src={avatar.src}>
                      <Image alt={`${author} profile`} src={avatar} />
                    </AvatarImage>
                  </Avatar>
                  <div>
                    <H3 className="text-base lg:text-lg xl:text-xl ">
                      {author}
                    </H3>
                    <Subheading className="text-foreground lg:text-lg">
                      {position}
                    </Subheading>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
