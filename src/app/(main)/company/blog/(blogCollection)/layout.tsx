import type { ReactNode } from 'react';
import { Main, Section } from '@/components/default-elements';
import { H1, Subheading } from '@/components/ui/typography';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { createMetadata } from '@/utils/create-metadata';

export const revalidate = 3600;

export const metadata = createMetadata({
  title: 'Blogs',
  description: 'Learn, Reflect, and Grow with Us',
});

export default function BlogLayout({
  blogs,
  blogCarousel,
}: Record<string, ReactNode>) {
  return (
    <Main className="overflow-x-clip">
      <div className="flex justify-center w-full py-8 md:py-16">
        <Section>
          <div className="space-y-8">
            <BreadCrumbs>
              <BreadCrumbItem>Blogs</BreadCrumbItem>
            </BreadCrumbs>
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
