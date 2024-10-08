import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const SKIP_VALIDATION_SCRIPTS = ['dev'];

export const env = createEnv({
  server: {
    VERCEL_URL: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_EMAIL: z.string().email(),
    DATOCMS_API_KEY: z.string(),

    GOOGLE_CLIENT_EMAIL: z.string(),
    GOOGLE_PRIVATE_KEY: z.string(),
    GOOGLE_SPREADSHEET_ID: z.string(),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    VERCEL_URL: process.env.VERCEL_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_EMAIL: process.env.RESEND_EMAIL,
    DATOCMS_API_KEY: process.env.DATOCMS_API_KEY,

    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SPREADSHEET_ID: process.env.GOOGLE_SPREADSHEET_ID,
  },
  skipValidation: SKIP_VALIDATION_SCRIPTS.some(
    (script) => process.env.npm_lifecycle_event === script,
  ),
});
