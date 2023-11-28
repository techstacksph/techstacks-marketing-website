import Link from 'next/link';
import React from 'react';
import { Section } from '@/components/default-elements';
import { BottomShape } from '@/components/icons/bottom-shape';
import { H1, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';

export default function OjtWorksPage() {
  return (
    <div className="relative bg-primary-static/10 py-16">
      <div className="absolute inset-x-0 bottom-0">
        <BottomShape className="w-full -mb-1 text-white dark:text-black" />
      </div>
      <Section>
        <div className="w-full max-w-3xl flex flex-col justify-center items-center mx-auto pt-0 lg:py-16">
          <div className="relative w-full items-center flex flex-col gap-8">
            <H1
              className="text-center tracking-wide"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Meet Our Interns and Explore Their{' '}
              <span className="text-primary-static">Impressive Projects</span>
            </H1>
            <Subheading
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Unveiling the Next Generation of Talent: A Glimpse into Our
              Intern&apos;s Remarkable Initiatives
            </Subheading>

            <Link
              className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all bg-transparent border rounded w-full md:w-52 h-14 border-primary-static group"
              data-aos="fade-up"
              data-aos-delay={300}
              href={NavRoutes.Company.AboutUs}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center text-black dark:text-white transition-colors duration-300 ease-in-out group-hover:text-black">
                Inquire now
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
