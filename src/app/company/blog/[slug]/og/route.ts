import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog/content/api/get-post-by-slug';
import { type BlogItemPageProps } from '../page-props';

export async function GET(req: Request, { params }: BlogItemPageProps) {
  const { blog } = await getPostBySlug({ slug: params.slug });
  if (!blog) return notFound();

  return Response.json({
    title: blog.title,
    src: blog.featuredImage.url,
    height: blog.featuredImage.height,
    width: blog.featuredImage.width,
  });
}
