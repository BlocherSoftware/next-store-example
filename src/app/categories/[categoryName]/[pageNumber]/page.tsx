import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { pageNumberToPageNumberArray } from "@/utils/utils";
import { getCategoryBySlug } from "@/api/categories";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateMetadata = async ({
	params: { categoryName },
}: {
	params: { categoryName: string };
}) => {
	const category = await getCategoryBySlug(categoryName);

	if (!category) return { title: "Category" };

	return {
		title: category.name,
		description: category.description,
		openGraph: {
			title: category.name,
			description: category.description,
		},
	};
};

export const generateStaticParams = async () => {
	const pages = 1;
	const pagesNumberArray = pageNumberToPageNumberArray(pages);
	return pagesNumberArray.map((page) => ({ pageNumber: page.toString() }));
};

export default async function CategoryPaginationPage({
	params: { categoryName, pageNumber },
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const categoryData = await getCategoryBySlug(categoryName);
	if (!categoryData) throw notFound();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">{categoryData.name}</h1>
				<ProductList products={categoryData.products} />
				<Suspense fallback="Loading...">
					<Pagination activePage={Number(pageNumber)} totalProducts={1} />
				</Suspense>
			</div>
		</main>
	);
}
