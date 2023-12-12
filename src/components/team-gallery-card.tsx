import Image, { type StaticImageData } from 'next/image';
import { BsQuote } from 'react-icons/bs';
import { cn } from '@/utils/cn';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { H3, Subheading } from './ui/typography';

interface TeamGalleryCardProps {
  src: StaticImageData;
  name: string;
  position: string;
  title: string;
  body: string;
  index: boolean;
}

export function TeamGalleryCard({
  src,
  name,
  position,
  title,
  body,
  index,
}: TeamGalleryCardProps) {
  return (
    <div
      className={cn(
        'border border-primary-static rounded-2xl shadow-lg [&&]:shadow-primary-static/40',
        index && 'bg-primary-static/80',
      )}
    >
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
            <Subheading className="text-foreground">{position}</Subheading>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <H3 asChild>
            <p>{title}</p>
          </H3>
          <Subheading className="text-foreground">
            <span className="relative inline-block">
              <span className="absolute top-0 left-0 -z-10 text-8xl dark:text-muted-foreground/50 text-muted-foreground/30">
                <BsQuote />
              </span>
              {body}
            </span>
          </Subheading>
        </div>
      </div>
    </div>
  );
}
