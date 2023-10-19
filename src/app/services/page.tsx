import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { workWithUs } from '@/constants/work-with-us';
import CoreServices from '@/components/core-services';
import { NavRoutes } from '@/constants/nav-routes';

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
              <Link
                className="w-full md:w-44 h-14 p-3 border border-muted-static relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primary/50 rounded hover:bg-white group"
                href={NavRoutes.Services}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static/60 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out group-hover:text-black">
                  Let&apos;s work together
                </span>
              </Link>
            </div>
            <div className="flex w-full flex-col items-center gap-8">
              <h3 className="text-2xl font-semibold text-center lg:text-4xl [&>span]:text-primary-static">
                Start growing with <span>Techstacks</span>
              </h3>
              <div className="flex w-full flex-col items-center gap-8 md:flex-row">
                {workWithUs.map(({ title, Icon }) => (
                  <div
                    className="flex w-full lg:w-1/2 p-2 md:p-8 flex-col items-center gap-4"
                    key={title}
                  >
                    <div className="w-20 h-auto lg:w-40">
                      <Icon className="w-full h-28 transition duration-300 ease-out hover:text-primary-static hover:-scale-x-100" />
                    </div>
                    <h4 className="text-lg font-semibold text-center">
                      {title}
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
