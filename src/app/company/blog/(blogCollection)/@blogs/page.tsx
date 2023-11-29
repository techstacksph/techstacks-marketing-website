import { notFound } from 'next/navigation';
import { getPosts, processPostNode } from '@/lib/blog/content/api/get-posts';
import { BlogCard, HighlightedCard } from '@/components/blog-card';
import { PaginationButtons } from '@/components/blog-pagination';
import { H3 } from '@/components/ui/typography';
import { type BlogPageProps } from '../page-props';

const LIMIT = 6 as const;

export default async function BlogCollectionPage({
  searchParams,
}: BlogPageProps) {
  const searchQuery = searchParams.q || '';
  const routePage = searchParams.page;
  const currentPage = routePage ? parseInt(routePage) : 1;

  const { info, posts: rawPosts } = await getPosts({
    search: searchQuery,
    size: LIMIT,
    offset: LIMIT * (currentPage - 1),
  });

  const [firstPost, ...posts] = await Promise.all(
    rawPosts.map(async ({ node }) => ({
      raw: node,
      processed: await processPostNode(node),
    })),
  );

  if (!firstPost) notFound();

  const pageInfo = info.offsetPagination;
  const next = pageInfo.hasMore ? currentPage + 1 : pageInfo.hasMore;
  const prev = pageInfo.hasPrevious ? currentPage - 1 : pageInfo.hasPrevious;

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
      <div className="md:col-span-2">
        <HighlightedCard
          Description={firstPost.processed.partialContent.result}
          author={firstPost.processed.author}
          bannerImage={firstPost.processed.bannerImage}
          postDate={new Date(firstPost.raw.date)}
          slug={firstPost.raw.slug}
          title={firstPost.raw.title}
        />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-8">
          {posts.length ? (
            posts.map(({ raw, processed }) => (
              <BlogCard
                Description={processed.partialContent.result}
                author={processed.author}
                bannerImage={processed.bannerImage}
                key={raw.slug}
                postDate={new Date(raw.date)}
                slug={raw.slug}
                title={raw.title}
              />
            ))
          ) : (
            <H3 className="italic text-center text-muted">
              You have seen all available blog posts
            </H3>
          )}
        </div>

        <PaginationButtons
          current={currentPage}
          next={next}
          prev={prev}
          total={pageInfo.total}
        />
      </div>
    </div>
  );
}
