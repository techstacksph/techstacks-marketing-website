import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ojtBg } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { NavRoutes } from '@/constants/nav-routes';
import { H1, Subheading } from '@/components/ui/typography';

export default function TraineesBanner() {
  return (
    <div className="relative flex flex-col-reverse pb-16 bg-primary-static dark:bg-background bg-gradient-to-r from-primary-static dark:from-background to-transparent lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 flex items-center justify-center w-full px-4 mx-0 lg:pr-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <div className="relative w-full sm:h-72 md:h-96 lg:h-full after:lg:bg-gradient-to-r after:absolute after:lg:top-0 after:left-0 after:lg:from-primary-static dark:after:lg:from-background after:lg:from-0% after:lg:via-primary-static dark:after:lg:via-background after:lg:via-0% after:lg:to-transparent after:lg:to-90% after:w-full after:h-full">
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
            <H1 asChild data-aos="fade-up" data-aos-delay={100}>
              <h2>
                Transform your Passion into a Career and join our OJT Program
                today.
              </h2>
            </H1>
            <Subheading data-aos="fade-up" data-aos-delay={200}>
              Don&apos;t miss out on this opportunity to propel your career
              forward. Be a part and unlock a world of possibilities in web
              development.
            </Subheading>
            <Link
              className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all border rounded bg-transparent md:w-52 h-14 border-white dark:border-primary-static group"
              data-aos="fade-up"
              data-aos-delay={300}
              href={NavRoutes.Services}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-white dark:bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center  transition-colors duration-300 ease-in-out text-white dark:text-primary-static group-hover:text-primary-static dark:group-hover:text-white">
                Let&apos;s start
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
