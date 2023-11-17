import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function PortfoliosLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      {props.hero}
      {props.latestWorks}
      {props.learnMore}
    </Main>
  );
}
