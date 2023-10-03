import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import MakeWebsites from '@/components/make-websites';
import { borderAnimateVariants } from '@/utils/border-animate';
import { Main, Section } from '@/components/default-elements';
import Testimonials from '@/components/testimonials';
import SocialProof from '@/components/social-proof';

export default function Home() {
  return (
    <Main>
      <Section className="space-y-8">
        <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:justify-center lg:items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left lg:text-5xl xl:text-7xl">
              Building websites with a purpose
            </h1>
            <p className="text-sm leading-loose text-center text-muted lg:text-left lg:text-xl">
              We specialize in designing and building beautiful, fast, secure,
              and high converting, engaging websites with excellent performance
              and SEO score.
            </p>
            <div className="flex gap-4 place-content-center lg:place-content-start">
              <Button
                asChild
                className={borderAnimateVariants({
                  className:
                    'bg-primary-static hover:bg-primary-static text-primary-foreground-static',
                })}
              >
                <Link href="#">Let&apos;s Start</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#">About Us</Link>
              </Button>
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

      <Section>
        <div className="space-y-3">
          <div className="text-lg text-center text-muted-foreground-static">
            Our Methodology
          </div>
          <h2 className="pb-8 text-3xl font-semibold tracking-wide text-center">
            Systematic flow in the website lifecycle
          </h2>
          <WebsiteLifecycle />
        </div>
      </Section>

      <Section>
        <div className="space-y-3 py-14">
          <MakeWebsites />
        </div>
      </Section>

      <Section className="space-y-3">
        <div className="space-y-3 py-14">
          <Testimonials />
        </div>
      </Section>
    </Main>
  );
}
