import Image from "next/image";
import { HeaderNavigation } from "@/ui/molecules/HeaderNavigation";

export const Header = () => {
	return (
		<header className="mb-8 bg-white">
			<div className="container mx-auto">
				<Image
					src="/next.svg"
					alt="CasesStore"
					width={200}
					height={50}
					className="py-8 text-2xl font-bold"
				/>
			</div>
			<HeaderNavigation />
		</header>
	);
};
