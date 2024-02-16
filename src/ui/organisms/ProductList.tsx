import { Suspense } from "react";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type Productitem } from "@/utils/types";

type ProductListProps = {
	products: Productitem[];
	activePage: number;
};

export const ProductList = ({ products, activePage }: ProductListProps) => {
	return (
		<>
			<ul
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.name} product={product} />
				))}
			</ul>
			<Suspense fallback="Loading...">
				<Pagination activePage={activePage} />
			</Suspense>
		</>
	);
};
