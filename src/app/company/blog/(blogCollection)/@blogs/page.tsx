import { notFound } from 'next/navigation';
import { getPosts, processPostNode } from '@/lib/blog/content/api/get-posts';
import { BlogCard, HighlightedCard } from '@/components/blog-card';
import { type BlogPageProps } from '../page-props';

export default async function BlogCollectionPage({
  searchParams,
}: BlogPageProps) {
  const searchQuery = searchParams.q || '';
  const rawPosts = await getPosts({ search: searchQuery });
  const [firstPost, ...posts] = await Promise.all(
    rawPosts.map(async ({ node }) => ({
      raw: node,
      processed: await processPostNode(node),
    })),
  );

  if (!firstPost) notFound();

  return (
    <div className="grid grid-cols-3 gap-16">
      <div className="col-span-2">
        <HighlightedCard
          Description={firstPost.processed.partialContent.result}
          author={firstPost.processed.author}
          bannerImage={firstPost.processed.bannerImage}
          postDate={new Date(firstPost.raw.date)}
          slug={firstPost.raw.slug}
          title={firstPost.raw.title}
        />
      </div>
      <div className="flex flex-col gap-8">
        {posts.map(({ raw, processed }) => (
          <BlogCard
            Description={processed.partialContent.result}
            author={processed.author}
            bannerImage={processed.bannerImage}
            key={raw.slug}
            postDate={new Date(raw.date)}
            slug={raw.slug}
            title={raw.title}
          />
        ))}
      </div>
    </div>
  );
}
