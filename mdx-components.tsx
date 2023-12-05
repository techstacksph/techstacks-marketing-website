import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, ref: _ref, ...props }) => (
      <Link href={href ?? '#'} {...props} />
    ),
  };
}
