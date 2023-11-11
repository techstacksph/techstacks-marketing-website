import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { GlowCard, GlowCardContent } from './glow-card';
import { H3 } from './ui/typography';

interface CoreServicesCardProps {
  index: number;
  title: string;
  src: StaticImageData;
}

function CoreServicesCard({ index, src, title }: CoreServicesCardProps) {
  return (
    <GlowCard
      className="h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <GlowCardContent className="w-full h-full p-8 lg:p-10">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="space-y-4">
            <div className="w-20 h-10">
              <Image alt={`${title} icon`} src={src} />
            </div>
            <H3>{title}</H3>
          </div>

          <Separator className="h-1 bg-primary-static" />
        </div>
      </GlowCardContent>
    </GlowCard>
  );
}

export { CoreServicesCard };
