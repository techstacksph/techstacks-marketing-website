import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';
import { workWithUs } from '@/constants/work-with-us';
import CoreServices from '@/components/core-services';

export default function Services() {
  return (
    <>
      <div className="h-auto flex justify-center items-center xl:h-screen py-10 lg:py-16">
        <Section>
          <div className="flex flex-col items-center gap-10 xl:gap-20">
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-2xl font-semibold text-center lg:text-4xl xl:text-5xl">
                Your trusted I.T web development services partner!
              </h3>
              <p className="text-base text-muted text-center lg:text-xl">
                We specialize in delivering top-notch IT services tailored to
                meet your unique business needs.
              </p>
              <Button>Let&apos;s work together</Button>
            </div>
            <div className="flex w-full flex-col items-center gap-8">
              <h3 className="text-2xl font-semibold text-center lg:text-4xl [&>span]:text-primary-static">
                Start growing with <span>Techstacks</span>
              </h3>
              <div className="flex w-full flex-col items-center gap-8 md:flex-row">
                {workWithUs.map((work) => (
                  <div
                    className="flex w-full lg:w-1/2 p-2 md:p-8 flex-col items-center gap-2"
                    key={work.title}
                  >
                    <div className="w-20 h-auto lg:w-40">
                      <Image
                        alt={`${work.title} icon`}
                        className="transition duration-300 ease-out hover:scale-110  hover:text-red-800"
                        src={work.icon}
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-center">
                      {work.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
      <CoreServices />
    </>
  );
}
