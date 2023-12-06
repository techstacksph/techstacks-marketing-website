import { notFound } from 'next/navigation';
import {
  getPostBySlug,
  processSinglePost,
} from '@/lib/blog/content/api/get-post-by-slug';
import { type BlogItemPageProps } from '../page-props';

export async function GET(req: Request, { params }: BlogItemPageProps) {
  const post = await getPostBySlug({ slug: params.slug });
  if (!post) return notFound();
  const { bannerImage } = await processSinglePost(post);

  return Response.json({ title: post.title, ...bannerImage });
}
