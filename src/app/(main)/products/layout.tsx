import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

interface ProductsLayoutProps {
  children: ReactNode;
}
export const metadata = createMetadata({
  title: 'Website templates',
  description:
    'Launch a professional website faster with ready-made, customizable templates tailored to your brand by the Techstacks team.',
});

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <Main>
      <div className="[&&&]:mt-0">{children}</div>
    </Main>
  );
}
