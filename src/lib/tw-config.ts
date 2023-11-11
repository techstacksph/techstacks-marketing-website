import resolveConfig from 'tailwindcss/resolveConfig';
import { z } from 'zod';
import cfg from 'tailwind.config';

const { theme } = resolveConfig(cfg);

function createTwConfig() {
  const schema = z.object({
    screens: z.object({
      '2xl': z.string(),
      lg: z.string(),
      md: z.string(),
      sm: z.string(),
      xl: z.string(),
      xs: z.string(),
    }),
  });

  const parsed = schema.safeParse(theme);

  if (!parsed.success)
    throw new Error(
      'Please compare your `tailwind.config.ts` and the schema above for inconsistencies.',
    );

  return parsed.data;
}

export const twConfig = createTwConfig();
