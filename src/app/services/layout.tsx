import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function ServicesLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div>{props.servicesHero}</div>
      <div>{props.coreServices}</div>
    </Main>
  );
}
