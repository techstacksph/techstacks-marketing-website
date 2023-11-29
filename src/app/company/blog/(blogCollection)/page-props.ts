import type { PageProps } from '@/lib/routes/types';

export type BlogPageProps = PageProps<
  unknown,
  {
    q?: string;
    page?: string;
  }
>;
