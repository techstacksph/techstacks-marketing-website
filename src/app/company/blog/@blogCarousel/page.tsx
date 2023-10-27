import BlogCarousel from '@/components/blog-carousel';
import { getPosts, processPostNode } from '@/lib/blog/content/api/get-posts';

export default async function BlogCarouselSection() {
  const rawPosts = await getPosts({ first: 3 });
  const posts = await Promise.all(
    rawPosts.map(async ({ node }) => ({
      raw: node,
      processed: await processPostNode(node),
    })),
  );

  return (
    <div className="[&_.alice-carousel\_\_wrapper]:overflow-visible [&_.alice-carousel\_\_stage-item:not(:last-of-type)>div]:mr-8">
      <BlogCarousel
        items={posts.map(({ processed, raw }) => ({
          bannerImage: processed.bannerImage,
          Description: processed.partialContent.result,
          slug: raw.slug,
          title: raw.title,
          author: processed.author,
          postDate: new Date(raw.date),
        }))}
      />
    </div>
  );
}
