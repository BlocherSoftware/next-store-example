import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CasesStore",
	description: "The beast cases for your devices.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-gray-200 ${inter.className}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
