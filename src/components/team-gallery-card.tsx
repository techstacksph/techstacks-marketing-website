import Image, { type StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { H3 } from './ui/typography';

interface TeamGalleryCardProps {
  src: StaticImageData;
  name: string;
  position: string;
  title: string;
  body: string;
}

export function TeamGalleryCard({
  src,
  name,
  position,
  title,
  body,
}: TeamGalleryCardProps) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-xl border bg-card p-6 lg:p-8">
      <H3 asChild className="text-lg lg:text-xl">
        <p>{title}</p>
      </H3>
      <blockquote className="flex-1 leading-relaxed text-muted-foreground">
        {body}
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t pt-4">
        <Avatar className="h-11 w-11">
          <AvatarImage asChild src={src.src}>
            <Image alt="" src={src} />
          </AvatarImage>
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <span className="text-sm">
          <span className="block font-semibold">{name}</span>
          <span className="text-muted-foreground">{position}</span>
        </span>
      </figcaption>
    </figure>
  );
}
