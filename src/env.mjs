import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const SKIP_VALIDATION_SCRIPTS = ['dev'];

export const env = createEnv({
  server: {
    WORDPRESS_API_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
  skipValidation: SKIP_VALIDATION_SCRIPTS.some(
    (script) => process.env.npm_lifecycle_event === script,
  ),
});
