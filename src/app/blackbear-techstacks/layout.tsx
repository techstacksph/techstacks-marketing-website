import { type ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Learn Cybersecurity',
  description: 'Do you want to secure a high-paying job?',
});

export default function BlackbearTechstacksLayout(
  props: Record<string, ReactNode>,
) {
  return (
    <Main>
      <div className="[&&&]:mt-0">{props.blackbearHeader}</div>
      <div className="[&&&]:mt-0">{props.blackbearAcademy}</div>
      <div className="[&&&]:mt-0">{props.growYourCareer}</div>
      <div className="[&&&]:mt-0">{props.blackbearForm}</div>
    </Main>
  );
}
