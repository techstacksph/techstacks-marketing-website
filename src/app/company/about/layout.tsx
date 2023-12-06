import { type ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { Separator } from '@/components/ui/separator';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'About us',
  description: 'Your Trusted Partner in I.T Services Excellence',
});

export default function AboutLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      <div> {props.hero}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div> {props.partners}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div> {props.statements}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div> {props.coreValues}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div> {props.serviceTools}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div> {props.ourTeam}</div>
    </Main>
  );
}
