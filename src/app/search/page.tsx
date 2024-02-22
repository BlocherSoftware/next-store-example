import { ProductList } from "@/ui/organisms/ProductList";
import { serachProducts } from "@/api/products";

export default async function SearchPage({
	searchParams: { query },
}: {
	searchParams: { query: string };
}) {
	const products = await serachProducts(query);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Wyniki wyszukiwania dla: {query}</h1>
				<ProductList products={products.data} />
			</div>
		</main>
	);
}
