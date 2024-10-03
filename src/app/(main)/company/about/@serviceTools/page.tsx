import Image from 'next/image';
import { serviceToolsLogo } from '@/constants/service-tools';
import { Section } from '@/components/default-elements';
import { H2, Subheading } from '@/components/ui/typography';

export default function ServiceTools() {
  return (
    <div className="flex justify-center w-full py-16 bg-gradient-to-b from-background from-10% via-primary-static/50 via-50% to-background to-90% ">
      <Section>
        <div className="flex flex-col items-center gap-14 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-8 md:w-1/2 ">
            <H2
              className="text-center lg:font-bold"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Our Tailored Service Tools
            </H2>
            <Subheading
              className="font-normal text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We believe in crafting experiences that align seamlessly with your
              goals, and our tailored service tools play a vital role in
              achieving this.
            </Subheading>
          </div>
          <div
            className="grid items-center w-full h-auto grid-cols-4 gap-4 justify-evenly md:w-1/2"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {serviceToolsLogo.map((serviceTools) => (
              <div key={serviceTools.title}>
                <Image
                  alt={`${serviceTools.title} logo`}
                  className="transition duration-300 ease-in-out grayscale hover:scale-110 hover:grayscale-0"
                  src={serviceTools.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
