import { notFound } from 'next/navigation';
import Link from 'next/link';
import { type Metadata } from 'next';
import { format } from 'date-fns';
import { Main, Section } from '@/components/default-elements';
import { getPostBySlug } from '@/lib/blog/content/api/get-post-by-slug';
import { BlogArticle } from '@/components/blog-article';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { NavRoutes } from '@/constants/nav-routes';
import { createMetadata } from '@/utils/create-metadata';
import { htmlStrToReact } from '@/lib/parser';
import { Subheading } from '@/components/ui/typography';
import { createExcerpt } from '@/utils/create-excerpt';
import { type BlogItemPageProps } from './page-props';

export async function generateMetadata({
  params,
}: BlogItemPageProps): Promise<Metadata> {
  const { blog } = await getPostBySlug({ slug: params.slug });

  if (!blog) return notFound();

  return createMetadata({
    title: blog.title,
    description: createExcerpt(blog.content),
  });
}

export default async function BlogItemPage({ params }: BlogItemPageProps) {
  const { blog: post } = await getPostBySlug({ slug: params.slug });
  if (!post) notFound();

  const postContent = await htmlStrToReact(post.content);

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
          <BlogArticle className="pb-16 rounded-lg shadow" data-hljs>
            <h1>{post.title}</h1>
            <Subheading className="italic">
              Posted at {format(new Date(post.createdAt), 'MMM. d, yyyy')}
            </Subheading>
            {postContent.result}
          </BlogArticle>
        </div>
      </Section>
    </Main>
  );
}
