import { H2, Subheading } from '@/components/ui/typography';
import { Section } from '@/components/default-elements';
import { LatestWorksCarousel } from '@/components/latest-works-carousel';

export default function LatestWorksSection() {
  return (
    <Section>
      <div>
        <Subheading>Works</Subheading>
        <H2>
          Find our <span className="text-primary-static">latest works</span>
        </H2>
        <Subheading>The awesome people who makes all this possible</Subheading>
      </div>
      <div className="h-[80vh] max-w-5xl w-full mx-auto">
        <LatestWorksCarousel />
      </div>
    </Section>
  );
}
