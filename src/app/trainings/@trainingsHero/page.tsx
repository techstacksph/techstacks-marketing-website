import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { trainingBg } from '@/assets/images';
import { NavRoutes } from '@/constants/nav-routes';
import { Slice } from '@/components/icons/slice';
import { H1, Subheading } from '@/components/ui/typography';

export default function Trainings() {
  return (
    <div className="relative flex flex-col-reverse bg-primary-static/10 pb-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full flex items-center justify-center px-4 lg:pr-0 mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <Slice className="absolute text-primary-static dark:text-gray-900 left-0 hidden h-full transform -translate-x-1/2 lg:block" />
        <Image
          alt="Training background"
          className="object-cover  w-full  rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-72 md:h-96 lg:h-full"
          src={trainingBg}
        />
      </div>
      <Section>
        <div className="relative flex flex-col items-start w-full">
          <div className="flex flex-col gap-8 items-start w-full md:w-10/12 lg:max-w-4xl py-16 lg:py-40">
            <H1 className="text-black dark:text-primary-static">
              Elevate your web development prospects and unlock a world of
              opportunities
            </H1>
            <Subheading className=" w-full lg:w-1/2">
              We believe that the OJT Program is not just a learning experience,
              it&apos;s also a chance for you to{' '}
              <span>discover your passion and purpose</span>
            </Subheading>
            <Link
              className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-white dark:border-primary-static group bg-primary-static dark:bg-white"
              data-aos="fade-up"
              data-aos-delay={400}
              href={NavRoutes.Company.Apply}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-white dark:bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-background group-hover:text-primary-static dark:group-hover:text-white">
                Inquire now
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
