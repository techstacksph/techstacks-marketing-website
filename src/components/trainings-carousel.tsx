import { TRAINING_PLANS } from '@/constants/training-plans';
import { cn } from '@/utils/cn';
import { Carousel, CarouselItem } from './ui/carousel';
import { H3, Subheading } from './ui/typography';

export function TrainingsCarousel() {
  return (
    <Carousel
      className={cn(
        'relative h-full cursor-pointer',
        // Override overflow class of slider without using `!important`
        '[&&&]:overflow-x-visible [&&&]:overflow-y-clip',
        // Fade effects
        'before:bg-gradient-to-b before:from-transparent before:from-5% before:to-transparent before:to-25% before:absolute before:pointer-events-none before:top-0 before:left-0 before:w-full before:h-full before:z-10',
        'after:bg-gradient-to-t after:from-transparent after:from-5% after:to-transparent after:to-25% after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:z-10',
      )}
      opts={{
        slides: {
          origin: 'center',
          perView: 1.8,
        },
        vertical: true,
        mode: 'free-snap',
      }}
    >
      {TRAINING_PLANS.map(([title, description, Icon], idx) => (
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
            <div className="h-full lg:p-4  xl:p-8">
              <div className="flex flex-col items-center p-4 md:p-0 justify-center h-full gap-4 rounded-2xl md:justify-start md:flex-row bg-transparent">
                <div className="hidden w-24 h-24 xl:w-36 xl:h-36 md:block shrink-0">
                  <Icon className="object-contain w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 xl:gap-4">
                  <H3>{title}</H3>
                  <Subheading>{description}</Subheading>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
