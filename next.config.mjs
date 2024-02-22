/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
	},
};

export default nextConfig;
