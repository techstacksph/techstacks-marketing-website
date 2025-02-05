'use client';

import { useState } from 'react';
import {
  BiSolidCircle,
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
} from 'react-icons/bi';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Section } from '@/components/default-elements';
import { TESTIMONIAL_SERVICES } from '@/constants/testimonial-services';
import { cn } from '@/utils/cn';
import { H2, Subheading } from '@/components/ui/typography';

type MethodTabValue = (typeof TESTIMONIAL_SERVICES)[number][number];

export default function TestimonialServices() {
  const [tab, setTab] = useState<MethodTabValue>(TESTIMONIAL_SERVICES[0][0]);
  const [container] = useAutoAnimate();

  return (
    <div className="w-full bg-primary-static/10">
      <div className="w-full py-16 flex justify-center bg-background rounded-tr-[150px] md:rounded-tr-[250px]  lg:rounded-tr-[450px] ">
        <Section>
          <div className="flex flex-col items-center gap-8">
            <div
              className="flex flex-row items-center justify-center gap-2"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="text-lg text-yellow-500">
                <BiSolidCircle />
              </div>
              <p className="text-lg text-center text-muted">Testimonials</p>
            </div>
            <H2
              className="text-center "
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Words to validate our works
            </H2>
            <Subheading
              className="text-center "
              data-aos="fade-up"
              data-aos-delay={300}
            >
              These testimonials are a testament to our commitment to excellence
              and customer satisfaction. Join us in celebrating the stories of
              our delighted clients and find out why they trust us for their
              needs.
            </Subheading>
            <div className="flex flex-col items-center w-full gap-8">
              <div
                className="flex items-center flex-wrap gap-0 justify-evenly lg:gap-20"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                {TESTIMONIAL_SERVICES.map(([Logo, title]) => (
                  <div
                    className={cn(
                      'p-2 transition h-full flex flex-col items-center',
                      Logo === tab &&
                        'cursor-pointer border-b border-primary-static',
                    )}
                    key={title}
                    onMouseEnter={() => {
                      setTab(Logo);
                    }}
                  >
                    <div className="flex items-center justify-center h-full gap-2">
                      <div
                        className={cn(
                          ' transition duration-300 ease-in-out hover:scale-110 grayscale hover:grayscale-0',
                          Logo === tab && 'grayscale-0',
                        )}
                      >
                        <Logo />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="w-full border border-primary-static shadow-lg [&&]:shadow-primary-static/40"
                data-aos="fade-up"
                data-aos-delay={500}
                ref={container}
              >
                {TESTIMONIAL_SERVICES.map(
                  ([Logo, title, name, desc]) =>
                    Logo === tab && (
                      <div className="flex flex-col md:flex-row " key={title}>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-8 md:items-start bg-primary-static/20 md:w-96">
                          <h3 className="text-xl font-semibold md:text-2xl">
                            {name}
                          </h3>
                          <p className="text-base font-semibold md:text-lg text-muted">
                            {title}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-4 md:p-8">
                          <div className="self-start text-5xl">
                            <BiSolidQuoteAltLeft />
                          </div>
                          <p className="text-xl text-center md:text-2xl">
                            {desc}
                          </p>
                          <div className="self-end text-5xl">
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
    </div>
  );
}
