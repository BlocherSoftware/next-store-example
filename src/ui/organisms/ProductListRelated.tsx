import { getProductListRelated } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductListRelated = async () => {
	const productRelatedData = await getProductListRelated();

	return (
		<section>
			<h2 className="mb-5 mt-10 text-4xl font-bold">Related Products</h2>
			<ul
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="related-products"
			>
				{productRelatedData.map((product) => (
					<ProductListItem key={product.name} product={product} />
				))}
			</ul>
		</section>
	);
};
