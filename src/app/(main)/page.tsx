import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  FileLock2,
  GraduationCap,
  Layers,
  LifeBuoy,
  Lock,
  Radar,
  Receipt,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { agassizImg, mnmImg, portfolioImg } from '@/assets/images';
import { Main, Section } from '@/components/default-elements';
import {
  Band,
  CheckList,
  Eyebrow,
  SectionHeader,
  SiteShot,
  TestimonialCard,
} from '@/components/marketing';
import SocialProof from '@/components/social-proof';
import { SolutionTabs } from '@/components/solution-tabs';
import { Button } from '@/components/ui/button';
import { H1, H3, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';
import { TESTIMONIALS } from '@/constants/testimonials';

const HERO_ASSURANCES = [
  'Clear scope and pricing up front',
  'NDA available on request',
  'Support after launch',
];

const VALUE_POINTS = [
  {
    icon: Layers,
    title: 'One accountable partner',
    description:
      'Design, engineering, security, and support under one roof, so you spend less time coordinating vendors.',
  },
  {
    icon: Target,
    title: 'Predictable delivery',
    description:
      'Scope, deliverables, and cost are defined up front, and you see progress through incremental builds.',
  },
  {
    icon: Radar,
    title: 'Risks raised early',
    description:
      'We flag problems before they become your problems, including issues nobody asked us to look for.',
  },
  {
    icon: LifeBuoy,
    title: 'Here after launch',
    description:
      'Maintenance, optimization, and technical support keep your investment working long after go-live.',
  },
];

const PROCESS = [
  {
    title: 'Plan',
    description: 'We align on goals, scope of work, deliverables, and cost.',
    benefit: 'A clear plan and a transparent proposal',
  },
  {
    title: 'Design',
    description: 'Wireframes, prototypes, and high-fidelity designs.',
    benefit: 'See it before it gets built',
  },
  {
    title: 'Build',
    description: 'Incremental builds, integrations, code reviews, and QA.',
    benefit: 'Steady progress you can review',
  },
  {
    title: 'Optimize',
    description: 'We evaluate post-launch performance and SEO, then improve.',
    benefit: 'A product that keeps getting better',
  },
  {
    title: 'Support',
    description: 'Ongoing technical help, with training for your team.',
    benefit: 'A team to call after go-live',
  },
];

const TRUST_POINTS = [
  {
    icon: Building2,
    title: 'A registered corporation',
    description:
      'You contract with Techstacks IT Services Inc., a company with a named leadership team and a physical office in the Philippines.',
  },
  {
    icon: FileLock2,
    title: 'Confidentiality',
    description:
      'We are open to signing NDAs, so your project details stay private from the first conversation.',
  },
  {
    icon: ShieldCheck,
    title: 'Security as standard',
    description:
      'We follow industry best practices, run security audits, and protect against common vulnerabilities.',
  },
  {
    icon: Lock,
    title: 'Data privacy',
    description:
      'We publish a clear privacy policy covering what data we collect and how it is handled.',
  },
  {
    icon: Receipt,
    title: 'Transparent pricing',
    description:
      'Costs are based on scope, complexity, and time, and laid out in a detailed project proposal.',
  },
  {
    icon: GraduationCap,
    title: 'Training and handover',
    description:
      'We train your team on the applications we build, tailored to how your business works.',
  },
];

function HeroShowcase() {
  const featured = TESTIMONIALS[2];

  return (
    <div className="grid grid-cols-2 gap-3 lg:gap-4" data-aos="fade-up">
      <SiteShot
        alt="MNM Customs Brokerage website built by Techstacks"
        className="col-span-2 shadow-sm"
        priority
        sizes="(min-width: 992px) 45vw, 100vw"
        src={mnmImg}
      />
      <SiteShot
        alt="Portfolio Insider website built by Techstacks"
        className="shadow-sm"
        sizes="(min-width: 992px) 22vw, 50vw"
        src={portfolioImg}
      />
      <SiteShot
        alt="Agassiz All Storage website built by Techstacks"
        className="shadow-sm"
        sizes="(min-width: 992px) 22vw, 50vw"
        src={agassizImg}
      />
      {featured ? (
        <figure className="col-span-2 rounded-xl bg-ink p-5 text-ink-foreground">
          <blockquote className="text-sm leading-relaxed lg:text-base">
            &ldquo;One of the best agencies we&apos;ve ever worked with.&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-xs text-ink-foreground/70">
            {featured.name}, {featured.from}
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <Main>
      <Section className="grid items-center gap-12 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col gap-6" data-aos="fade-up">
          <Eyebrow>Your technology partner</Eyebrow>
          <H1>Technology your business can rely on, from launch to scale</H1>
          <Subheading>
            Techstacks designs, builds, secures, and supports the websites, web
            applications, and automation that win customers and keep your
            operations moving. You run the business. We take care of the
            technology behind it.
          </Subheading>
          <div className="mt-2 flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href={NavRoutes.Contact}>
                Talk to our team
                <ArrowRight aria-hidden className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={NavRoutes.Services}>See how we help</Link>
            </Button>
          </div>
          <CheckList
            className="mt-2 text-sm text-muted-foreground"
            items={HERO_ASSURANCES}
          />
        </div>
        <HeroShowcase />
      </Section>

      <div className="w-full border-y bg-surface">
        <Section className="py-10">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            Trusted by businesses in fintech, media, logistics, retail, and
            beyond
          </p>
          <SocialProof />
        </Section>
      </div>

      <Band>
        <SectionHeader
          className="mb-10 lg:mb-14"
          description="Start with the outcome you need. We bring the design, engineering, and support to get you there."
          eyebrow="Solutions"
          title="What does your business need next?"
        />
        <SolutionTabs />
      </Band>

      <Band tone="ink">
        <SectionHeader
          className="mb-10 lg:mb-14"
          description="Good code is the minimum. What clients stay for is a partner who makes the technology side of the business easier to run."
          eyebrow="The Techstacks difference"
          inverse
          title="The value goes beyond the build"
        />
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUE_POINTS.map(({ description, icon: Icon, title }) => (
            <li className="flex flex-col gap-3" data-aos="fade-up" key={title}>
              <Icon aria-hidden className="h-7 w-7 text-mint" />
              <H3 className="text-lg lg:text-xl">{title}</H3>
              <p className="leading-relaxed text-ink-foreground/75">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <SectionHeader
          className="mb-10 lg:mb-14"
          eyebrow="Client results"
          title="What our clients say it is like to work with us"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div data-aos="fade-up" key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Band>

      <Band tone="surface">
        <SectionHeader
          className="mb-10 lg:mb-14"
          description="Every stage gives you something concrete, so you always know where your investment stands."
          eyebrow="How we work"
          title="A clear path from idea to results"
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map(({ benefit, description, title }, index) => (
            <li
              className="flex flex-col gap-3 rounded-xl border bg-card p-5"
              data-aos="fade-up"
              key={title}
            >
              <span className="font-display text-sm font-bold text-primary-static">
                Step {index + 1}
              </span>
              <H3 className="text-lg lg:text-xl">{title}</H3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <p className="border-t pt-3 text-sm font-semibold">{benefit}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band>
        <SectionHeader
          className="mb-10 lg:mb-14"
          eyebrow="Trust"
          title="A partner you can put in front of your stakeholders"
        />
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map(({ description, icon: Icon, title }) => (
            <li className="flex gap-4" data-aos="fade-up" key={title}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <H3 className="text-base lg:text-lg">{title}</H3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Band>

      <Band className="pt-0 lg:pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            className="group rounded-xl border bg-surface p-6 transition-colors hover:border-primary-static lg:p-8"
            href={NavRoutes.Products}
          >
            <Eyebrow>Website templates</Eyebrow>
            <H3 className="mt-3">Need to launch quickly?</H3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Start from a ready-made, customizable template and get online
              sooner, at a lower upfront investment.
            </p>
            <span className="mt-4 inline-flex items-center font-semibold text-primary-static">
              Browse templates
              <ArrowRight
                aria-hidden
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
          <Link
            className="group rounded-xl border bg-surface p-6 transition-colors hover:border-primary-static lg:p-8"
            href={NavRoutes.LED}
          >
            <Eyebrow>LED displays</Eyebrow>
            <H3 className="mt-3">Still renting LED screens?</H3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Turn a recurring rental cost into an asset you own, with
              event-grade panels and local support in the Philippines.
            </p>
            <span className="mt-4 inline-flex items-center font-semibold text-primary-static">
              Explore LED solutions
              <ArrowRight
                aria-hidden
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </Band>
    </Main>
  );
}
