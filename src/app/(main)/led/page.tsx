import Link from 'next/link';
import Image from 'next/image';
import { Factory, Monitor, ShieldCheck, CreditCard } from 'lucide-react';
import { Main, Section } from '@/components/default-elements';
import { H2, H3, Subheading } from '@/components/ui/typography';
import { GlowCard, GlowCardContent } from '@/components/glow-card';
import { NavRoutes } from '@/constants/nav-routes';
import { createMetadata } from '@/utils/create-metadata';
import { LedHero } from '@/components/led-hero';
import ledBillboard from '@/assets/images/led/led-billboard.webp';
import ledMall from '@/assets/images/led/mall-led.jpg';
import ledStage from '@/assets/images/led/led-stage.webp';
import ledConference from '@/assets/images/led/conference-led.jpg';
import leadVisionLogo from '@/assets/images/led/lead-vision-squared.png';
import ledBanner from '@/assets/images/led/led-banner.webp';
import techstacksLogoBox from '@/assets/images/logo/techstacks-box-logo.jpg';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = createMetadata({
  title: 'LED Display',
  description:
    'High-impact LED display solutions for retail, events, signage, and brand experiences.',
});

// const FEATURES = [
//   'Modular LED panels (custom sizes)',
//   'High brightness for indoor & outdoor events',
//   'Stable processors & controllers',
//   'Easy assembly and transport frames',
//   'Long lifespan, serviceable components',
//   'Designed specifically for frequent setup & teardown',
// ];

const IDEAL_USE_CASE_CARDS = [
  {
    title: 'Outdoor\nBillboard',
    subtitle: 'Outdoor advertising scenario',
    image: ledBillboard,
  },
  {
    title: 'Rental and Events',
    subtitle: 'Stage & concert & events scenario',
    image: ledStage,
  },
  {
    title: 'Commercial & Retail',
    subtitle: 'High-end retail & commercial venue scenario',
    image: ledMall,
  },
  {
    title: 'Conference Room',
    subtitle: 'Enterprise & government scenario',
    image: ledConference,
  },
];

// const TRUST_ITEMS = [
//   'Pre-delivery testing',
//   'Local technical support',
//   'Spare parts availability in PH',
//   'Warranty backed by a 20-year manufacturer',
// ];

const TECHSTACKS_SOLUTION_CARDS = [
  {
    title: 'Direct manufacturer pricing',
    icon: Factory,
  },
  {
    title: 'Event-grade brightness & seamless panels',
    icon: Monitor,
  },
  {
    title: 'Ready stock in the Philippines',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible payment options available',
    icon: CreditCard,
  },
];

export default function LedPage() {
  return (
    <Main className="overflow-clip">
      <LedHero />

      <Section className="space-y-16  py-14 lg:py-20">
        <div className="mx-auto space-y-8 ">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary-static/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary-static">
              Global Partnership
            </div>
            <H2>Partnered with Lead Vision</H2>
            <div className="max-w-3xl space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Lead Vision is a professional and high-tech company which
                majorly engages in all kinds of LED Display.
              </p>
              <p>
                With 20 years of manufacturing experience, they have reached
                global industries around the world providing high quality but
                affordable LED Displays.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-auto max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            <GlowCard>
              <GlowCardContent className="flex flex-col gap-4 p-6">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    alt="Lead Vision logo"
                    className="object-contain"
                    fill
                    src={leadVisionLogo}
                  />
                </div>
                <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
                  Shenzhen Leadvision Electronics Co., Ltd.
                </p>
              </GlowCardContent>
            </GlowCard>
            <GlowCard>
              <GlowCardContent className="flex flex-col gap-4 p-6">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    alt="Techstacks logo"
                    className="object-contain"
                    fill
                    src={techstacksLogoBox}
                  />
                </div>
                <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
                  Techstacks IT Services Inc.
                </p>
              </GlowCardContent>
            </GlowCard>
          </div>
        </div>
      </Section>
      <Separator variant="horizon" />

      <div className="w-full ">
        <div className="w-full flex justify-center py-16 bg-background rounded-tr-[150px] md:rounded-tr-[250px] lg:rounded-tr-[450px]">
          <Section className="space-y-16">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <H2
                  className="text-center "
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  {' '}
                  Renting LED Screens Is Costing You More Than You Think{' '}
                </H2>
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Subheading className="max-w-3xl text-muted-foreground">
                  If you run events regularly, you already know:
                </Subheading>
                <Accordion className="w-full" collapsible type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Rental fees eat into profits
                    </AccordionTrigger>
                    <AccordionContent>
                      Frequent LED wall rentals can become costly over time,
                      especially for businesses that regularly host events.
                      Instead of building equity in an asset, you continue
                      paying recurring rental fees.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Limited availability during peak seasons
                    </AccordionTrigger>
                    <AccordionContent>
                      During holidays, festivals, election campaigns, and major
                      events, LED wall inventory may be fully booked, making it
                      difficult to secure equipment when you need it most.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      You &apos; re dependent on other suppliers
                    </AccordionTrigger>
                    <AccordionContent>
                      Relying on rental providers means your projects are
                      subject to their schedules, delivery timelines, equipment
                      quality, and support availability.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      No asset, no long-term ROI
                    </AccordionTrigger>
                    <AccordionContent>
                      Renting provides short-term access to LED walls but does
                      not create a business asset. Purchasing your own LED wall
                      can generate long-term returns through repeated use or
                      rental opportunities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="text-sm leading-7 text-muted-foreground">
                  After a few events, rentals cost more than owning your own LED
                  wall.
                </p>
              </div>

              <div>
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <Image
                    alt="LED Stage"
                    className="h-full w-full rounded-lg object-cover"
                    src={ledStage}
                  />
                </div>
              </div>
            </div>
            <Separator variant="horizon" />

            <div className="grid gap-12 items-center justify center">
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <H2
                      className="text-center "
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      Why Smart Event Businesses Buy from Techstacks
                    </H2>
                    <Subheading
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      We provide premium, event-grade LED solutions with local
                      support and flexible payment options — so you can own your
                      LED screens without the hassle.
                    </Subheading>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4">
                  {TECHSTACKS_SOLUTION_CARDS.map(
                    ({ title, icon: Icon }, index) => (
                      <GlowCard
                        className="h-full min-h-[280px] w-full"
                        data-aos="fade-up"
                        data-aos-delay={200 + index * 100}
                        key={title}
                      >
                        <GlowCardContent className="p-6 h-full flex flex-col">
                          <div className="flex flex-col justify-between h-full gap-6">
                            <div className="space-y-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/80 text-primary-static">
                                <Icon className="h-6 w-6" />
                              </div>
                              <H3 className="leading-tight text-slate-900 dark:text-slate-100">
                                {title}
                              </H3>
                            </div>
                            <div className="h-1 w-20 rounded-full bg-primary-static" />
                          </div>
                        </GlowCardContent>
                      </GlowCard>
                    ),
                  )}
                </div>
              </div>
            </div>
            <Separator variant="horizon" />

            <div>
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <H2
                    className="text-center "
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Ideal Use Cases
                  </H2>
                  <Subheading
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    Perfect for any scenario where impactful visuals matter —
                    from outdoor billboards to retail displays to event stages.
                  </Subheading>
                </div>
              </div>
              <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {IDEAL_USE_CASE_CARDS.map(
                  ({ title, subtitle, image }, index) => (
                    <GlowCard
                      className="flex h-full flex-col overflow-hidden lg:min-h-[420px]"
                      data-aos="fade-up"
                      data-aos-delay={200 + index * 100}
                      key={title}
                    >
                      <GlowCardContent className="flex flex-1 flex-col overflow-hidden p-0 text-center">
                        <div className="relative h-36 w-full shrink-0 sm:h-48">
                          <Image
                            alt={title}
                            className="object-cover"
                            fill
                            src={image}
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-4 sm:p-6">
                          <H3 className="whitespace-pre-line text-xl leading-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
                            {title}
                          </H3>
                          <p className="mt-3 text-sm text-muted-foreground sm:mt-5">
                            {subtitle}
                          </p>
                        </div>
                      </GlowCardContent>
                    </GlowCard>
                  ),
                )}
              </div>
            </div>
            <Separator variant="horizon" />

            {/* <div className="grid gap-12 items-center"> */}
            {/* <div className="space-y-6">
                  <div className="flex flex-col items-center gap-8">
                      <div className="flex flex-col items-center gap-4">
                        <H2
                          className="text-center "
                          data-aos="fade-up"
                          data-aos-delay={100}>
                          Why Ownership Wins
                        </H2>
                          <Subheading
                          className="text-center"
                          data-aos="fade-up"
                          data-aos-delay={200}>
                          Event companies that switch from renting to owning see a significant boost in profitability and operational efficiency.
                      </Subheading>
                    </div>
                 </div>
                <ul className="list-disc space-y-3 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  <li>Use your LED wall across hundreds of events</li>
                  <li>No more price increases from rental suppliers</li>
                  <li>Faster setup since your team knows the system</li>
                  <li>Asset value stays with your business</li>
                </ul>
                <p className="text-sm leading-7 text-muted-foreground">
                  Most event companies recover their LED investment within 6–12 months.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-slate-950/80">
                <H2 className="text-xl">Product Highlights</H2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {FEATURES.map((feature) => (
                    <li key={feature} className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* <div className="grid gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 text-sm font-semibold uppercase tracking-widest rounded-full bg-primary-static/10 text-primary-static">
                  Trust & Risk Reversal
                </div>
                <ul className="list-disc space-y-3 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {TRUST_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="w-full rounded-2xl overflow-hidden">
              <div className="relative h-64 w-full md:h-56 lg:h-72">
                <Image
                  alt="LED Banner"
                  className="object-cover opacity-50 "
                  fill
                  src={ledBanner}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-start gap-6 py-6 md:flex-row md:items-center md:justify-between">
                      <div className="md:pl-4 lg:pl-6">
                        <H2 className="text-white text-lg md:text-xl">
                          Turn LED Screens Into a Profit-Generating Asset
                        </H2>
                        <p className="mt-2 text-white/90">
                          Get pricing, specs and payment options today
                        </p>
                      </div>
                      <div className="w-full md:w-auto">
                        <Link
                          className="relative inline-flex h-14 w-full items-center justify-start overflow-hidden rounded border border-primary-static bg-transparent p-3 font-medium transition-all group md:w-52"
                          href={NavRoutes.LEDInquire}
                        >
                          <span className="absolute bottom-0 left-0 hidden h-48 w-48 translate-y-full -translate-x-full rotate-[-40deg] rounded bg-primary-static ease-out transition-all duration-500 md:block md:mb-9 md:ml-9 md:group-hover:mb-32 md:group-hover:ml-0 md:group-hover:translate-x-0" />
                          <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out md:group-hover:text-white">
                            Inquire Now
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Main>
  );
}
