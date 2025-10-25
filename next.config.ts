import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://github.com/Carlosaac23.png')],
  },
  experimental: {
    viewTransition: true,
  },
  cacheComponents: true,
};

export default nextConfig;
