// TODO: uncomment when wordpress is ready!
// await import('./src/env.mjs'); // Checks if environment variables is complete before building the app

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: 'http',
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

export default nextConfig;
