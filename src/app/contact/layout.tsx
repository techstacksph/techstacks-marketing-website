import { type ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { H1, Subheading } from '@/components/ui/typography';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Inquire',
});

interface ContactLayoutProps {
  form: ReactNode;
}

export default function ContactLayout({ form }: ContactLayoutProps) {
  return (
    <Main>
      <Section className="min-h-[calc(theme(height.screen)-theme(height.16))] grid md:grid-cols-2 place-items-center gap-20 py-16">
        <div className="space-y-4">
          <H1 asChild className="text-center">
            <h1>Get in touch</h1>
          </H1>
          <Subheading className="text-center">
            Reach out to us now and let&apos;s explore how we can meet your
            requirements and support your online growth.
          </Subheading>
        </div>
        <div className="max-w-md">{form}</div>
      </Section>
    </Main>
  );
}
