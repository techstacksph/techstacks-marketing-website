import Image from 'next/image';
import { Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';
import { borderAnimateVariants } from '@/utils/border-animate';
import TraineesPlan from '@/components/trainees-plan';
import TraineesCycle from '@/components/trainees-cycle';
import { ojtHero } from '@/assets/images';

export default function Trainings() {
  return (
    <>
      <Section className="py-10">
        <div className="w-full">
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-start gap-6">
              <h3 className="text-2xl font-semibold md:text-5xl md:leading-tight md:tracking-wide font-dm-sans">
                Elevate your web development prospects and unlock a world of
                opportunities
              </h3>
              <p className="text-base text-muted [&>span]:text-primary-static md:text-lg ">
                We believe that the OJT Program is not just a learning
                experience, it&apos;s also a chance for you to{' '}
                <span>discover your passion and purpose</span>
              </p>
              <Button className={borderAnimateVariants()}>Inquire now</Button>
            </div>
            <div className="flex justify-center w-fulll ">
              <Image alt="Ojt hero image" src={ojtHero} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <TraineesPlan />
      </Section>

      <Section>
        <TraineesCycle />
      </Section>
    </>
  );
}
