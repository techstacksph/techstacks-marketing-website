import Image from 'next/image';
import { formatRelative, format } from 'date-fns/esm';
import Link from 'next/link';
import { NavRoutes } from '@/constants/nav-routes';
import { toSentenceCase } from '@/utils/change-case';
import { Button } from './ui/button';
import { H3, Subheading } from './ui/typography';

interface BaseImageProps {
  src: string;
  width: number;
  height: number;
}

export interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  bannerImage: BaseImageProps;
  postDate: Date;
}

export function BlogCard({
  slug,
  title,
  description,
  bannerImage,
  postDate,
}: BlogCardProps) {
  return (
    <Link
      className="overflow-hidden transition-all border rounded-lg border-border bg-background/50 backdrop-blur-md hover:shadow-lg hover:shadow-primary-static/20"
      href={`${NavRoutes.Company.Blog}/${slug}`}
    >
      <div className="relative flex gap-2">
        <div className="flex flex-col justify-between w-full gap-2 p-3 pb-4">
          <div className="space-y-2">
            <H3>{title}</H3>
            <div className="break-all line-clamp-2">{description}</div>
          </div>
          <Subheading className="text-sm italic break-all truncate lg:text-sm">
            {format(postDate, 'MMM. d, yyyy')}
          </Subheading>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 lg:w-36 lg:aspect-square lg:shrink-0 lg:static">
          <Image
            alt={`${title} banner image`}
            className="object-cover w-full h-full opacity-25 lg:opacity-100"
            priority
            suppressHydrationWarning
            {...bannerImage}
          />
        </div>
      </div>
    </Link>
  );
}

export function BlogCarouselItem({
  slug,
  title,
  description,
  bannerImage,
  postDate,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden border rounded-lg shadow-lg select-none border-border bg-background/50 backdrop-blur-md shadow-primary-static/20">
      <div className="relative flex">
        <div className="w-full p-8">
          <div className="flex flex-col justify-between h-full gap-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <H3 asChild className="line-clamp-1">
                  <h2>{title}</h2>
                </H3>
                <div className="line-clamp-4">{description}</div>
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
              <p className="text-sm italic text-muted-foreground">
                {toSentenceCase(formatRelative(postDate, Date.now()))}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-25 lg:h-96 lg:aspect-square lg:static -z-10 lg:opacity-100">
          <Image
            alt={`${title} banner image`}
            className="object-cover w-full h-full"
            priority
            {...bannerImage}
          />
        </div>
      </div>
    </div>
  );
}

export function HighlightedCard({
  slug,
  title,
  description,
  bannerImage,
  postDate,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden border rounded-lg shadow border-border bg-background/50 backdrop-blur-md">
      <div className="w-full aspect-video">
        <Image
          alt={`${title} banner image`}
          className="object-cover w-full h-full"
          priority
          {...bannerImage}
        />
      </div>
      <div className="p-8 space-y-4">
        <H3>{title}</H3>
        <div className="line-clamp-3">{description}</div>
        <div className="flex justify-end">
          <Button asChild variant="outline">
            <Link href={`${NavRoutes.Company.Blog}/${slug}`}>Read more</Link>
          </Button>
        </div>
      </div>
      <div className="p-8 pt-0">
        <div className="flex flex-col gap-2">
          <p className="text-sm italic text-muted-foreground">
            {toSentenceCase(formatRelative(postDate, Date.now()))}
          </p>
        </div>
      </div>
    </div>
  );
}
