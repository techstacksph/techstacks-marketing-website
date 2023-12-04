import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';

export default function TrainingsLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      <div>{props.trainingsHero}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="[&&&]:mt-0">{props.traineesPlan}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.traineesCycle}</div>
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
