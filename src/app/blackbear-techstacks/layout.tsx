import { type ReactNode } from 'react';
import { createMetadata } from '@/utils/create-metadata';
import BlackBearPage from './page';

export const metadata = createMetadata({
  title: 'Learn Cybersecurity',
  description: 'Do you want to secure a high-paying job?',
});

export default function BlackbearTechstacksLayout(props: {
  children: ReactNode;
}) {
  return <BlackBearPage {...props} />;
}
