import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ojtBg } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { NavRoutes } from '@/constants/nav-routes';
import { H1, Subheading } from '@/components/ui/typography';

export default function TraineesBanner() {
  return (
    <div className="relative flex flex-col-reverse pb-16 bg-primary-static bg-gradient-to-r from-primary-static to-transparent lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 flex items-center justify-center w-full px-4 mx-0 lg:pr-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <div className="relative w-full sm:h-72 md:h-96 lg:h-full after:lg:bg-gradient-to-r after:absolute after:lg:top-0 after:left-0 after:lg:from-primary-static after:lg:to-transparent after:w-full after:h-full">
          <Image
            alt="Training background"
            className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-72 md:h-96 lg:h-full"
            src={ojtBg}
          />
        </div>
      </div>
      <Section>
        <div className="relative flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-8 py-16 md:w-10/12 lg:w-1/2 lg:py-40">
            <H1 asChild className="text-background">
              <h2>
                Transform your Passion into a Career and join our OJT Program
                today.
              </h2>
            </H1>
            <Subheading className="text-black dark:text-white">
              Don&apos;t miss out on this opportunity to propel your career
              forward. Be a part and unlock a world of possibilities in web
              development.
            </Subheading>
            <Link
              className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all border rounded bg-white md:w-52 h-14 border-white group"
              href={NavRoutes.Services}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-950/100 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center  transition-colors duration-300 ease-in-out text-black group-hover:text-white">
                Let&apos;s start
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
