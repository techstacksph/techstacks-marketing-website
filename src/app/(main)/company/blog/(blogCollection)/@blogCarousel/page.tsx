import { BlogCarouselItem } from '@/components/blog-card';
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { getPosts } from '@/lib/blog/content/api/get-posts';
import { twConfig } from '@/lib/tw-config';
import { createExcerpt } from '@/utils/create-excerpt';

export default async function BlogCarouselSection() {
  const { allBlogs } = await getPosts({ size: 3 });

  return (
    <div className="space-y-2">
      <Carousel
        className="[&&&]:overflow-visible items-center"
        opts={{
          mode: 'free-snap',
          slides: { perView: 1 },
          breakpoints: {
            [`(min-width: ${twConfig.screens.md})`]: {
              slides: {
                perView: 1.5,
              },
            },
          },
        }}
      >
        {allBlogs.map(
          ({ featuredImage, slug, title, content, createdAt }, idx) => (
            <CarouselItem
              className="group data-[ready=false]:opacity-0 transition-opacity"
              key={slug}
              sliderIdx={idx}
            >
              <div className="group-data-[active=false]:scale-90 transition-transform">
                <BlogCarouselItem
                  bannerImage={{
                    height: Number(featuredImage.height),
                    width: Number(featuredImage.width),
                    src: featuredImage.url,
                  }}
                  description={createExcerpt(content)}
                  postDate={new Date(createdAt)}
                  slug={slug}
                  title={title}
                />
              </div>
            </CarouselItem>
          ),
        )}
      </Carousel>
    </div>
  );
}
