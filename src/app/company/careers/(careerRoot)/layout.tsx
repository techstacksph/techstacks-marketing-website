import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Elevate your career with Techstacks',
});

export default function CareersLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      <div className="flex justify-center w-full py-8 md:py-16">
        {props.careerHero}
      </div>

      <div className="py-8 md:py-16">{props.benefitsSection}</div>
      <div className="py-8 md:py-16">{props.teamDinner}</div>
      <div className="py-8 md:py-16">{props.teamInsights}</div>
      <div className="py-8 md:py-16">{props.availablePositions}</div>
    </Main>
  );
}
