import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface PricingLayoutProps {
  hero: ReactNode;
  faqs: ReactNode;
  comparison: ReactNode;
  social: ReactNode;
}

export default function PricingLayout({
  hero,
  faqs,
  comparison,
  social,
}: Readonly<PricingLayoutProps>) {
  return (
    <Main>
      <div className="py-16">{hero}</div>
      <div className="py-16">{comparison}</div>
      <div className="py-16">{social}</div>
      <div className="py-16">{faqs}</div>
    </Main>
  );
}
