import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Faces behind the code',
});

export default function OurTeamLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-clip">
      <div>{props.teamHero}</div>
      <div>{props.ceoQuote}</div>
      <div>{props.coreTeam}</div>
      <div> {props.ourteamTestimonial}</div>
    </Main>
  );
}
