import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { NavRoutes } from '@/constants/nav-routes';
import { GlowCard, GlowCardContent } from './glow-card';
import { Separator } from './ui/separator';
import { H2, Subheading } from './ui/typography';
import { Button } from './ui/button';

const CUSTOM_PROJECT = [
  { title: 'Pricing varies based on complexity' },
  { title: 'Flat rate' },
  { title: 'Deliverable focused' },
  { title: 'Timeline-bound' },
];

export function CustomPricing() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="w-full md:w-2/4">
        <H2>
          Can&apos;t Find the Perfect Fit? Let&apos;s Craft a Plan Exclusively
          for You
        </H2>
        <Subheading>
          If our existing plans don&apos;t match your needs, contact us for a
          custom-tailored solution designed exclusively for your requirements.
        </Subheading>
      </div>
      <div className="flex justify-center w-full md:w-2/4">
        <GlowCard className="w-96">
          <GlowCardContent className="flex flex-col w-full h-full gap-6 p-8 lg:p-10">
            <div>
              <Subheading>Custom Projects</Subheading>
              <Subheading>(Project based)</Subheading>
            </div>
            <Separator />
            <div className="flex flex-col gap-3">
              <p>Description:</p>
              {CUSTOM_PROJECT.map((data) => (
                <div className="flex items-center gap-3" key={data.title}>
                  <FaCheck />
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline">
              <Link href={NavRoutes.Contact}>Inquire now</Link>
            </Button>
          </GlowCardContent>
        </GlowCard>
      </div>
    </div>
  );
}
