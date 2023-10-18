import Link from 'next/link';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import MakeWebsites from '@/components/make-websites';
import { Main, Section } from '@/components/default-elements';
import Testimonials from '@/components/testimonials';
import SocialProof from '@/components/social-proof';
import { NavRoutes } from '@/constants/nav-routes';

export default function Home() {
  return (
    <Main>
      <div className="w-full flex justify-center py-16 ">
        <Section>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:justify-center lg:items-center">
            <div className="flex flex-col gap-8">
              <h1
                className="text-3xl font-semibold leading-tight text-center lg:text-left lg:text-5xl xl:text-7xl"
                data-aos="fade-up"
              >
                Building websites with a purpose
              </h1>
              <p
                className="text-base leading-loose text-center text-muted lg:text-left lg:text-xl"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                We specialize in designing and building beautiful, fast, secure,
                and high converting, engaging websites with excellent
                performance and SEO score.
              </p>
              <div className="flex gap-4 place-content-center lg:place-content-start">
                <Link
                  className="w-28 lg:w-44 h-14 p-3 border border-muted-static relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  href={NavRoutes.Services}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static/60 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-black">
                    Let&apos;s start
                  </span>
                </Link>
                <Link
                  className="w-28 lg:w-44 h-14 p-3 border border-muted-static relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-400 rounded hover:bg-white group"
                  href={NavRoutes.Company.AboutUs}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static/60 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                  <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-black">
                    About us
                  </span>
                </Link>
              </div>
              <div className="flex flex-col py-0 lg:py-8">
                <h2 className="pb-8 text-lg text-center text-muted-foreground-static lg:text-left">
                  Working with the best
                </h2>
                <SocialProof />
              </div>
            </div>
            <div className="aspect-square">
              <Hero />
            </div>
          </div>
        </Section>
      </div>
      <WebsiteLifecycle />
      <MakeWebsites />
      <Testimonials />
    </Main>
  );
}
