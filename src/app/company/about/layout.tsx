import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function AboutLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      {props.hero}
      {props.partners}
      {props.statements}
      {props.coreValues}
      {props.serviceTools}
      {props.ourTeam}
    </Main>
  );
}
