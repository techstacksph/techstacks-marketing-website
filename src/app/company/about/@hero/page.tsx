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
      <div className="flex justify-center w-full py-16">
        <Section>
          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row">
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
                  className="absolute right-0 z-0 p-4 border-4 rounded shadow bottom-5 md:bottom-20 md:right-8 md:p-8 bg-background/50 backdrop-blur border-primary-static lg:-mb-8 lg:-mr-11"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <Subheading className="text-black dark:text-white md:w-72">
                    <span className="relative inline-block">
                      <span className="absolute top-0 left-0 text-5xl -z-10 text-muted/50">
                        <FaQuoteLeft />
                      </span>
                      Grow your web presence with Techstacks. 🚀
                    </span>
                  </Subheading>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-5 px-0 lg:w-1/2 lg:px-8">
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
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
