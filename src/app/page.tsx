import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCT_PER_PAGE } from "@/utils/constants";

export default async function Home() {
	const products = await getProductList(PRODUCT_PER_PAGE, 0);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Homepage</h1>
				<ProductList products={products.data} />
			</div>
		</main>
	);
}
