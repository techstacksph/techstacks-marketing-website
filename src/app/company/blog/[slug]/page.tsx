import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Main, Section } from '@/components/default-elements';
import {
  getPostBySlug,
  processSinglePost,
} from '@/lib/blog/content/api/get-post-by-slug';
import { type BlogItemPageProps } from './page-props';

export default async function BlogItemPage({ params }: BlogItemPageProps) {
  const post = await getPostBySlug({ slug: params.slug });
  if (!post) notFound();

  const { bannerImage, content } = await processSinglePost(post);

  return (
    <Main className="py-8">
      <Section>
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center h-48 mt-6 overflow-hidden rounded-lg">
          <Image
            {...bannerImage}
            alt={`${post.title} featured image`}
            className="w-full"
          />
        </div>
      </Section>

      <Section>{content.result}</Section>
    </Main>
  );
}
