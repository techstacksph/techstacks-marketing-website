import { Section } from '@/components/default-elements';
import { H2 } from '@/components/ui/typography';
import SocialProof from '@/components/social-proof';

export default function PricingSocialProof() {
  return (
    <Section>
      <div className="flex flex-col justify-center gap-10">
        <H2 className="text-center" data-aos="fade-up">
          Trusted by businesses like yours
        </H2>
        <SocialProof />
      </div>
    </Section>
  );
}
