import { BlogCarouselItem } from '@/components/blog-card';
import { Carousel, CarouselItem } from '@/components/ui/carousel';
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
    <Carousel
      className="[&&&]:overflow-visible"
      opts={{ mode: 'free-snap', slides: { perView: 1.5 } }}
    >
      {posts.map(({ processed, raw }, idx) => (
        <CarouselItem
          className="group data-[ready=false]:opacity-0 transition-opacity"
          key={raw.slug}
          sliderIdx={idx}
        >
          <div className="group-data-[active=false]:scale-90 transition-transform">
            <BlogCarouselItem
              Description={processed.partialContent.result}
              author={processed.author}
              bannerImage={processed.bannerImage}
              postDate={new Date(raw.date)}
              slug={raw.slug}
              title={raw.title}
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
