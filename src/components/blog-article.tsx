'use client';

import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { useHLJS } from '@/lib/hooks/use-hljs';

type BlogArticleProps = HTMLAttributes<HTMLElement>;

export const BlogArticle = forwardRef<HTMLElement, BlogArticleProps>(
  ({ className, ...props }, ref) => {
    useHLJS();

    return (
      <article
        className={cn(
          'prose dark:prose-invert md:prose-xl w-full bg-background prose-img:w-full overflow-x-auto max-w-full',
          '[&_blockquote:has(p)]:overflow-x-auto',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
BlogArticle.displayName = 'blog-article';
