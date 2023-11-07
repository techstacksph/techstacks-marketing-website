'use client';

import { useState } from 'react';
import {
  BiSolidCircle,
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
} from 'react-icons/bi';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { TESTIMONIAL_SERVICES } from '@/constants/testimonial-services';
import { cn } from '@/utils/cn';

type MethodTabValue = (typeof TESTIMONIAL_SERVICES)[number][number];

export default function TestimonialServices() {
  const [tab, setTab] = useState<MethodTabValue>(TESTIMONIAL_SERVICES[0][0]);
  const [container] = useAutoAnimate();

  return (
    <div className="w-full py-16 flex justify-center ">
      <Section>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="text-lg text-yellow-500">
              <BiSolidCircle />
            </div>
            <p className="text-lg text-muted text-center">Testimonials</p>
          </div>
          <h3 className="text-3xl font-semibold text-center lg:text-4xl xl:text-6xl">
            Words to validate our works
          </h3>
          <p className="text-base text-center text-muted lg:text-xl">
            These testimonials are a testament to our commitment to excellence
            and customer satisfaction. Join us in celebrating the stories of our
            delighted clients and find out why they trust us for their needs.
          </p>
          <div className="flex flex-col items-center w-full gap-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 justify-evenly gap-0 lg:gap-20">
              {TESTIMONIAL_SERVICES.map(([img, title]) => (
                <div
                  className={cn(
                    'p-2 transition',
                    img === tab && 'cursor-pointer',
                  )}
                  key={title}
                  onMouseEnter={() => {
                    setTab(img);
                  }}
                >
                  <div className="flex h-full gap-2">
                    <div
                      className={cn(
                        'transition duration-300 ease-in-out hover:scale-110 grayscale hover:grayscale-0',
                        img === tab && 'grayscale-0',
                      )}
                    >
                      <Image alt="asd" height={40} src={img} width={156} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="w-full border border-primary-static shadow-lg [&&]:shadow-primary-static/40"
              ref={container}
            >
              {TESTIMONIAL_SERVICES.map(
                ([img, title, name, desc]) =>
                  img === tab && (
                    <div className="flex flex-col md:flex-row " key={title}>
                      <div className="flex flex-col gap-4 justify-center items-center md:items-start bg-primary-static/20 w-full md:w-96 p-8">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {name}
                        </h3>
                        <p className="text-base md:text-lg text-muted font-semibold">
                          {title}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 p-4 md:p-8 items-center justify-center w-full">
                        <div className="text-5xl self-start">
                          <BiSolidQuoteAltLeft />
                        </div>
                        <p className="text-xl md:text-2xl text-center">
                          {desc}
                        </p>
                        <div className="text-5xl self-end">
                          <BiSolidQuoteAltRight />
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
