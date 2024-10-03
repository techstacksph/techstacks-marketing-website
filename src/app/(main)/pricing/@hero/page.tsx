import { Section } from '@/components/default-elements';
import { PRICING } from '@/constants/pricing';
import {
  PricingCard,
  PricingProvider,
  PricingSwitch,
} from '@/components/pricing-card';
import { H1, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';

export default function PricingHero() {
  return (
    <PricingProvider>
      <Section className="flex flex-col items-center gap-20">
        <BreadCrumbs
          className="self-start"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <BreadCrumbItem>Pricing</BreadCrumbItem>
        </BreadCrumbs>
        <div
          className="flex flex-col items-center gap-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <H1 className="text-center whitespace-pre-wrap">
            Your{' '}
            <span className="font-black text-primary-foreground">
              Perfect Plan
            </span>{' '}
            for
            {'\n'}Your{' '}
            <span className="font-black text-primary-foreground">
              Perfect Business
            </span>
          </H1>
          <Subheading className="text-center">
            Tailored Solutions to Fuel Your Success
          </Subheading>
        </div>

        <div data-aos="fade-up" data-aos-delay={200}>
          <PricingSwitch />
        </div>

        <div
          className="flex flex-col gap-4 overflow-visible lg:overflow-visible md:gap-0 md:flex-row lg:gap-11 md:shadow-lg lg:shadow-none [&&]:shadow-primary-static/30 md:rounded-lg lg:rounded-none"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          {PRICING.map((pricing) => (
            <PricingCard {...pricing} key={pricing.name} />
          ))}
        </div>
      </Section>
    </PricingProvider>
  );
}
