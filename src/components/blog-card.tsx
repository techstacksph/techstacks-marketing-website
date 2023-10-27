import Image from 'next/image';
import { formatRelative } from 'date-fns';
import Link from 'next/link';
import type { JSX } from 'react';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';

interface BaseImageProps {
  src: string;
  width: number;
  height: number;
}

interface Author {
  avatar: BaseImageProps;
  name: string;
}

export interface BlogCardProps {
  slug: string;
  title: string;
  Description: JSX.Element;
  bannerImage: BaseImageProps;
  author: Author;
  postDate: Date;
}

export function BlogCard({
  slug,
  title,
  Description,
  bannerImage,
}: BlogCardProps) {
  return (
    <Link
      className="overflow-hidden border rounded-lg border-border"
      href={`${NavRoutes.Company.Blog}/${slug}`}
    >
      <div>
        <div className="aspect-video">
          <Image
            alt={`${title} banner image`}
            className="object-cover w-full h-full"
            priority
            suppressHydrationWarning
            {...bannerImage}
          />
        </div>
        <div className="p-3 space-y-2">
          <h2 className="text-xl font-medium">{title}</h2>
          {Description}
        </div>
      </div>
    </Link>
  );
}

export function BlogCarouselItem({
  slug,
  title,
  Description,
  bannerImage,
  author,
  postDate,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden border rounded-lg shadow-lg select-none border-border bg-background/50 backdrop-blur-md shadow-primary-static/20">
      <div className="flex">
        <div className="w-full p-8">
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-medium">{title}</h2>
                {Description}
                <div className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href={`${NavRoutes.Company.Blog}/${slug}`}>
                      Read more
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  {...author.avatar}
                  alt={`${author.name} Profile image`}
                  className="w-10 h-10 rounded-full pointer-events-none"
                  priority
                />
                <span className="text-lg font-medium">{author.name}</span>
              </div>
              <p className="italic">{formatRelative(postDate, Date.now())}</p>
            </div>
          </div>
        </div>

        <div className="h-96 aspect-square">
          <Image
            alt={`${title} banner image`}
            className="object-cover w-full h-full pointer-events-none"
            priority
            {...bannerImage}
          />
        </div>
      </div>
    </div>
  );
}
