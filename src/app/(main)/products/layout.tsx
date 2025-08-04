import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface ProductsLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: 'Products',
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <Main>
      <div className="[&&&]:mt-0">{children}</div>
    </Main>
  );
}
