'use client';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { BiSolidQuoteAltLeft, BiSolidCircle } from 'react-icons/bi';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const TESTIMONIALS = [
  {
    star: 5,
    testimonial: 'Great service and knowledge with GatsbyJs',
    name: 'Adolfo Jimenez',
    from: 'DeDiabetes.com',
    img: '/images/testimonials/testi-4.jpg',
  },
  {
    star: 5,
    testimonial:
      'Techstacks completed the task in great detail. They were very proactive and took the initiative in many different areas, including informing us of a potential security vulnerability in our existing software.',
    name: 'Don',
    from: 'CEO | NextPay Ph',
    img: '/images/testimonials/testi-7.png',
  },
  {
    star: 5,
    testimonial:
      "One of the best agencies we've ever worked with. Solid work that is very responsive to our needs. Techstacks, thank you so much for everything you've done.",
    name: 'Peter',
    from: 'CTO | Release Media Inc.',
    img: '/images/testimonials/testi-4.jpg',
  },
  {
    star: 5,
    testimonial:
      'I had a coding problem with a website I was developing for a client that Techstacks helped me to resolve. Their expertise made the difference! They communicated clearly and efficiently, which greatly impressed me. Their work for me showed their keen attention to detail and thorough understanding of technical challenges.',
    name: 'Rheanna',
    from: 'Owner | Fancypants Design Co.',
    img: '/images/testimonials/testi-4.7.png',
  },
];

export default function Testimonials() {
  const carousel = useRef<AliceCarousel>(null);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <div className="flex flex-row gap-2 items-center">
                <div className="text-lg text-yellow-500">
                  <BiSolidCircle />
                </div>
                <p className="text-lg text-muted">Testimonials</p>
              </div>

              <h3 className="text-3xl text-center font-semibold lg:text-left">
                Hear What Our Clients Have to Say
              </h3>
            </div>
            <p className="text-lg text-center text-muted lg:text-left">
              Gain insight into the experiences of our valued clients as they
              share their success stories and how our web development solutions
              have made a difference for their businesses
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <AliceCarousel
              autoHeight
              autoPlay
              autoPlayInterval={3000}
              controlsStrategy="alternate"
              disableButtonsControls
              disableDotsControls
              infinite
              // innerWidth={0}
              items={TESTIMONIALS.map(({ from, name, testimonial, img }) => (
                <div className="flex flex-col gap-8 px-4 h-full" key={name}>
                  <div className="flex flex-col gap-4 bg-white h-full border border-primary-static rounded-md p-6  ">
                    <div className="flex flex-row items-center gap-2">
                      <Avatar>
                        <AvatarImage alt={name} src={img} />
                        <AvatarFallback>TS</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <p className="text-base text-black font-normal">
                          {name}
                        </p>
                        <p className="text-base text-black font-normal">
                          {from}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-primary-static text-3xl">
                        <BiSolidQuoteAltLeft />
                      </div>
                      <p className="text-muted text-justify ">{testimonial}</p>
                    </div>
                  </div>
                </div>
              ))}
              mouseTracking
              ref={carousel}
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                1280: { items: 3 },
              }}
            />
            <div className="flex justify-center gap-4">
              <Button
                className="p-3 text-xl bg-white text-muted"
                onClick={() => carousel.current?.slidePrev()}
                variant="ghost"
              >
                <BsArrowLeft />
              </Button>
              <Button
                className="p-3 text-xl text-white bg-primary-static hover:bg-primary-static/60"
                onClick={() => carousel.current?.slideNext()}
              >
                <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
