import Image from 'next/image';
import { Main, Section } from '@/components/default-elements';
import { createMetadata } from '@/utils/create-metadata';
import { PrivacyPolicyHero } from './privacy-policy-hero';
import Content from './content.mdx';

export const metadata = createMetadata({
  title: 'Privacy Notice',
  description:
    'Learn how Techstacks IT Services Inc. collects, uses, shares, and protects personal data.',
});

export default function PrivacyPolicyPage() {
  return (
    <Main>
      <PrivacyPolicyHero />
      <Section className="py-16 ">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <div
            className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="prose prose-slate dark:prose-invert">
              <p>
                This privacy notice for Techstacks IT Services Inc. describes
                how and why we collect, store, use, and share your information
                when you use our services.
              </p>
              <p>
                It applies to website visitors, clients, prospective clients,
                training participants, job applicants, interns, vendors,
                partners, and other individuals whose personal data we process.
              </p>
            </div>
            <div
              className="mx-auto w-full max-w-xs"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <Image
                alt="Techstacks data protection officer seal"
                className="aspect-square w-full rounded-xl object-contain"
                height={400}
                src="/images/techstacks-dpo-seal.png"
                width={400}
              />
            </div>
          </div>
          <article className="w-full max-w-none prose prose-slate dark:prose-invert">
            <Content />
          </article>
        </div>
      </Section>
    </Main>
  );
}
