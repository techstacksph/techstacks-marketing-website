import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { SvgFaq } from '@/components/icons/faq-svg';
import { H2, Subheading } from '@/components/ui/typography';
import { PricingAccordion } from '@/components/pricing-accordion';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export default function FaqsSection() {
  return (
    <Section>
      <div className="grid items-start justify-between gap-4 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start gap-8 lg:gap-11">
          <div className="flex flex-col items-start justify-start">
            <Subheading>FAQ</Subheading>
            <H2>Frequently Asked Questions</H2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-evenly">
              <PricingAccordion />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end lg:top-24 lg:sticky lg:max-w-[600px]">
          <SvgFaq className="w-full max-w-[350px] h-[358px] lg:h-[428px] lg:max-w-[800px] " />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-28">
        <H2>Still have a questions?</H2>
        <Subheading>Get in Touch for Answers and Assistance</Subheading>
        <Button asChild className="w-36" variant="outline">
          <Link href={NavRoutes.Contact}>Contact Us</Link>
        </Button>
      </div>
    </Section>
  );
}
