import Image, { type StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { H3, Subheading } from './ui/typography';

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
    <div className="border border-border rounded-2xl">
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage asChild src={src.src}>
              <Image alt={`${name} profile image`} src={src} />
            </AvatarImage>
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div>
            <H3>{name}</H3>
            <Subheading>{position}</Subheading>
          </div>
        </div>
        <div>
          <H3 asChild>
            <p>{title}</p>
          </H3>
          <Subheading>{body}</Subheading>
        </div>
      </div>
    </div>
  );
}
