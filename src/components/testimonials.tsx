import { BiSolidCircle } from 'react-icons/bi';
import { Section } from './default-elements';
import { H2, Subheading } from './ui/typography';
import { TestimonialCarousel } from './testimonial-carousel';

export function Testimonials() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-col gap-10">
          <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <div
                className="flex flex-row items-center gap-2"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="text-lg text-yellow-500">
                  <BiSolidCircle />
                </div>
                <Subheading>Testimonials</Subheading>
              </div>

              <H2
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Hear What Our Clients Have to Say
              </H2>
            </div>
            <Subheading
              className="text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Gain insight into the experiences of our valued clients as they
              share their success stories and how our web development solutions
              have made a difference for their businesses
            </Subheading>
          </div>
          <TestimonialCarousel />
        </div>
      </Section>
    </div>
  );
}
