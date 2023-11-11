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
      'Please check you tailwind config for inconsistencies the the schema',
    );

  return parsed.data;
}

export const twConfig = createTwConfig();
