import { type ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Main, Section } from '@/components/default-elements';
import { CheckList, Eyebrow } from '@/components/marketing';
import { H1, H3, Subheading } from '@/components/ui/typography';
import { EMAIL } from '@/constants/social-media';
import { createMetadata } from '@/utils/create-metadata';

export const metadata = createMetadata({
  title: 'Talk to our team',
  description:
    'Tell us what your business needs. Techstacks will come back with a practical plan and a transparent proposal.',
});

const NEXT_STEPS = [
  'We review your goals and get back to you',
  'We talk through scope, deliverables, and timeline',
  'You receive a detailed proposal with transparent pricing',
];

interface ContactLayoutProps {
  form: ReactNode;
}

export default function ContactLayout({ form }: ContactLayoutProps) {
  return (
    <Main className="bg-surface">
      <Section className="grid gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>Contact</Eyebrow>
          <H1>Let&apos;s talk about your business</H1>
          <Subheading>
            Whether you have a detailed brief or just a problem to solve, tell
            us where you want to be and we&apos;ll help you find the practical
            way to get there.
          </Subheading>
          <div className="mt-2">
            <H3 className="mb-4 text-lg lg:text-xl">What happens next</H3>
            <CheckList items={NEXT_STEPS} />
          </div>
          <ul className="flex flex-col gap-3 border-t pt-6">
            <li>
              <a
                className="inline-flex items-center gap-3 font-medium hover:text-primary-static"
                href={`mailto:${EMAIL}`}
              >
                <Mail aria-hidden className="h-4 w-4 text-primary-static" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-3 font-medium hover:text-primary-static"
                href="tel:+639171323561"
              >
                <Phone aria-hidden className="h-4 w-4 text-primary-static" />
                0917-132-3561
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:max-w-lg lg:justify-self-end">{form}</div>
      </Section>
    </Main>
  );
}
