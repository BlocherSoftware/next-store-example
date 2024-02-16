import Image from "next/image";
import { HeaderNavigation } from "@/ui/molecules/HeaderNavigation";

export const Header = () => {
	return (
		<header className="mb-8 bg-white">
			<div className="container mx-auto">
				<h1 className="py-8 text-2xl font-bold">
					<Image src="/next.svg" alt="CasesStore" width={200} height={50} />
				</h1>
			</div>
			<HeaderNavigation />
		</header>
	);
};
