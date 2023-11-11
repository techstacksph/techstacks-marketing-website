import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { GlowCard, GlowCardContent } from './glow-card';

interface CoreServicesCardProps {
  index: number;
  title: string;
  description: string;
  src: StaticImageData;
}

function CoreServicesCard({
  index,
  src,
  title,
  description,
}: CoreServicesCardProps) {
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
            <h3 className="space-y-4 text-lg font-bold md:text-2xl">
              <span className="block">{title}</span>
            </h3>
            <p className="text-lg text-muted">{description}</p>
          </div>

          <Separator className="h-1 bg-primary-static" />
        </div>
      </GlowCardContent>
    </GlowCard>
  );
}

export { CoreServicesCard };
