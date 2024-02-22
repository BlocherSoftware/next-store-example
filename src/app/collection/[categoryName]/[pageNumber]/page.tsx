import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { pageNumberToPageNumberArray } from "@/utils/utils";
import { getCollectionsListBySlug } from "@/api/collections";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateStaticParams = async () => {
	const pages = 1;
	const pagesNumberArray = pageNumberToPageNumberArray(pages);
	return pagesNumberArray.map((page) => ({ pageNumber: page.toString() }));
};

export default async function CollectionPaginationPage({
	params: { categoryName, pageNumber },
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const products = await getCollectionsListBySlug(categoryName);
	if (!products) throw notFound();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Products</h1>
				<ProductList products={products} />
				<Suspense fallback="Loading...">
					<Pagination activePage={Number(pageNumber)} totalProducts={0} />
				</Suspense>
			</div>
		</main>
	);
}
