import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typedRoutes: true,
	images: {
		remotePatterns: [new URL('https://github.com/Carlosaac23.png')],
	},
};

export default nextConfig;
