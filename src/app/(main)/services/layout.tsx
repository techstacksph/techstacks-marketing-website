import type { ReactNode } from 'react';
import { Main } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Websites, web applications, dedicated development teams, automation, cybersecurity, and maintenance, focused on the results your business needs.',
});

export default function ServicesLayout(props: Record<string, ReactNode>) {
  return (
    <Main>
      {props.servicesHero}
      {props.coreServices}
      {props.starterGrowing}
      {props.creativeWorks}
      {props.testimonialServices}
    </Main>
  );
}
