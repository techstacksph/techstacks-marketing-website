import { getServerSideSitemap } from 'next-sitemap';
import { getPosts } from '@/lib/blog/content/api/get-posts';

export async function GET() {
  const { allBlogs } = await getPosts();

  return getServerSideSitemap(
    allBlogs.map((blog) => ({
      loc: `https://techstacksph.com/company/blog/${blog.slug}`,
      lastmod: new Date().toISOString(),
    })),
  );
}
