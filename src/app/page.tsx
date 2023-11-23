import Link from 'next/link';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import { Main, Section } from '@/components/default-elements';
import { Testimonials } from '@/components/testimonials';
import SocialProof from '@/components/social-proof';
import { NavRoutes } from '@/constants/nav-routes';
import { Typewriter } from '@/components/typewriter';
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:justify-center lg:items-center">
            <div className="flex flex-col gap-8">
              <H1
                className="text-center whitespace-pre-wrap lg:text-left"
                data-aos="fade-up"
              >
                Building websites{'\n'}
                <Typewriter
                  component="span"
                  options={{
                    wrapperClassName: 'text-primary-static',
                    strings: ['with a purpose', 'beyond limits', 'with style'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 50,
                  }}
                />
              </H1>
              <Subheading
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                We specialize in designing and building beautiful, fast, secure,
                and high converting, engaging websites with excellent
                performance and SEO score.
              </Subheading>
              <div className="flex gap-4 place-content-center lg:place-content-start">
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
                <Subheading className="pb-8 text-center lg:text-left">
                  Working with the best
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
