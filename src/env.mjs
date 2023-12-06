import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const SKIP_VALIDATION_SCRIPTS = ['dev'];

export const env = createEnv({
  server: {
    WORDPRESS_API_URL: z.string(),
    VERCEL_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string(),
  },
  runtimeEnv: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  skipValidation: SKIP_VALIDATION_SCRIPTS.some(
    (script) => process.env.npm_lifecycle_event === script,
  ),
});
