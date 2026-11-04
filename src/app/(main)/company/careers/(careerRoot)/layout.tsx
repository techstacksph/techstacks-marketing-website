import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Careers',
  description:
    'Build your career at Techstacks, working on real products for real businesses.',
});

export default function CareersLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      {props.careerHero}
      {props.benefitsSection}
      {props.teamDinner}
      {props.teamInsights}
      {/* {props.availablePositions} */}
    </Main>
  );
}
