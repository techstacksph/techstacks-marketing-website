import { Separator } from './ui/separator';
import { H3 } from './ui/typography';
import { GlowCard, GlowCardContent } from './glow-card';

interface BenefitCardProps {
  index: number;
  title: string;
  description: string;
}

function BenefitCard({ index, title, description }: BenefitCardProps) {
  return (
    <GlowCard
      data-aos={index % 2 ? 'fade-left' : 'fade-right'}
      data-aos-delay={index * 100}
    >
      <GlowCardContent className="w-full h-full pt-3 pb-4 px-7">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="space-y-4">
            <H3 className="space-y-4">
              <span className="block text-primary-static">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="block">{title}</span>
            </H3>
            <p className="text-lg text-muted">{description}</p>
          </div>

          <Separator className="h-1 bg-primary-static" />
        </div>
      </GlowCardContent>
    </GlowCard>
  );
}

export { BenefitCard };
