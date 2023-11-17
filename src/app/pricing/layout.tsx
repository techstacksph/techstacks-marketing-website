import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface PricingLayoutProps {
  hero: ReactNode,
  faqs: ReactNode,
}

export default function PricingLayout({ hero, faqs }: Readonly<PricingLayoutProps>) {
  return (
    <Main>
      <div className="py-16">{hero}</div>
      <div className="py-16">{faqs}</div>
    </Main>
  );
}
