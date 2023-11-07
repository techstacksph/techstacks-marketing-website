import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function TrainingsLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div>{props.trainingsHero}</div>
      <div>{props.traineesPlan}</div>
      <div>{props.traineesCycle}</div>
    </Main>
  );
}
