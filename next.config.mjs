import nextMDX from '@next/mdx';

const withMDX = nextMDX();

// Checks if required environment variables is complete before building the app
await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
};

export default withMDX(nextConfig);
