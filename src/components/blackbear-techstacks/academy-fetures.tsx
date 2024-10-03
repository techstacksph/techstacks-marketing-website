import Image from 'next/image';
import { blackbearLogo } from '@/assets/images';
import { features } from '@/constants/blackbear-constants/academy-features';
import { cn } from '@/utils/cn';
import { Subheading } from '../ui/typography';

export function AcademyFeatures() {
  return (
    <div className=" flex justify-center py-10 w-full">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-10 justify-center">
          {features.map((feat, index) => (
            <div className="h-full" key={feat.id}>
              <div
                className={cn(
                  'flex flex-col gap-10 p-4 bg-gradient-to-b from-slate-50 from-70% to-orange-400',
                  index % 2 === 0 && 'h-full',
                )}
              >
                <div className="flex justify-center">
                  <Image
                    alt={feat.title}
                    className="w-24 h-24"
                    src={feat.image}
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <Subheading className="text-center font-bold text-background text-2xl">
                    {feat.title}
                  </Subheading>
                  <div className="p-4">
                    {feat.feat.map((f, idx) => (
                      <ul className="list-disc" key={idx}>
                        <li className="text-background">{f}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            alt="Black Bear Logo"
            className="h-20 w-auto mt-4"
            src={blackbearLogo}
          />
        </div>
      </div>
    </div>
  );
}
