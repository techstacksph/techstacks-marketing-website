import { ComparePricing } from '@/components/compare-pricing';
import { CustomPricing } from '@/components/custom-pricing';
import { Section, Subheading } from '@/components/default-elements';
import { H2 } from '@/components/ui/typography';

export default function PriceComparison() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <H2 className="font-extrabold">
            Choose the Perfect Plan for Your Needs
          </H2>
          <Subheading>
            Explore our feature-rich plans to find the one that suits you best
          </Subheading>
        </div>
        <ComparePricing />
        <CustomPricing />
      </div>
    </Section>
  );
}
