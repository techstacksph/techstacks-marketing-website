'use client';

import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ImQuotesLeft } from 'react-icons/im';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Button } from './ui/button';

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
    <div className="space-y-16">
      <div className="flex justify-center gap-4">
        <Button
          className="p-3 text-xl bg-white text-muted"
          onClick={() => carousel.current?.slidePrev()}
          variant="ghost"
        >
          <BsArrowLeft />
        </Button>
        <Button
          className="p-3 text-xl text-white bg-primary"
          onClick={() => carousel.current?.slideNext()}
        >
          <BsArrowRight />
        </Button>
      </div>

      <AliceCarousel
        autoHeight
        autoPlay
        autoPlayInterval={3000}
        controlsStrategy="alternate"
        disableButtonsControls
        disableDotsControls
        infinite
        innerWidth={0}
        items={TESTIMONIALS.map(({ from, name, star, testimonial, img }, i) => (
          <div className="flex flex-col gap-8 px-4" key={name}>
            <div className="flex items-center justify-center gap-2">
              <Image
                alt={name}
                className="overflow-hidden rounded-full w-11 h-11"
                data-value={i}
                height={61}
                src={img}
                width={61}
              />
              <div className="space-y-2">
                <div className="text-muted">{name}</div>
                <div>{from}</div>
              </div>
            </div>
            <div className="bg-white rounded-md">
              <div className="p-5">
                <div className="flex flex-col items-center gap-5">
                  <ImQuotesLeft className="text-2xl text-muted" />
                  <p className="text-center text-muted">{testimonial}</p>
                  <div className="flex">
                    {Array.from(Array(star)).map(() => (
                      <AiFillStar
                        className="text-yellow-400"
                        key={Math.random() * Date.now()}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        mouseTracking
        ref={carousel}
        responsive={{
          0: { items: 1 },
          568: { items: 2 },
          1024: { items: 5 },
        }}
      />
    </div>
  );
}
