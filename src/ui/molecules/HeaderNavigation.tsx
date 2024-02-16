import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const HeaderNavigation = () => {
	return (
		<nav className="flex items-center justify-between bg-slate-100 py-4">
			<div className="container mx-auto">
				<ul className="flex items-center">
					<li className="pr-4">
						<ActiveLink href="/" activeClassName="text-decoration-line: underline">
							Home
						</ActiveLink>
					</li>
					<li className="pr-4">
						<ActiveLink href="/products/1" activeClassName="text-decoration-line: underline">
							All
						</ActiveLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
