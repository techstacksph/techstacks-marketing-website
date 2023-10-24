import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface PricingLayoutProps {
  hero: ReactNode;
}

export default function PricingLayout({ hero }: PricingLayoutProps) {
  return (
    <Main>
      <div className="py-16">{hero}</div>
    </Main>
  );
}
