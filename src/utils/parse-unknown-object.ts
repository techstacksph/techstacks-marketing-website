import type { ZodSchema } from 'zod';

type Entries<T> = Iterable<readonly [PropertyKey, T]>;

export function parseUnknownObject<TData, TSchema>(
  data: Entries<TData>,
  schema: ZodSchema<TSchema>,
) {
  const parsed = schema.safeParse(Object.fromEntries(data));
  if (!parsed.success) {
    // eslint-disable-next-line no-console -- Log errors
    console.error(
      '❌ Error on passed data',
      parsed.error.flatten().fieldErrors,
    );
    throw new Error('❌ Error on passed data');
  }

  return parsed.data;
}
