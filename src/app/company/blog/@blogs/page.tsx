import { BlogCard } from '@/components/blog-card';
import { Section } from '@/components/default-elements';
import { getPosts, processPostNode } from '@/lib/blog/content/api/get-posts';

export const dynamic = 'force-dynamic';

export default async function BlogHeroSection() {
  const rawPosts = await getPosts();
  const posts = await Promise.all(
    rawPosts.map(async ({ node }) => ({
      raw: node,
      processed: await processPostNode(node),
    })),
  );

  return (
    <Section>
      <div className="grid grid-cols-4 gap-8">
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
    </Section>
  );
}
