'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import { Fragment } from 'react';
import { BiSolidCircle } from 'react-icons/bi';
import { Section } from './default-elements';
import { H2, H3, Subheading } from './ui/typography';

export const MAKE_WEB_CONTENT = [
  [
    'Iterative web development',
    'We are agile. We deliver fast. You never have to wait for too long to start seeing the awesomeness of your website.',
    '/lottie/rocket.json',
  ],
  [
    'Dedicated team',
    'An agile web dev team equipped with knowledge of modern web technologies, best practices, experience and skills to build a website that delivers results.',
    '/lottie/team.json',
  ],
  [
    'Support',
    'We commit to help your business stand out and gain the digital-competitive advantage through user-friendly, fast, secure, high converting, engaging websites.',
    '/lottie/support-2.json',
  ],
] as const;

export default function MakeWebsites() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-row justify-center h-auto gap-4">
          <div className="hidden w-full lg:block ">
            <Image
              alt="Why choose image"
              height={636}
              src="/images/choose-us.png"
              width={636}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
                <div className="text-lg text-yellow-500">
                  <BiSolidCircle />
                </div>
                <Subheading
                  className="text-center lg:text-left"
                  data-aos="fade-up"
                >
                  Why Choose us
                </Subheading>
              </div>

              <H2
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                We make beautiful, high converting, engaging, secure websites.
              </H2>
            </div>
            <div className="grid grid-cols-1  gap-2 items-center md:grid-cols-[8rem_1fr]">
              {MAKE_WEB_CONTENT.map(([title, description, lottie], i) => (
                <Fragment key={title}>
                  <div
                    className="flex items-center content-center w-full h-full"
                    data-aos="fade-up"
                    data-aos-delay={(i + 2) * 100}
                  >
                    <Player autoplay loop src={lottie} />
                  </div>
                  <div
                    className="pb-4"
                    data-aos="fade-up"
                    data-aos-delay={(i + 2) * 100}
                  >
                    <H3>{title}</H3>
                    <Subheading className="mt-2">{description}</Subheading>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
