import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'About us',
  description:
    'Techstacks IT Services Inc. helps local and global businesses grow with dependable websites, software, automation, and support.',
});

export default function AboutLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      {props.hero}
      {props.statements}
      {props.coreValues}
      {props.serviceTools}
      {props.ourTeam}
    </Main>
  );
}
