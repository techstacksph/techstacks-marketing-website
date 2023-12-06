import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'What do we offer',
  description: 'Unlock Your Digital Potential with Expert Web Development',
});

export default function ServicesLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div>{props.servicesHero}</div>
      <div className="[&&&]:mt-0">{props.starterGrowing}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div>{props.coreServices}</div>
      <div className="[&&&]:mt-0">{props.creativeWorks}</div>
      <div className="[&&&]:mt-0">{props.testimonialServices}</div>
    </Main>
  );
}
