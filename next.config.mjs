import nextMDX from '@next/mdx';

const withMDX = nextMDX();

// Checks if required environment variables is complete before building the app
await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
};

export default withMDX(nextConfig);
