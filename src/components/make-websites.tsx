'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import { Fragment } from 'react';

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
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-row justify-center gap-4 h-auto">
          <div className="hidden w-full lg:block ">
            <Image
              alt="Why choose image"
              height={636}
              src="/images/choose-us.png"
              width={636}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <p className="text-lg text-muted text-center lg:text-left ">
                Why Choose us
              </p>
              <h2 className="text-3xl font-semibold text-center lg:text-left lg:text-4xl xl:text-5xl ">
                We make beautiful, high converting, engaging, secure websites.
              </h2>
            </div>
            <div className="grid grid-cols-1  gap-2 items-center md:grid-cols-[8rem_1fr]">
              {MAKE_WEB_CONTENT.map(([title, description, lottie]) => (
                <Fragment key={title}>
                  <div className="flex items-center content-center h-24 w-24">
                    <Player autoplay loop src={lottie} />
                  </div>
                  <div className="pb-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-muted text-lg">{description}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
