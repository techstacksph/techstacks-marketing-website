'use client';

import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import dynamic from 'next/dynamic';
import { BlogCarouselItem, type BlogCardProps } from './blog-card';

interface BlogCarouselProps {
  items: BlogCardProps[];
}

function BlogCarousel({ items }: BlogCarouselProps) {
  const carousel = useRef<AliceCarousel>(null);

  return (
    <AliceCarousel
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      items={items.map((item) => (
        <BlogCarouselItem {...item} key={item.slug} />
      ))}
      mouseTracking
      preservePosition
      ref={carousel}
      responsive={{
        0: { items: 1.5 },
      }}
    />
  );
}

export default dynamic(() => Promise.resolve(BlogCarousel), { ssr: false });
