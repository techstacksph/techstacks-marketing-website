import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { DotsIcon } from '@/components/icons/dots-icon';
import { NavRoutes } from '@/constants/nav-routes';
import { workWithUs } from '@/constants/work-with-us';
import { H2, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';

export default function ServicesHero() {
  return (
    <div className="mb-16">
      <div className="flex justify-center w-full py-16 bg-primary-static/10">
        <Section>
          <BreadCrumbs className="self-start">
            <BreadCrumbItem>Services</BreadCrumbItem>
          </BreadCrumbs>
          <div className="flex flex-col items-center gap-20 py-8 lg:py-16 ">
            <div className="flex flex-col items-center gap-8">
              <H2 className="text-center">
                <span className="relative inline-block">
                  <DotsIcon
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 animate-pulse text-primary-static lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
              </H2>
              <Subheading
                className="text-center "
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in delivering top-notch IT services tailored to
                meet your unique business needs.
              </Subheading>
              <Link
                className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-white border rounded dark:bg-transparent md:w-52 h-14 border-primary-static group"
                href={NavRoutes.Company.AboutUs}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-white dark:group-hover:text-black">
                  Let&apos;s work together
                </span>
              </Link>
            </div>
            <H2
              className="text-center [&>span]:text-primary-static"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Start growing with <span>Techstacks</span>
            </H2>
          </div>
        </Section>
      </div>
      <div className="relative px-4 ">
        <div className="absolute inset-0 bg-primary-static/10 h-1/2" />
        <div
          className="relative grid mx-auto w-full overflow-hidden shadow-lg bg-white [&&]:shadow-primary-static/40 border border-primary-static divide-y rounded divide-x  grid-cols-1  md:grid-cols-3 md:max-w-7xl h-1/2 "
          data-aos="fade-up"
          data-aos-delay={500}
        >
          {workWithUs.map(({ title, icon }) => (
            <div className="inline-block p-8 text-center lg:p-16" key={title}>
              <div className="flex items-center justify-center w-40 h-auto mx-auto mb-4 text-black rounded-full">
                <Image
                  alt={`${title} image`}
                  className="w-20 h-24 transition duration-300 ease-in-out hover:scale-110 "
                  src={icon}
                />
              </div>
              <h4 className="text-lg font-semibold text-center text-black lg:text-2xl">
                {title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
