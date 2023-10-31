import type { PageProps } from '@/lib/routes/types';
import type { BlogSearchFormNames } from '@/lib/blog/forms';

export type BlogPageProps = PageProps<
  unknown,
  {
    [BlogSearchFormNames.Query]?: string;
  }
>;
