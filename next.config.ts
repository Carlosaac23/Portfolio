import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://github.com/Carlosaac23.png')],
  },
  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
