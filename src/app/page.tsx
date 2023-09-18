import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Hero from '@/components/hero';
import WebsiteLifecycle from '@/components/website-lifecycle';
import MakeWebsites from '@/components/make-websites';

const SocialProof = dynamic(() => import('@/components/social-proof'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/testimonials'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="px-4 mx-auto space-y-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 py-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold leading-tight text-center">
              Building websites with a purpose
            </h1>
            <p className="text-sm leading-loose text-center text-muted">
              We specialize in designing and building beautiful, fast, secure,
              and high converting, engaging websites with excellent performance
              and SEO score.
            </p>
            <div className="flex gap-4 place-content-center">
              <Button asChild>
                <Link href="#">Let&apos;s Start</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#">About Us</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-square">
            <Hero />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg text-center text-muted">
            Working with the best
          </h2>
          <SocialProof />
        </div>

        <div className="space-y-3">
          <div className="text-lg text-center text-muted">Our Methodology</div>
          <h2 className="text-3xl font-semibold tracking-wide text-center">
            Systematic flow in the website lifecycle
          </h2>
          <WebsiteLifecycle />
        </div>

        <div className="space-y-3">
          <div className="text-lg text-center text-muted">Why Choose us</div>
          <h2 className="text-3xl font-semibold tracking-wide text-center">
            We make beautiful, high converting, engaging, secure websites.
          </h2>
          <MakeWebsites />
        </div>

        <div className="space-y-3">
          <div className="text-lg text-center text-muted">Testimonials</div>
          <h2 className="text-3xl font-semibold tracking-wide text-center">
            Success stories from our Partners
          </h2>
          <Testimonials />
        </div>
      </div>
    </main>
  );
}
