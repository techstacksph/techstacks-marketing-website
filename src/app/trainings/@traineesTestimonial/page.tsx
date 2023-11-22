import React from 'react';
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';
import { Section } from '@/components/default-elements';
import { H1, H3, Subheading } from '@/components/ui/typography';
import { OJT_TESTIMONIALS } from '@/constants/ojt-testimonials';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/utils/cn';

export default function TraineesTestimonial() {
  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="flex flex-col gap-8">
          <div className="w-full lg:w-10/12 xl:w-1/2  flex flex-col gap-4">
            <H1 asChild>
              <h2>
                Inspiring Testimonials from our{' '}
                <span className="text-primary-static">Interns</span>
              </h2>
            </H1>
            <Subheading>
              Hear directly from our former OJT trainees asthey share their
              remarkable experiences and theinvaluable impact of our program on
              their careers.
            </Subheading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 w-full">
            {OJT_TESTIMONIALS.map(
              ({ id, author, avatar, position, quote }, index) => (
                <div
                  className={cn(
                    'flex flex-col justify-between gap-4 p-4 xl:p-8 h-full border border-primary-static shadow-lg [&&]:shadow-primary-static/40',
                    index % 2 && 'bg-primary-static/80',
                  )}
                  key={id}
                >
                  <Subheading className="text-black dark:text-white ">
                    <span className="relative inline-block">
                      <span className="absolute top-0 left-0 -z-10 text-8xl text-muted-foreground/50 ">
                        <BsQuote />
                      </span>
                      {quote}
                    </span>
                  </Subheading>
                  <div className="flex flex-row gap-4">
                    <Avatar>
                      <AvatarImage alt={author} asChild src={avatar.src}>
                        <Image alt={`${author} profile`} src={avatar} />
                      </AvatarImage>
                    </Avatar>
                    <div>
                      <H3 className="lg:text-lg text-base xl:text-xl ">
                        {author}
                      </H3>
                      <Subheading className="text-black dark:text-white lg:text-lg">
                        {position}
                      </Subheading>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
