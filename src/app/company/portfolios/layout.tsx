import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Our digital excellence',
});

export default function PortfoliosLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      {props.hero}
      {props.latestWorks}
      {props.learnMore}
    </Main>
  );
}
