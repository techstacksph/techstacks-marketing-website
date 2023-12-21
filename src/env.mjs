import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const SKIP_VALIDATION_SCRIPTS = ['dev'];

export const env = createEnv({
  server: {
    VERCEL_URL: z.string(),
    RESEND_API_KEY: z.string(),
    DATOCMS_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    VERCEL_URL: process.env.VERCEL_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    DATOCMS_API_KEY: process.env.DATOCMS_API_KEY,
  },
  skipValidation: SKIP_VALIDATION_SCRIPTS.some(
    (script) => process.env.npm_lifecycle_event === script,
  ),
});
