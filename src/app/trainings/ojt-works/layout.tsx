import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: "Our interns' projects",
  description: "Explore our interns' impressive projects",
});

export default function OjtWorksLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div>{props.ojtWorksHero}</div>
      <div>{props.teamOjt}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.ojtWebsite}</div>
    </Main>
  );
}
