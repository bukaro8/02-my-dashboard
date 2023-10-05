/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent.flhr3-3.fna.fbcdn.net',
				// port: '',
				// pathname: '/account123/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
		],
	},
};

module.exports = nextConfig;
