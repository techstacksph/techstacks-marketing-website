import Link from 'next/link';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import { Main, Section } from '@/components/default-elements';
import { Testimonials } from '@/components/testimonials';
import VisionMissionSection from '@/components/vision-mission-section';
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
            <div className="flex flex-col gap-4 lg:gap-8">
              <H1
                className="text-center whitespace-pre-wrap lg:text-left xl:text-5xl"
                data-aos="fade-up"
              >
                Building intelligent, scalable digital experiences for the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-static to-blue-500 font-extrabold pb-2 inline-block">
                  AI Era.
                </span>
              </H1>
              <Subheading
                className="text-center lg:text-left leading-relaxed text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                We construct reliable, future-proof web ecosystems — combining
                cutting-edge design, resilient enterprise architectures, and
                intelligent automation.
              </Subheading>
              <div className="flex flex-col lg:flex-row gap-4 place-content-center lg:place-content-start mt-4">
                <a
                  className="relative inline-flex items-center justify-center w-full p-3 font-medium transition-all rounded-full bg-primary-static hover:bg-primary-static/90 hover:-translate-y-0.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--primary-static),0.3)] md:w-52 h-14 group"
                  href="https://forms.gle/QxQsMcbo7eLNnAAb8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="relative text-white font-semibold">
                    Let&apos;s Build Together
                  </span>
                  <svg
                    className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                     />
                  </svg>
                </a>
                <Link
                  className="relative inline-flex items-center justify-center w-full p-3 font-medium transition-all bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 md:w-52 h-14 hover:-translate-y-0.5"
                  href={NavRoutes.Company.AboutUs}
                >
                  <span className="relative text-black dark:text-white font-semibold">
                    Explore Our Vision
                  </span>
                </Link>
              </div>
              <div className="flex flex-col py-0 lg:py-6">
                <Subheading className="pb-6 text-center lg:text-left lg:text-lg font-medium text-muted-foreground/80">
                  Trusted by resilient global brands:
                </Subheading>
                <SocialProof />
              </div>
            </div>
            <div className="aspect-square pointer-events-none lg:pointer-events-auto">
              <Hero />
            </div>
          </div>
        </Section>
      </div>
      <Section role="none">
        <Separator className="opacity-50" variant="horizon" />
      </Section>
      <VisionMissionSection />
      <Section role="none">
        <Separator className="opacity-50" variant="horizon" />
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
