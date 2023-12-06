import '@wordpress/block-library/build-style/reset.css';
import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { type Metadata } from 'next';
import { Main, Section } from '@/components/default-elements';
import {
  getPostBySlug,
  processSinglePost,
} from '@/lib/blog/content/api/get-post-by-slug';
import { BlogArticle } from '@/components/blog-article';
import { AuthorCard } from '@/components/author-card';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { NavRoutes } from '@/constants/nav-routes';
import { createMetadata } from '@/utils/create-metadata';
import { type BlogItemPageProps } from './page-props';

export async function generateMetadata({
  params,
}: BlogItemPageProps): Promise<Metadata> {
  const post = await getPostBySlug({ slug: params.slug });

  if (!post) return notFound();

  return createMetadata({
    title: post.title,
    description: post.excerpt,
  });
}

export default async function BlogItemPage({ params }: BlogItemPageProps) {
  const post = await getPostBySlug({ slug: params.slug });
  if (!post) notFound();
  const { content } = await processSinglePost(post);

  return (
    <Main className="py-8">
      <Section className="relative space-y-16">
        <BreadCrumbs className="self-start">
          <BreadCrumbItem asChild className="text-foreground">
            <Link href={NavRoutes.Company.Blog}>Blogs</Link>
          </BreadCrumbItem>
          <BreadCrumbItem>{post.title}</BreadCrumbItem>
        </BreadCrumbs>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <AuthorCard
            author={post.author.node.name}
            publishDate={post.date}
            size={post.author.node.avatar.size}
            src={post.author.node.avatar.url}
          />

          <BlogArticle className="pb-16 rounded-lg shadow" data-hljs>
            <h1>{post.title}</h1>
            {content.result}
          </BlogArticle>
        </div>
      </Section>
    </Main>
  );
}
