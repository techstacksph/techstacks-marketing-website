import { Main, Section } from '@/components/default-elements';
import { H1, Subheading } from '@/components/ui/typography';
import { createMetadata } from '@/utils/create-metadata';
import Content from './content.mdx';

export const metadata = createMetadata({
  title: 'Privacy Policy',
});

export default function PrivacyPolicyPage() {
  return (
    <Main className="py-16">
      <Section className="space-y-8">
        <div className="space-y-4">
          <H1 className="text-center">Privacy Policy</H1>
          <Subheading className="text-center">
            Last updated May 19, 2023
          </Subheading>
        </div>
        <article className="mx-auto prose dark:prose-invert">
          <Content />
        </article>
      </Section>
    </Main>
  );
}
