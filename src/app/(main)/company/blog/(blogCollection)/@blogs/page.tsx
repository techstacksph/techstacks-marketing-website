import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/blog/content/api/get-posts';
import { BlogCard, HighlightedCard } from '@/components/blog-card';
import { PaginationButtons } from '@/components/blog-pagination';
import { H3 } from '@/components/ui/typography';
import { createExcerpt } from '@/utils/create-excerpt';
import { type BlogPageProps } from '../page-props';

const LIMIT = 3 as const;

export default async function BlogCollectionPage({
  searchParams,
}: BlogPageProps) {
  const searchQuery = searchParams.q || '';
  const routePage = searchParams.page;
  const currentPage = routePage ? parseInt(routePage) : 1;

  const { allBlogs, meta } = await getPosts({
    search: searchQuery,
    size: LIMIT,
    offset: LIMIT * (currentPage - 1),
  });

  const [firstPost, ...posts] = allBlogs;

  if (!firstPost) notFound();

  const total = Math.ceil(meta.totalBlogs / LIMIT);
  const next = currentPage === total ? false : currentPage + 1;
  const prev = currentPage < 1 ? false : currentPage - 1;

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
      <div className="md:col-span-2">
        <HighlightedCard
          bannerImage={{
            height: Number(firstPost.featuredImage.height),
            width: Number(firstPost.featuredImage.width),
            src: firstPost.featuredImage.url,
          }}
          description={createExcerpt(firstPost.content)}
          postDate={new Date(firstPost.createdAt)}
          slug={firstPost.slug}
          title={firstPost.title}
        />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-8">
          {posts.length ? (
            posts.map((post) => (
              <BlogCard
                bannerImage={{
                  height: Number(post.featuredImage.height),
                  width: Number(post.featuredImage.width),
                  src: post.featuredImage.url,
                }}
                description={createExcerpt(post.content)}
                key={post.slug}
                postDate={new Date(post.createdAt)}
                slug={post.slug}
                title={post.title}
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
          total={total}
        />
      </div>
    </div>
  );
}
