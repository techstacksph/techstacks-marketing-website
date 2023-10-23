import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function CareersLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-x-hidden">
      <div className="flex justify-center w-full py-8 md:py-16">
        {props.careerHero}
      </div>

      <div className="py-8 md:py-16">{props.benefitsSection}</div>
      <div className="py-8 md:py-16">{props.teamDinner}</div>
      <div className="py-8 md:py-16">{props.teamInsights}</div>
    </Main>
  );
}
