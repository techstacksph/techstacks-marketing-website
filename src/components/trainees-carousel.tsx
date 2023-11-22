'use client';

import { FaCheckCircle, FaGlobeAsia } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import { GoHeart, GoDotFill } from 'react-icons/go';
import { FaRegCommentDots } from 'react-icons/fa6';
import { PiShareFat } from 'react-icons/pi';
import { CiBookmark } from 'react-icons/ci';
import { twConfig } from '@/lib/tw-config';
import { TRAINEES_IMG } from '@/constants/trainees-img';
import { AutoPlay } from '@/lib/plugins/keen-slider/auto-play';
import { Carousel, CarouselItem } from './ui/carousel';
import { H3, Subheading } from './ui/typography';
import { TechstacksLogo } from './icons/techstacks-logo';

export default function TraineesCarousel() {
  return (
    <div className="flex gap-4 overflow-visible flex-col">
      <Carousel
        className="[&&&]:overflow-visible"
        opts={{
          mode: 'free-snap',
          loop: true,
          slides: { origin: 'center', perView: 1 },
          breakpoints: {
            [`(min-width: ${twConfig.screens.md})`]: {
              slides: { origin: 'center', perView: 1.5 },
            },
            [`(min-width: ${twConfig.screens.lg})`]: {
              slides: { origin: 'center', perView: 2.5 },
            },
          },
        }}
        plugIns={[AutoPlay]}
      >
        {TRAINEES_IMG.map(({ id, name, src }, index) => (
          <CarouselItem
            className="flex justify-center items-center group"
            key={id}
            sliderIdx={index}
          >
            <div className="flex flex-col w-full max-w-3xl h-full gap-8 px-4 md:h-auto md:px-2 group-data-[active=false]:scale-90 transition-transform">
              <div className="flex flex-col h-full gap-10 p-5 md:p-10 bg-white dark:bg-slate-200 border rounded-lg border-white">
                <div className="flex flex-row gap-2 md:gap-4">
                  <div className="flex flex-row gap-4 justify-center items-center relative bg-primary-static border-white w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 p-4 border rounded-full">
                    <TechstacksLogo className="text-white absolute w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-4 items-center">
                      <H3 className="text-black text-base lg:text-lg xl:text-2xl">
                        Techstacks ojt&apos;s intern
                      </H3>
                      <div className="text-blue-700">
                        <FaCheckCircle />
                      </div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <Subheading className="text-muted">
                        I.T Services
                      </Subheading>
                      <div className="text-xs text-muted/50">
                        <GoDotFill />
                      </div>
                      <div className="text-xl text-muted">
                        <FaGlobeAsia />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image alt={`${name}`} src={src} />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="text-2xl text-black">
                      <GoHeart />
                    </div>
                    <div className="text-2xl text-black">
                      <FaRegCommentDots />
                    </div>
                    <div className="text-2xl text-black">
                      <PiShareFat />
                    </div>
                  </div>
                  <div className="text-2xl text-black">
                    <CiBookmark />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
