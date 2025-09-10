import Link from 'next/link';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import { Main, Section } from '@/components/default-elements';
import { Testimonials } from '@/components/testimonials';
import SocialProof from '@/components/social-proof';
import { NavRoutes } from '@/constants/nav-routes';
import { H1, Subheading } from '@/components/ui/typography';
import { BgHero } from '@/components/icons/bg-hero';
import { Separator } from '@/components/ui/separator';
import WhyChooseUs from '@/components/choose-us';

export default function Home() {
  return (
    <Main className="overflow-clip">
      <BgHero className="absolute block w-full m-auto -z-10" />
      <div className="flex justify-center w-full py-16 [&&&]:mt-0">
        <Section>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:justify-center lg:items-center">
            <div className="flex flex-col gap-8">
              <H1
                className="text-center whitespace-pre-wrap lg:text-left xl:text-5xl"
                data-aos="fade-up"
              >
                Building scalable websites and powerful web applications with modern technologies.
              </H1>
              <Subheading
                className="text-center lg:text-left leading-none"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                We deliver secured, scalable web technologies — from responsive websites to enterprise-grade applications.
              </Subheading>
              <div className="flex flex-col lg:flex-row gap-4 place-content-center lg:place-content-start">
                <Link
                  className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all border rounded bg-primary-static dark:bg-white md:w-52 h-14 border-primary-static dark:border-white group"
                  href={NavRoutes.Services}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-white dark:bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                  <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out dark:text-black group-hover:text-black">
                    Let&apos;s start
                  </span>
                </Link>
                <Link
                  className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
                  href={NavRoutes.Company.AboutUs}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
                    About us
                  </span>
                </Link>
              </div>
              <div className="flex flex-col py-0 lg:py-8">
                <Subheading className="pb-8 text-center lg:text-left lg:text-lg">
                  They trusted and were satisfied with our work:
                </Subheading>
                <SocialProof />
              </div>
            </div>
            <div className="aspect-square">
              <Hero />
            </div>
          </div>
        </Section>
      </div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <WebsiteLifecycle />
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <WhyChooseUs />
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <Testimonials />
    </Main>
  );
}
