import Image from "next/image";
import { Suspense } from "react";
import { HeaderNavigation } from "@/ui/molecules/HeaderNavigation";
import { Serachbar } from "@/ui/atoms/Searchbar";

export const Header = () => {
	return (
		<header className="mb-8 bg-white">
			<div className="container mx-auto flex items-center justify-between">
				<Image
					src="/next.svg"
					alt="CasesStore"
					width={200}
					height={50}
					className="py-8 text-2xl font-bold"
				/>
				<Suspense>
					<Serachbar />
				</Suspense>
			</div>
			<HeaderNavigation />
		</header>
	);
};
