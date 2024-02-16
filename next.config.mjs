/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/images/**",
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
