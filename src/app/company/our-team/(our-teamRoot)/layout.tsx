import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';

export default function OurTeamLayout(props: Record<string, ReactNode>) {
  return (
    <Main className="overflow-hidden">
      <div className="flex justify-center w-full py-8 md:py-16 relative overflow-hidden">
        {props.ourteamHero}
      </div>
      {props.ourteamTeam}
      {props.ourteamGallery}
      {props.ourteamTestimonial}
    </Main>
  );
}
