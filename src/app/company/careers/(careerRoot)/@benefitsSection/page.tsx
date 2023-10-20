import Image from 'next/image';
import { careerTeam } from '@/assets/images';
import { BenefitCard } from '@/components/benefit-card';
import { Section } from '@/components/default-elements';
import { TechstacksLogo } from '@/components/icons/techstacks-logo';
import { poppins } from '@/lib/fonts';
import { cn } from '@/utils/cn';

const BENEFITS = [
  {
    title: 'We are Team',
    description:
      'We are one. We are a Team. Everyone is involved and nobody is left behind.',
  },
  {
    title: 'Health & Wellness',
    description:
      'Experience a range of health and wellness perks to support your well-being and work-life balance',
  },
  {
    title: 'We are Modern',
    description:
      'We work on cutting edge technology to develop and grow as a professional.',
  },
  {
    title: 'Accountability',
    description:
      "We're committed to transparency and honesty, earning the trust of our customers and partners",
  },
  {
    title: 'Flexibility',
    description:
      'Choose your work location, and have the opportunity to meet up with your colleagues in a fresh setting',
  },
  {
    title: 'Growth',
    description:
      'Nurture professional growth as you embark on a journey with us, discovering new opportunities',
  },
] as const;

export default function BenefitsSection() {
  return (
    <Section>
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="w-full max-w-md">
          <div className="space-y-2">
            <h2
              className="text-2xl font-bold [&&]:leading-tight whitespace-pre-wrap md:text-5xl md:text-left text-center"
              data-aos="fade-up"
            >
              <span className="text-primary-static">Perks & benefits</span> of
              working at{'\n'}
              <span className={cn('text-primary-static', poppins.className)}>
                <TechstacksLogo className="inline" />{' '}
                <span className="tracking-normal">Techstacks</span>
              </span>
            </h2>
            <p
              className="text-base text-center md:text-lg text-muted md:text-left"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We provides benefits to boost productivity, support personal and
              professional growth.
            </p>

            <Image
              alt="Career team"
              data-aos="fade-up"
              data-aos-delay={200}
              src={careerTeam}
            />
          </div>
        </div>
        <div className="grid w-full lg:grid-rows-3 lg:grid-cols-2 gap-x-6 gap-y-10">
          {BENEFITS.map((benefit, i) => (
            <BenefitCard index={i} key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </Section>
  );
}
