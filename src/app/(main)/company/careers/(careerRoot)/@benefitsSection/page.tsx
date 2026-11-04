import { BenefitCard } from '@/components/benefit-card';
import { Band, SectionHeader } from '@/components/marketing';

const BENEFITS = [
  {
    title: 'One team',
    description:
      'Everyone is involved and nobody is left behind. We succeed together.',
  },
  {
    title: 'Good balance',
    description:
      "We value everyone's time, and we support a healthy work-life balance.",
  },
  {
    title: 'Modern work',
    description:
      'Grow as a professional by working with current, in-demand technology.',
  },
  {
    title: 'Accountability',
    description:
      'We are committed to transparency and honesty, earning the trust of our customers and partners.',
  },
  {
    title: 'Flexibility',
    description:
      'Choose your work location, with the chance to meet up with colleagues in a fresh setting.',
  },
  {
    title: 'Growth',
    description:
      'Build your career with us and discover new opportunities as you take on more.',
  },
] as const;

export default function BenefitsSection() {
  return (
    <Band>
      <SectionHeader
        className="mb-10 lg:mb-14"
        description="If you enjoy working with motivated peers and solving challenging problems on the web, we'd love to hear from you."
        eyebrow="Why join us"
        title="A place to do your best work"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </Band>
  );
}
