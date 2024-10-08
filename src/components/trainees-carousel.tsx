'use client';

import Image from 'next/image';
import {
  FaBookmark,
  FaCheckCircle,
  FaGlobeAsia,
  FaHeart,
} from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { PiShareFat } from 'react-icons/pi';
import { twConfig } from '@/lib/tw-config';
import { AutoPlay } from '@/lib/plugins/keen-slider/auto-play';
import { TRAINEES_IMG } from '@/constants/trainees-img';
import { TechstacksLogo } from './icons/techstacks-logo';
import { Carousel, CarouselItem } from './ui/carousel';
import { H3, Subheading } from './ui/typography';

export default function TraineesCarousel() {
  return (
    <div className="flex flex-col gap-4 overflow-visible">
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
        plugIns={[AutoPlay(2000)]}
      >
        {TRAINEES_IMG.map(({ id, name, src }, index) => (
          <CarouselItem
            className="flex items-center justify-center group"
            key={id}
            sliderIdx={index}
          >
            <div className="flex flex-col w-full max-w-3xl h-full gap-8 px-4 md:h-auto md:px-2 group-data-[active=false]:scale-90 transition-transform">
              <div className="flex flex-col h-full gap-10 p-5 border rounded-lg md:p-10 border-primary-static">
                <div className="flex flex-row gap-2 md:gap-4">
                  <div className="relative flex flex-row items-center justify-center w-10 h-10 gap-4 p-4 border border-white rounded-full bg-primary-static md:w-14 md:h-14 xl:w-20 xl:h-20">
                    <TechstacksLogo className="absolute w-8 h-8 text-white md:w-10 md:h-10" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-4">
                      <H3 className="text-base  lg:text-lg xl:text-2xl">
                        Techstacks
                      </H3>
                      <div className="text-blue-700">
                        <FaCheckCircle />
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-1">
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
                  <Image alt={name} src={src} />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-4">
                    <div className="text-2xl text-red-700">
                      <FaHeart />
                    </div>
                    <div className="text-2xl text-muted ">
                      <FaRegCommentDots />
                    </div>
                    <div className="text-2xl text-muted ">
                      <PiShareFat />
                    </div>
                  </div>
                  <div className="text-2xl text-yellow-500">
                    <FaBookmark />
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
