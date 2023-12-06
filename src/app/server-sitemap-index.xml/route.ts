import { getServerSideSitemap } from 'next-sitemap';
import { getPosts } from '@/lib/blog/content/api/get-posts';

export async function GET() {
  const query = await getPosts();

  return getServerSideSitemap(
    query.posts.map((post) => ({
      loc: `https://techstacksph.com/company/blog/${post.node.slug}`,
      lastmod: new Date().toISOString(),
    })),
  );
}
