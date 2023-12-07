import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Trainings',
  description:
    'Elevate your web development prospects and unlock a world of opportunities',
});

export default function TrainingsLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      <div>{props.trainingsHero}</div>
      <div className="[&&&]:mt-0">{props.traineesPlan}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="[&&&]:mt-0">{props.traineesCycle}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.traineesJourney}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.traineesWork}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.traineesTestimonial}</div>
      <div>{props.traineesBanner}</div>
    </Main>
  );
}
