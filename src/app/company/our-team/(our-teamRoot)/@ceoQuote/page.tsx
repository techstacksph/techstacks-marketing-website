import React from 'react';
import Image from 'next/image';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { Section } from '@/components/default-elements';
import { sirThirdImg } from '@/assets/images';
import { Subheading } from '@/components/ui/typography';

export default function CeoQuote() {
  return (
    <div className="w-full flex justify-center py-16 ">
      <Section>
        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between relative items-center w-full">
            <div className="flex flex-col items-center gap-1 w-full max-w-4xl p-10 lg:py-20 lg:px-16">
              <div
                className="text-3xl xl:text-5xl self-start"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <BiSolidQuoteAltLeft />
              </div>
              <Subheading className="text-center lg:text-3xl">
                Our team is a blend of creative designers, brilliant developers,
                and strategic thinkers who work in harmony to bring your visions
                to life.
              </Subheading>
              <div className="text-3xl xl:text-5xl self-end">
                <BiSolidQuoteAltRight />
              </div>
            </div>
            <div
              className="w-full max-w-xs p-0 lg:pr-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="flex justify-center bg-primary-static ">
                <Image alt="asd" className="h-[359px]" src={sirThirdImg} />
              </div>
            </div>
            <div
              className="flex absolute w-full h-[calc(100%-32px)] border border-primary-static bg-transparent top-4 left-0 -z-10"
              data-aos="fade-up"
              data-aos-delay={100}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
