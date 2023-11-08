import { Search } from 'lucide-react';
import { BlogCard, HighlightedCard } from '@/components/blog-card';
import { Section } from '@/components/default-elements';
import { Input } from '@/components/ui/input';
import { getPosts, processPostNode } from '@/lib/blog/content/api/get-posts';
import { Label } from '@/components/ui/label';
import { BlogSearchFormNames as FormNames } from '@/lib/blog/forms';
import BlogLoader from '@/components/blog-loader';
import type { BlogPageProps } from '../page-props';
import { searchBlogs } from './actions';

export default async function BlogHeroSection({ searchParams }: BlogPageProps) {
  const searchQuery = searchParams[FormNames.Query] || '';
  const rawPosts = await getPosts({ search: searchQuery });
  const [firstPost, ...posts] = await Promise.all(
    rawPosts.map(async ({ node }) => ({
      raw: node,
      processed: await processPostNode(node),
    })),
  );

  return (
    <Section asChild>
      <form action={searchBlogs}>
        <div className="space-y-6">
          <div className="flex flex-wrap justify-between gap-2">
            <h2 className="text-4xl font-medium">Latest blog</h2>
            <Label className="flex items-center w-full max-w-md gap-3 px-3 font-normal rounded-md bg-background border-input">
              <Search className="shrink-0" />
              <Input
                defaultValue={searchQuery}
                name={FormNames.Query}
                placeholder="Search for blogs, topics, or keywords..."
                type="search"
                variant="base"
              />
            </Label>
          </div>

          <BlogLoader>
            {firstPost ? (
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
            ) : (
              <div className="py-8">
                <p className="text-2xl italic text-center text-muted-foreground font-poppins">
                  Cannot find posts related to{' '}
                  <strong className="not-italic text-foreground">
                    &quot;{searchQuery}&quot;
                  </strong>
                </p>
              </div>
            )}
          </BlogLoader>
        </div>
      </form>
    </Section>
  );
}
