import Image from 'next/image';
import { careerTeam } from '@/assets/images';
import { Band, Eyebrow } from '@/components/marketing';
import { H2, Subheading } from '@/components/ui/typography';
import { values } from '@/constants/values';
import { cn } from '@/utils/cn';
import { isOdd } from '@/utils/is-odd';

export default function StatementsSection() {
  return (
    <Band>
      <div className="flex flex-col gap-16 lg:gap-24">
        {values.map((value, index) =>
          value.image ? (
            <div
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              data-aos="fade-up"
              key={value.title}
            >
              <div
                className={cn(
                  'flex flex-col gap-4',
                  isOdd(index) && 'lg:order-last',
                )}
              >
                <Eyebrow>{value.title}</Eyebrow>
                <H2>{value.heading}</H2>
                <Subheading>{value.description}</Subheading>
              </div>
              <Image
                alt={`${value.title} at Techstacks`}
                className={cn(
                  'w-full',
                  value.image === careerTeam
                    ? 'mx-auto max-w-md'
                    : 'rounded-2xl border',
                )}
                sizes="(min-width: 992px) 50vw, 100vw"
                src={value.image}
              />
            </div>
          ) : (
            <div
              className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl bg-ink p-8 text-center text-ink-foreground lg:p-14"
              data-aos="fade-up"
              key={value.title}
            >
              <Eyebrow className="text-mint">{value.title}</Eyebrow>
              <H2>{value.heading}</H2>
              <Subheading className="text-ink-foreground/75">
                {value.description}
              </Subheading>
            </div>
          ),
        )}
      </div>
    </Band>
  );
}
