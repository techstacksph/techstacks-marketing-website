'use client';

import { Fragment, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { Section } from '@/components/default-elements';
import { BlogSearchForm } from '@/components/blog-search-form';

export default function BlogCollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <Section>
      <div className="space-y-6">
        <div className="flex flex-wrap justify-center gap-4 sm:justify-between">
          <h2 className="text-4xl font-medium">Latest blog</h2>
          <BlogSearchForm />
        </div>

        <Fragment key={query}>{children}</Fragment>
      </div>
    </Section>
  );
}
