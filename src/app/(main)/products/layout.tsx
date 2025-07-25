import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface ProductsLayoutProps {
  hero: ReactNode;
  templates: ReactNode;
}
export const metadata = {
  title: 'Products',
};

export default function ProductsLayout({
  hero,
  templates,
}: ProductsLayoutProps) {
  return (
    <Main>
      <div>{hero}</div>
      <div className="[&&&]:mt-0">{templates}</div>
    </Main>
  );
}
