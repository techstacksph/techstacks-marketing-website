import { Section } from '@/components/default-elements';
import { cn } from '@/utils/cn';
import { dmSans } from '@/lib/fonts';
import { PRICING } from '@/constants/pricing';
import {
  PricingCard,
  PricingProvider,
  PricingSwitch,
} from '@/components/pricing-card';

export default function PricingHero() {
  return (
    <PricingProvider>
      <Section className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <h1
            className={cn(
              'text-2xl font-medium [&&]:leading-normal text-center whitespace-pre-wrap md:text-5xl',
              dmSans.className,
            )}
          >
            Your{' '}
            <span className="font-black text-primary-foreground">
              Perfect Plan
            </span>{' '}
            for
            {'\n'}Your{' '}
            <span className="font-black text-primary-foreground">
              Perfect Business
            </span>
          </h1>
          <p className="text-lg font-medium text-center text-foreground/75">
            Tailored Solutions to Fuel Your Success
          </p>
        </div>

        <PricingSwitch />

        <div className="flex flex-col gap-4 overflow-visible md:overflow-hidden lg:overflow-visible md:gap-0 md:flex-row lg:gap-11 md:shadow-lg lg:shadow-none [&&]:shadow-primary-static/30 md:rounded-lg lg:rounded-none">
          {PRICING.map((pricing) => (
            <PricingCard {...pricing} key={pricing.name} />
          ))}
        </div>
      </Section>
    </PricingProvider>
  );
}
