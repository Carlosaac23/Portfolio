import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**.png',
        search: '',
      },
    ],
  },
  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
