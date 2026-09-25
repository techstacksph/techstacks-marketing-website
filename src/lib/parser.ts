import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
export function htmlStrToReact(str: string) {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, { ...production })
    .process(str);
}
