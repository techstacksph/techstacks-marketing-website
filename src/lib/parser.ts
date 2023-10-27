import { createElement } from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import { cn } from '@/utils/cn';

// @ts-expect-error: the react types are missing.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/namespace -- Generate types on runtime
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
export function htmlStrToReact(str: string) {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      ...production,
      components: {
        p: ({ className, children, ...props }) =>
          createElement(
            'p',
            { className: cn(className, 'line-clamp-5'), ...props },
            children,
          ),
      },
    })
    .process(str);
}
