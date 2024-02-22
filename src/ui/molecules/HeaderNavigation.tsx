import { getCategoryList } from "@/api/categories";
import { getCollectionsList } from "@/api/collections";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Cart } from "@/ui/atoms/Cart";

export const HeaderNavigation = async () => {
	const dataCategories = await getCategoryList();
	const dataCollections = await getCollectionsList();

	return (
		<nav className="flex items-center justify-between bg-slate-100 ">
			<div className="container mx-auto flex items-center">
				<ul className="flex w-full items-center">
					<li className="py-4 pr-4">
						<ActiveLink href="/" activeClassName="text-decoration-line: underline">
							Home
						</ActiveLink>
					</li>
					<li className="py-4 pr-4">
						<ActiveLink
							href="/products"
							activeClassName="text-decoration-line: underline"
							exact={false}
						>
							All
						</ActiveLink>
					</li>

					<li className="group relative cursor-pointer py-4 pr-4">
						<ActiveLink
							href="/collection"
							activeClassName="text-decoration-line: underline"
							exact={false}
						>
							collections
						</ActiveLink>

						<ul className="invisible absolute top-12 z-50 flex w-64 flex-col border-2 bg-gray-100 px-4 py-3 text-gray-800 group-hover:visible">
							{dataCollections.map((category) => (
								<li key={`menu-category-${category.id}`} className="p-1">
									<ActiveLink
										href={`/collection/${category.slug}/1`}
										activeClassName="text-decoration-line: underline"
										className="text-nowrap"
									>
										{category.name}
									</ActiveLink>
								</li>
							))}
						</ul>
					</li>
					{dataCategories.map((category) => (
						<li key={`menu-category-${category.id}`} className="py-4 pr-4">
							<ActiveLink
								href={`/category/${category.slug}`}
								activeClassName="text-decoration-line: underline"
							>
								{category.name}
							</ActiveLink>
						</li>
					))}
				</ul>
				<Cart productCount={0} />
			</div>
		</nav>
	);
};
