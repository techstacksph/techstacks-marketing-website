'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Section } from '@/components/default-elements';
import { cn } from '@/utils/cn';
import { dmSans } from '@/lib/fonts';
import { trainingBg } from '@/assets/images';
import { NavRoutes } from '@/constants/nav-routes';
import { Slice } from '@/components/icons/slice';

export default function Trainings() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative flex flex-col-reverse pb-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full flex items-center justify-center px-4 lg:pr-0 mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <Slice
          className={cn(
            'absolute left-0 hidden h-full transform -translate-x-1/2 lg:block',
            resolvedTheme === 'dark' && 'text-gray-900',
            resolvedTheme === 'light' && 'text-white',
          )}
        />
        <Image
          alt="asd"
          className="object-cover  w-full  rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-72 md:h-96 lg:h-full"
          src={trainingBg}
        />
      </div>
      <Section>
        <div className="relative flex flex-col items-start w-full">
          <div className="flex flex-col gap-8 items-start md:w-10/12 lg:w-1/2 py-16 lg:py-40">
            <h3
              className={cn(
                'text-2xl font-semibold md:text-3xl lg:text-5xl md:leading-tight md:tracking-wide ',
                dmSans.className,
              )}
            >
              Elevate your web development prospects and unlock a world of
              opportunities
            </h3>
            <p className="text-base text-muted [&>span]:text-primary-static md:text-lg ">
              We believe that the OJT Program is not just a learning experience,
              it&apos;s also a chance for you to{' '}
              <span>discover your passion and purpose</span>
            </p>
            <Link
              className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-muted-static group bg-primary-static"
              data-aos="fade-up"
              data-aos-delay={400}
              href={NavRoutes.Company.Apply}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent/75 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-foreground group-hover:text-accent-foreground">
                Inquire now
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
