import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { DotsIcon } from '@/components/icons/dots-icon';
import { NavRoutes } from '@/constants/nav-routes';
import { workWithUs } from '@/constants/work-with-us';

export default function ServicesHero() {
  return (
    <div className="mb-16">
      <div className="w-full pt-16 flex justify-center bg-background/50">
        <Section>
          <div className="flex flex-col items-center gap-20 py-8 lg:py-16 ">
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl xl:text-5xl">
                <span className="relative inline-block">
                  <DotsIcon
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-muted/80 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  />
                  <span
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Your trusted I.T web development services partner!
                  </span>
                </span>
              </h3>
              <p
                className="text-base text-muted text-center lg:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in delivering top-notch IT services tailored to
                meet your unique business needs.
              </p>
              <Link
                className="w-full sm:w-44 h-14 p-3 border border-muted-static relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primary/50 rounded hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay={300}
                href={NavRoutes.Services}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static/60 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out group-hover:text-black">
                  Let&apos;s work together
                </span>
              </Link>
            </div>
            <h3
              className="text-2xl font-semibold text-center lg:text-4xl [&>span]:text-primary-static"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Start growing with <span>Techstacks</span>
            </h3>
          </div>
        </Section>
      </div>
      <div className="relative px-4 ">
        <div className="absolute inset-0 bg-background/50 h-1/2" />
        <div
          className="relative grid mx-auto w-full overflow-hidden shadow-lg bg-white [&&]:shadow-primary-static/40 border border-primary-static divide-y rounded divide-x  grid-cols-1  md:grid-cols-3 md:max-w-7xl h-1/2 "
          data-aos="fade-up"
          data-aos-delay={500}
        >
          {workWithUs.map(({ title, icon }) => (
            <div className="inline-block p-8 lg:p-16  text-center" key={title}>
              <div className="flex items-center justify-center w-40 h-auto mx-auto mb-4 text-black rounded-full">
                <Image
                  alt={`${title} image`}
                  className="w-20 h-24 transition duration-300 ease-in-out hover:scale-110 "
                  src={icon}
                />
              </div>
              <h4 className="text-lg lg:text-2xl font-semibold text-black text-center">
                {title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
