import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { SvgFaq } from '@/components/icons/faq-svg';
import { H2, Subheading } from '@/components/ui/typography';
import { PricingAccordion } from '@/components/pricing-accordion';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';
import { Separator } from '@/components/ui/separator';

export default function FaqsSection() {
  return (
    <Section className="flex flex-col gap-20">
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="grid items-start justify-between gap-4 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start gap-8 lg:gap-11">
          <div
            className="flex flex-col items-start justify-start"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <Subheading>FAQ</Subheading>
            <H2>Frequently Asked Questions</H2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-evenly">
              <PricingAccordion />
            </div>
          </div>
        </div>
        <div
          className="w-full flex items-center justify-center lg:justify-end lg:top-24 lg:sticky lg:max-w-[600px]"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <SvgFaq className="w-full max-w-[350px] h-[358px] lg:h-[428px] lg:max-w-[800px] " />
        </div>
      </div>
      <div className="py-28 flex flex-col justify-center gap-6 items-center">
        <H2 data-aos="fade-up" data-aos-delay={200}>
          Still have a questions?
        </H2>
        <Subheading data-aos="fade-up" data-aos-delay={300}>
          Get in Touch for Answers and Assistance
        </Subheading>
        <Button
          asChild
          className="w-36"
          data-aos="fade-up"
          data-aos-delay={400}
          variant="outline"
        >
          <Link href={NavRoutes.Contact}>Contact Us</Link>
        </Button>
      </div>
    </Section>
  );
}
