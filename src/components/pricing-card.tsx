'use client';

import { Check } from 'lucide-react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useId, useState } from 'react';
import Link from 'next/link';
import type { Pricing } from '@/constants/pricing';
import { cn } from '@/utils/cn';
import { toUSD } from '@/utils/currency-converter';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { H3, H4, Subheading } from './ui/typography';

const ONE_YEAR = 12;

interface PricingCtx {
  isYearly: boolean;
  setIsYearly: Dispatch<SetStateAction<boolean>>;
}
const pricingCtx = createContext<PricingCtx | null>(null);
const usePricing = () => {
  const ctx = useContext(pricingCtx);
  if (!ctx) throw new Error('Not within the pricing context');
  return ctx;
};

export function PricingProvider({ children }: PropsWithChildren) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <pricingCtx.Provider value={{ isYearly, setIsYearly }}>
      {children}
    </pricingCtx.Provider>
  );
}

export function PricingSwitch() {
  const id = useId();
  const ctx = usePricing();

  return (
    <div className="flex items-center gap-6">
      <label
        className={cn(
          'text-xl font-bold tracking-wider transition-colors',
          ctx.isYearly && 'text-foreground/50',
        )}
        htmlFor={id}
      >
        Monthly
      </label>
      <Switch
        defaultChecked={ctx.isYearly}
        id={id}
        onCheckedChange={ctx.setIsYearly}
      />
      <label
        className={cn(
          'text-xl font-bold tracking-wider transition-colors',
          !ctx.isYearly && 'text-foreground/50',
        )}
        htmlFor={id}
      >
        Yearly
      </label>
    </div>
  );
}

export function PricingCard(pricing: Pricing) {
  const { isYearly } = usePricing();

  const price = isYearly
    ? pricing.pricePerMonth * ONE_YEAR
    : pricing.pricePerMonth;

  return (
    <div
      className={cn(
        'w-full lg:w-1/3 rounded-lg md:rounded-none lg:rounded-lg shadow-lg md:shadow-none lg:shadow-lg bg-background [&&]:shadow-primary-static/30',
        pricing.focus && 'lg:scale-110',
      )}
      key={pricing.name}
    >
      <div className="h-full px-5 py-5 md:py-14">
        <div className="flex flex-col justify-between h-full gap-10">
          <div className="flex flex-col gap-4">
            <H3 className="text-primary-static">{pricing.name}</H3>
            <H4>
              {toUSD(price)}/{isYearly ? 'yr.' : 'mo.'}
            </H4>
            <Subheading>{pricing.description}</Subheading>
          </div>
          <ul className="flex flex-col gap-2">
            {pricing.features.map((feat) => (
              <li className="flex items-center gap-2" key={feat}>
                <span className="inline-grid p-0.5 text-sm border-2 rounded-full aspect-square border-primary-static place-items-center">
                  <Check className="inline" height="1em" width="1em" />{' '}
                </span>
                <span className="leading-none">{feat}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="w-full h-16 text-xl bg-primary-static hover:bg-primary-static/75 text-foreground"
          >
            <Link href={NavRoutes.Contact}>Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
