import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Our team',
  description:
    'Meet the leaders, developers, and specialists behind Techstacks IT Services Inc.',
});

export default function OurTeamLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      {props.teamHero}
      {props.coreTeam}
      {props.ourteamTestimonial}
      {props.ceoQuote}
    </Main>
  );
}
