import type { ReactNode } from 'react';
import { H1, Main, Section, Subheading } from '@/components/default-elements';

export const dynamic = 'force-dynamic';

export default function BlogLayout({
  blogs,
  blogCarousel,
}: Record<string, ReactNode>) {
  return (
    <Main className="overflow-x-clip">
      <div className="flex justify-center w-full py-8 md:py-16">
        <Section>
          <div className="space-y-8">
            <div className="space-y-4">
              <H1 className="text-center">Gain Wisdom Through Our Insights</H1>
              <Subheading className="text-center">
                Learn, Reflect, and Grow with Us
              </Subheading>
            </div>
          </div>
        </Section>
      </div>

      <Section>{blogCarousel}</Section>

      <div className="flex justify-center w-full py-8 md:py-16">{blogs}</div>
    </Main>
  );
}
