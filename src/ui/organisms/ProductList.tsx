import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: {
		image: string;
		name: string;
		description: string;
		price: number;
	}[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</ul>
	);
};
