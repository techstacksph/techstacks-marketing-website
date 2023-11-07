'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

interface AuthorCardProps {
  src: string;
  author: string;
  size: number;
  publishDate: string;
}

export function AuthorCard({
  src,
  author,
  size,
  publishDate,
}: AuthorCardProps) {
  return (
    <div className="w-full max-w-xs rounded-lg shadow lg:sticky bg-card top-24">
      <div className="p-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-16 h-16">
            <AvatarImage asChild src={src}>
              <Image alt={author} height={size} src={src} width={size} />
            </AvatarImage>
            <AvatarFallback>{author}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-lg font-medium text-center">{author}</p>
            <p className="text-base text-center text-muted-foreground">
              Posted on {format(new Date(publishDate), 'MMM. d, Y')}
            </p>
          </div>

          <Button
            className="hidden lg:inline-flex"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to top
          </Button>
        </div>
      </div>
    </div>
  );
}
