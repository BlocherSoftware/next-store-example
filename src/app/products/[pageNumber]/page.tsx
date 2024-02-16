import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCT_PER_PAGE } from "@/utils/constants";
import { pageNumberToPageNumberArray } from "@/utils/utils";

export const generateStaticParams = async () => {
	const pages = 5;
	const pagesNumberArray = pageNumberToPageNumberArray(pages);
	return pagesNumberArray.map((page) => ({ pageNumber: page.toString() }));
};

export default async function ProductsPaginationPage({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	const products = await getProductList(PRODUCT_PER_PAGE, pageNumber);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Products</h1>
				<ProductList products={products} activePage={Number(pageNumber)} />
			</div>
		</main>
	);
}
