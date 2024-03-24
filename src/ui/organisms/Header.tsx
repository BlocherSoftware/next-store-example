import Image from "next/image";
import { Suspense } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { HeaderNavigation } from "@/ui/molecules/HeaderNavigation";
import { Serachbar } from "@/ui/atoms/Searchbar";
import { Cart } from "@/ui/atoms/Cart";

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
				<div className="flex items-center gap-5">
					<Suspense>
						<Serachbar />
					</Suspense>
					<Cart />
					<div>
						<SignedIn>
							<UserButton userProfileMode="navigation" />
						</SignedIn>
						<SignedOut>
							<SignInButton />
						</SignedOut>
					</div>
				</div>

			</div>
			<HeaderNavigation />

		</header>
	);
};
