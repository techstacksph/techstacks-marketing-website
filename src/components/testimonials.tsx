'use client';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';
import { BiSolidQuoteAltLeft, BiSolidCircle } from 'react-icons/bi';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Section } from './default-elements';
import { H2, Subheading } from './ui/typography';

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

function Testimonials() {
  const carousel = useRef<AliceCarousel>(null);

  return (
    <div className="flex justify-center w-full py-16 border-t border-green-900">
      <Section>
        <div className="flex flex-col gap-10">
          <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <div className="flex flex-row items-center gap-2">
                <div className="text-lg text-yellow-500">
                  <BiSolidCircle />
                </div>
                <Subheading data-aos="fade-up">Testimonials</Subheading>
              </div>

              <H2
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Hear What Our Clients Have to Say
              </H2>
            </div>
            <Subheading
              className="text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Gain insight into the experiences of our valued clients as they
              share their success stories and how our web development solutions
              have made a difference for their businesses
            </Subheading>
          </div>
          <div className="flex flex-col-reverse gap-4 md:flex-col ">
            <AliceCarousel
              autoPlay
              autoPlayInterval={3000}
              controlsStrategy="alternate"
              disableButtonsControls
              disableDotsControls
              infinite
              items={TESTIMONIALS.map(({ from, name, testimonial, img }) => (
                <div className="flex flex-col gap-8 px-4" key={name}>
                  <div className="flex flex-col h-full gap-4 p-6 bg-white border rounded-md border-primary-static aspect-square">
                    <div className="flex flex-row items-center gap-2">
                      <Avatar>
                        <AvatarImage alt={name} src={img} />
                        <AvatarFallback>TS</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-normal text-black">
                          {name}
                        </p>
                        <p className="text-base font-normal text-black">
                          {from}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center h-full gap-1">
                      <div className="text-3xl text-primary-static">
                        <BiSolidQuoteAltLeft />
                      </div>
                      <p className="text-justify text-muted">{testimonial}</p>
                    </div>
                  </div>
                </div>
              ))}
              mouseTracking
              preservePosition
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
      </Section>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
