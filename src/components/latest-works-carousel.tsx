import Image from 'next/image';
import { cn } from '@/utils/cn';
import { projectItems } from '@/constants/project-items';
import { Carousel, CarouselItem } from './ui/carousel';
import { H3, H4, Subheading } from './ui/typography';

export function LatestWorksCarousel() {
  return (
    <Carousel
      className={cn(
        'relative h-full',
        // Override overflow class of slider without using `!important`
        '[&&&]:overflow-x-visible [&&&]:overflow-y-clip',
        // Fade effects
        'before:bg-gradient-to-b before:from-background before:from-5% before:to-transparent before:to-25% before:absolute before:pointer-events-none before:top-0 before:left-0 before:w-full before:h-full before:z-[1]',
        'after:bg-gradient-to-t after:from-background after:from-5% after:to-transparent after:to-25% after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:z-[1]',
      )}
      opts={{
        slides: {
          perView: 1.8,
          origin: 'center',
        },
        vertical: true,
        mode: 'free-snap',
      }}
    >
      {projectItems.map(({ category, img, subtitle, title }, idx) => (
        <CarouselItem
          className={cn(
            'py-4 group data-[ready=false]:opacity-0 transition-opacity',
            // Override overflow class of slider without using `!important`
            '[&&&&]:overflow-x-visible [&&&&]:overflow-y-clip',
          )}
          key={title}
          sliderIdx={idx}
        >
          <div className="h-full group-data-[active=false]:scale-95 transition-transform rounded-2xl border-primary-static border shadow-lg shadow-primary-static">
            <div className="h-full p-6 xl:p-8">
              <div className="flex flex-col items-center justify-center h-full gap-4 md:justify-start md:flex-row">
                <div className="hidden w-auto h-full aspect-square md:block shrink-0">
                  <Image
                    alt={title}
                    className="object-contain w-full h-full"
                    src={img}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <H4 asChild>
                    <Subheading>{category}</Subheading>
                  </H4>
                  <H3>{title}</H3>
                  <Subheading>{subtitle}</Subheading>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
