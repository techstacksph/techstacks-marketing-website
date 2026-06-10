'use client';

import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import Image from 'next/image';
import { useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { testi1, testi2, testi3 } from '@/assets/images';
import { twConfig } from '@/lib/tw-config';
import { AutoPlay } from '@/lib/plugins/keen-slider/auto-play';
import { Carousel, CarouselItem, type CarouselRef } from './ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { H3, Subheading } from './ui/typography';

const TESTIMONIALS = [
  {
    star: 5,
    testimonial: 'Great service and knowledge with GatsbyJs',
    name: 'Adolfo Jimenez',
    from: 'DeDiabetes.com',
    src: testi1,
  },
  {
    star: 5,
    testimonial:
      'Techstacks completed the task in great detail. They were very proactive and took the initiative in many different areas, including informing us of a potential security vulnerability in our existing software.',
    name: 'Don',
    from: 'CEO | NextPay Ph',
    src: testi1,
  },
  {
    star: 5,
    testimonial:
      "One of the best agencies we've ever worked with. Solid work that is very responsive to our needs. Techstacks, thank you so much for everything you've done.",
    name: 'Peter',
    from: 'CTO | Release Media Inc.',
    src: testi2,
  },
  {
    star: 5,
    testimonial:
      'I had a coding problem with a website I was developing for a client that Techstacks helped me to resolve. Their expertise made the difference! They communicated clearly and efficiently, which greatly impressed me. Their work for me showed their keen attention to detail and thorough understanding of technical challenges.',
    name: 'Rheanna',
    from: 'Owner | Fancypants Design Co.',
    src: testi3,
  },
  {
    star: 5,
    testimonial:
      'Working with Tech Stacks was a great experience—they were proactive, friendly, and incredibly fast in delivering exactly what we needed. Their responsiveness and attention to detail made the entire process smooth and efficient from start to finish. Their well-rounded, industry-oriented approach has been an exceptional element for a resounding success of the project.',
    name: 'Danilo Dela Pena',
    from: 'CEO | Shoe Crew PH',
    src: testi2,
  },
] as const;

export function TestimonialCarousel() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className="flex flex-col-reverse gap-4 overflow-visible md:flex-col">
      <Carousel
        className="[&&&]:overflow-visible"
        opts={{
          mode: 'free-snap',
          loop: true,
          slides: { origin: 'center', perView: 1 },
          breakpoints: {
            [`(min-width: ${twConfig.screens.md})`]: {
              slides: { origin: 'center', perView: 1.2 },
            },
            [`(min-width: ${twConfig.screens.lg})`]: {
              slides: { origin: 'center', perView: 1.8 },
            },
          },
        }}
        plugIns={[AutoPlay(2000)]}
        ref={carouselRef}
      >
        {TESTIMONIALS.map(({ from, name, testimonial, src }, idx) => (
          <CarouselItem
            className="flex items-center group"
            key={name}
            sliderIdx={idx}
          >
            <div className="flex flex-col w-full h-full gap-8 px-4 md:h-auto md:px-2 group-data-[active=false]:scale-90 transition-transform">
              <div className="flex flex-col h-full gap-4 p-6 border rounded-md bg-background border-primary-static">
                <div className="flex flex-row items-center gap-2">
                  <Avatar className="w-14 h-14">
                    <AvatarImage alt={name} asChild src={src.src}>
                      <Image alt={`${name} profile image`} src={src} />
                    </AvatarImage>
                    <AvatarFallback>{name}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <H3>{name}</H3>
                    <Subheading>{from}</Subheading>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-full gap-1">
                  <div className="text-5xl text-primary-static">
                    <BiSolidQuoteAltLeft />
                  </div>
                  <Subheading>{testimonial}</Subheading>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>

      <div className="flex justify-center gap-4">
        <Button
          className="p-3 text-xl bg-transparent border border-primary-static text-muted hover:bg-transparent"
          onClick={() => carouselRef.current?.prev()}
          variant="ghost"
        >
          <BsArrowLeft />
        </Button>
        <Button
          className="p-3 text-xl text-white bg-primary-static hover:bg-primary-static/60"
          onClick={() => carouselRef.current?.next()}
        >
          <BsArrowRight />
        </Button>
      </div>
    </div>
  );
}
