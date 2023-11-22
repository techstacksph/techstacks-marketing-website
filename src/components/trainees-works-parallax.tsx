'use client';

import React from 'react';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { OJT_PORTFOLIOS } from '@/constants/ojt-portfolios';
import { cn } from '@/utils/cn';

export default function TraineesWorksParallax() {
  return (
    <MouseParallaxContainer
      className="flex flex-col w-full gap-16 px-4 2xl:px-0 items-center justify-evenly overflow-clip"
      containerStyle={{ overflow: 'clip' }}
      globalFactorX={0.03}
      globalFactorY={0.02}
      inverted
      resetOnLeave
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 items-center w-full max-w-screen-2xl ">
        {OJT_PORTFOLIOS.map(({ id, name, src }, index) => (
          <MouseParallaxChild
            className={cn(
              index % 2 && 'pt-0 md:pt-8 lg:pt-16',
              index === OJT_PORTFOLIOS.length - 1 && 'pb-16',
            )}
            key={id}
          >
            <div
              className={cn(
                'flex items-center justify-center gap-8 opacity-70  hover:opacity-100 transition-opacity flex-col md:flex-row',
                Boolean(index % 2) && 'md:flex-row-reverse',
              )}
            >
              <Image alt={`${name} screenshot`} src={src} />
            </div>
          </MouseParallaxChild>
        ))}
      </div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="sticky top-0 flex items-center justify-center h-screen bg-gradient-to-b from-background via-transparent via-30% to-background to-95%">
          <div className="border pointer-events-auto bg-primary/80 backdrop-blur border-border rounded-2xl">
            <div className="px-6 py-4">
              <Link
                className=" flex flex-row gap-2 items-center font-poppins text-xl md:text-3xl lg:text-5xl hover:text-white hover:dark:text-primary-static [&>span]:hover:animate-bounce"
                href="#"
              >
                Explore their works
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
}
