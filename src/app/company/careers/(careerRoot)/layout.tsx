import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';
import { Separator } from '@/components/ui/separator';

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
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="py-8 md:py-16">{props.benefitsSection}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="py-8 md:py-16">{props.teamDinner}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="py-8 md:py-16">{props.teamInsights}</div>
      <Section role="none">
        <Separator variant="horizon" />
      </Section>
      <div className="py-8 md:py-16">{props.availablePositions}</div>
    </Main>
  );
}
