'use client';

import 'keen-slider/keen-slider.min.css';
import {
  type KeenSliderOptions,
  useKeenSlider,
  type KeenSliderPlugin,
} from 'keen-slider/react';
import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  useImperativeHandle,
  forwardRef,
  type Ref,
} from 'react';
import { cn } from '@/utils/cn';

interface SliderCtx {
  activeIdx: number;
  isReady: boolean;
}

const sliderCtx = createContext<SliderCtx | null>(null);

type CarouselProps<TOpts, TPlugs> = HTMLAttributes<HTMLDivElement> & {
  opts: KeenSliderOptions<TOpts, TPlugs>;
  plugIns?: KeenSliderPlugin<TOpts, TPlugs>[];
};

export interface CarouselRef {
  next: () => void;
  prev: () => void;
}
function CarouselRoot<TOpts, TPlugs>(
  { className, opts, plugIns, ...props }: CarouselProps<TOpts, TPlugs>,
  ref: Ref<CarouselRef>,
) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      ...opts,
      slideChanged: (slider, ...params) => {
        setActiveIdx(slider.track.details.rel);
        if (opts.slideChanged) opts.slideChanged(slider, ...params);
      },
      created: (...params) => {
        setIsReady(true);
        if (opts.created) opts.created(...params);
      },
    },
    plugIns,
  );

  useImperativeHandle(
    ref,
    () => ({
      next: () => instanceRef.current?.next(),
      prev: () => instanceRef.current?.prev(),
    }),
    [instanceRef],
  );

  return (
    <sliderCtx.Provider value={{ activeIdx, isReady }}>
      <div
        className={cn('keen-slider', className)}
        ref={sliderRef}
        {...props}
      />
    </sliderCtx.Provider>
  );
}
const Carousel = forwardRef(CarouselRoot);
Carousel.displayName = 'carousel';

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  sliderIdx: number;
}
function CarouselItem({ className, sliderIdx, ...props }: CarouselItemProps) {
  const ctx = useContext(sliderCtx);

  if (!ctx)
    throw new Error('CarouselItem should be within the Carousel Component!');

  return (
    <div
      className={cn(
        'keen-slider__slide data-[active=false]:opacity-50 transition-opacity',
        className,
      )}
      data-active={ctx.activeIdx === sliderIdx}
      data-ready={ctx.isReady}
      {...props}
    />
  );
}

export { Carousel, CarouselItem };
