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
          'prose dark:prose-invert md:prose-xl w-full bg-background prose-img:w-full overflow-x-auto',

          // override wordpress styles
          '[&_.wp-block-code]:p-0',
          '[&_.wp-block-code>code]:whitespace-pre',
          '[&_.wp-block-code>&.hljs]:overflow-x-auto',

          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
BlogArticle.displayName = 'blog-article';
