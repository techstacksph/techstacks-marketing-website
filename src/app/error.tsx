'use client';

import { RefreshCw } from 'lucide-react';
import { Main, Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';
import { H1, H2, Subheading } from '@/components/ui/typography';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Main>
      <Section className="min-h-[calc(theme(height.screen)-theme(height.16))] py-16 grid place-items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <H1 className="text-center">Something went wrong!</H1>
          <H2 className="text-center">{error.name}</H2>
          <Subheading className="text-center">{error.message}</Subheading>
          <Button className="group" onClick={reset} size="lg">
            Retry
            <RefreshCw className="ml-4 transition-transform group-hover:animate-spin" />
          </Button>
        </div>
      </Section>
    </Main>
  );
}
