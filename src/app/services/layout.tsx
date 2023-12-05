import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';

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
