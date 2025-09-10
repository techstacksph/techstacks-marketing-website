'use client';

import { Fragment, type ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Section } from '@/components/default-elements';
import { BlogSearchForm } from '@/components/blog-search-form';
import { H2 } from '@/components/ui/typography';

function BlogContent({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between">
        <H2>Latest blog</H2>
        <BlogSearchForm />
      </div>
      <Fragment key={query}>{children}</Fragment>
    </div>
  );
}

export default function BlogCollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Section>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent>{children}</BlogContent>
      </Suspense>
    </Section>
  );
}
