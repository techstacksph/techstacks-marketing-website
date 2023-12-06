import nextMDX from '@next/mdx';

const withMDX = nextMDX();

// Checks if required environment variables is complete before building the app
await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '0.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default withMDX(nextConfig);
