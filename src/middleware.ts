import { authMiddleware } from "@clerk/nextjs";

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/cart/success",
		"/categories/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products",
		"/products/(.*)",
	],
});
