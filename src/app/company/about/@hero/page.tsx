import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { Section } from '@/components/default-elements';
import Hero from '@/components/hero';
import { H1, Subheading } from '@/components/ui/typography';
import { companyLink } from '@/constants/nav-links';
import { BgHero } from '@/components/icons/bg-hero';

export default function ApplyHeroSection() {
  const aboutUsLink = companyLink[0]?.link.find(
    (item) => item.label === 'About us',
  );

  return (
    <>
      <BgHero className="absolute block w-full m-auto -z-10" />
      <div className="w-full flex justify-center py-16">
        <Section>
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div
                  className="aspect-square"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <Hero />
                </div>
                <div
                  className="absolute bottom-5 md:bottom-20 right-0 md:right-8 z-10 p-4 md:p-8 bg-background/50 backdrop-blur border-4 border-primary-static rounded shadow  lg:-mb-8 lg:-mr-11"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <Subheading className="text-black   dark:text-white md:w-72">
                    <span className="relative inline-block">
                      <span className="absolute top-0 left-0 -z-10 text-5xl text-muted/50">
                        <FaQuoteLeft />
                      </span>
                      Your Trusted Partner in I.T Services Excellence
                    </span>
                  </Subheading>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col  gap-5 px-0 lg:px-8">
              <div className="flex flex-col gap-4 p-4 border-l-4 border-yellow-500">
                <BreadCrumbs data-aos="fade-up" data-aos-delay={100}>
                  <BreadCrumbItem>{aboutUsLink?.label}</BreadCrumbItem>
                </BreadCrumbs>
                <H1 data-aos="fade-up" data-aos-delay={200}>
                  Who we are
                </H1>
              </div>
              <Subheading
                className="text-left"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {aboutUsLink?.description}
              </Subheading>
              <Link
                className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-primary-static group bg-primary-static"
                data-aos="fade-up"
                data-aos-delay={400}
                href="mailto:techstacks.2022@gmail.com"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-background group-hover:text-primary-static">
                  Let&apos;s work together
                </span>
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
