import Image from "next/image";
import { Suspense } from "react";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";
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
					<SignedIn>
						<UserButton userProfileMode="navigation" />
					</SignedIn>
					<SignedOut>
						<SignInButton>
							<User className="cursor-pointer" />
						</SignInButton>
					</SignedOut>
				</div>

			</div>
			<HeaderNavigation />

		</header>
	);
};
