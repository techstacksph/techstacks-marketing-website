export interface PageProps<TParams = unknown, TSearchParams = unknown> {
  params: TParams extends Record<string, string> ? TParams : never;
  searchParams: TSearchParams extends Record<string, string>
    ? TSearchParams
    : never;
}
