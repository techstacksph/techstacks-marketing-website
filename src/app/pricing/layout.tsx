import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function PricingLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div className="py-16">{props.hero}</div>
    </Main>
  );
}
