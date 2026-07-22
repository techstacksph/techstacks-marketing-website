import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';

interface LedLayoutProps {
  children: ReactNode;
}

export default function LedLayout({ children }: LedLayoutProps) {
  return (
    <Main>
      <div className="[&&&]:mt-0">{children}</div>
    </Main>
  );
}
