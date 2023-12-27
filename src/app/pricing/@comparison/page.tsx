import { ComparePricing } from '@/components/compare-pricing';
import { CustomPricing } from '@/components/custom-pricing';
import { Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';
import { H2, Subheading } from '@/components/ui/typography';

export default function PriceComparison() {
  return (
    <Section>
      <div className="flex flex-col gap-24">
        <Section role="none">
          <Separator variant="horizon" />
        </Section>
        <div className="flex flex-col gap-5">
          <H2
            className="font-extrabold"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Choose the Perfect Plan for Your Needs
          </H2>
          <Subheading data-aos="fade-up" data-aos-delay={200}>
            Explore our feature-rich plans to find the one that suits you best
          </Subheading>
        </div>
        <div data-aos="fade-up" data-aos-delay={300}>
          <ComparePricing />
        </div>

        <Section role="none">
          <Separator variant="horizon" />
        </Section>
        <div data-aos="fade-up" data-aos-delay={400}>
          <CustomPricing />
        </div>
        <Section role="none">
          <Separator variant="horizon" />
        </Section>
      </div>
    </Section>
  );
}
