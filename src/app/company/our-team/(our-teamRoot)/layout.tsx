import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function OurTeamLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-hidden">
      <div>{props.teamHero}</div>
      <div>{props.ceoQuote}</div>
      <div>{props.coreTeam}</div>
      <div> {props.ourteamGallery}</div>
      <div> {props.ourteamTestimonial}</div>
    </Main>
  );
}
