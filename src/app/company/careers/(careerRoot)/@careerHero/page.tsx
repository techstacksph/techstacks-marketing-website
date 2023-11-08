import Link from 'next/link';
import { NavRoutes } from '@/constants/nav-routes';
import { ourTeam } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { TechstacksLogo } from '@/components/icons/techstacks-logo';
import { Hexagon } from '@/components/hexagon';

export default function CareerHero() {
  return (
    <Section className="h-fit">
      <div className="grid items-center h-full gap-8 md:gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:gap-8 md:items-start">
          <h1
            className="text-3xl font-medium leading-tight tracking-wide text-center whitespace-pre-wrap md:text-7xl md:text-left font-dm-sans"
            data-aos="fade-up"
          >
            Elevate your career with{'\n'}
            <span className="text-primary-static font-poppins">
              <TechstacksLogo
                className="inline"
                data-aos="fade-left"
                data-aos-delay={100}
              />{' '}
              <span
                className="tracking-normal"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Techstacks
              </span>
            </span>
          </h1>
          <p
            className="text-sm font-medium tracking-wider text-center md:text-xl text-muted md:text-left"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Where Exceptional Individuals Thrive on Complex Web Ventures.
          </p>

          <Link
            className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-28 lg:w-44 h-14 border-muted-static group bg-primary-static"
            data-aos="fade-up"
            data-aos-delay={400}
            href={NavRoutes.Company.Apply}
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent/75 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
            <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-foreground group-hover:text-accent-foreground">
              Apply now!
            </span>
          </Link>
        </div>
        <div className="h-fit">
          <div className="grid items-center h-full grid-cols-2">
            <div className="flex flex-col gap-8 translate-x-1/4">
              <div data-aos="fade-right">
                {/* TODO images */}
                <Hexagon
                  alt="alt"
                  className="hover:animate-none hover:scale-125 transition-transform animate-unsteady duration-[2400] h-32 md:h-60 drop-shadow-2xl"
                  src={ourTeam}
                />
              </div>
              <div data-aos="fade-left" data-aos-delay={100}>
                {/* TODO images */}
                <Hexagon
                  alt="alt"
                  className="hover:animate-none hover:scale-125 transition-transform animate-unsteady direction-alternate duration-[5800] h-60 drop-shadow-2xl"
                  src={ourTeam}
                />
              </div>
            </div>
            <div
              className="flex items-center h-full"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* TODO images */}
              <Hexagon
                alt="alt"
                className="hover:animate-none hover:scale-125 transition-transform animate-unsteady direction-alternate-reverse duration-[9300] h-60 drop-shadow-2xl"
                src={ourTeam}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
