import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCT_PER_PAGE } from "@/utils/constants";
import { getOrderFromParams, getSortFromParams, pageNumberToPageNumberArray } from "@/utils/utils";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductListSort } from "@/ui/atoms/ProductListSort";

export const generateStaticParams = async () => {
	const pages = 1;
	const pagesNumberArray = pageNumberToPageNumberArray(pages);
	return pagesNumberArray.map((page) => ({ pageNumber: page.toString() }));
};

export default async function ProductsPaginationPage({
	params: { pageNumber },
	searchParams: { sortBy, order },
}: {
	params: { pageNumber: string };
	searchParams: { sortBy: string; order: string };
}) {
	if (!Number(pageNumber)) throw notFound();

	const products = await getProductList(
		PRODUCT_PER_PAGE,
		(Number(pageNumber) - 1) * PRODUCT_PER_PAGE,
		getSortFromParams(sortBy),
		getOrderFromParams(order),
	);

	if (Math.ceil(products.meta.total / PRODUCT_PER_PAGE) < Number(pageNumber)) throw notFound();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Products</h1>
				<ProductListSort />
				<ProductList products={products.data} />
				<Suspense fallback="Loading...">
					<Pagination activePage={Number(pageNumber)} totalProducts={products.meta.total} />
				</Suspense>
			</div>
		</main>
	);
}
