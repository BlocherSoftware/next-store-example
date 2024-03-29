import { getCategoryList } from "@/api/categories";
import { getCollectionsList } from "@/api/collections";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const HeaderNavigation = async () => {
	const dataCategories = await getCategoryList();
	const dataCollections = await getCollectionsList();

	return (
		<>
			<nav className="flex items-center justify-between bg-slate-100 ">
				<div className="container mx-auto flex items-center">
					<ul className="flex w-full items-center">
						<li className="py-4 pr-4">
							<ActiveLink href="/" activeClassName="border-b-2 border-blue-500">
								Home
							</ActiveLink>
						</li>
						<li className="py-4 pr-4">
							<ActiveLink href="/products" activeClassName="border-b-2 border-blue-500" exact={false}>
								All
							</ActiveLink>
						</li>

						{dataCollections.map((category) => (
							<li key={`menu-category-${category.id}`} className="py-4 pr-4">
								<ActiveLink
									href={`/collections/${category.slug}/1`}
									activeClassName="border-b-2 border-blue-500"
									className="text-nowrap"
								>
									{category.name}
								</ActiveLink>
							</li>
						))}
						{dataCategories.map((category) => (
							<li key={`menu-category-${category.id}`} className="py-4 pr-4">
								<ActiveLink
									href={`/categories/${category.slug}/1`}
									activeClassName="border-b-2 border-blue-500"
								>
									{category.name}
								</ActiveLink>
							</li>
						))}
					</ul>


				</div>
			</nav>

		</>
	);
};
