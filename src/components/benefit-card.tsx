import { H3 } from './ui/typography';

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6" data-aos="fade-up">
      <H3 className="text-lg lg:text-xl">{title}</H3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export { BenefitCard };
