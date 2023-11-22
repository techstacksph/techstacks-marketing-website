import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function TrainingsLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      <div>{props.trainingsHero}</div>
      <div className="[&&&]:mt-0">{props.traineesPlan}</div>
      <div>{props.traineesCycle}</div>
      <div>{props.traineesJourney}</div>
      <div>{props.traineesWork}</div>
      <div>{props.traineesTestimonial}</div>
      <div>{props.traineesBanner}</div>
    </Main>
  );
}
