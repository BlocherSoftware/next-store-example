import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsListBySlug } from "@/api/collections";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateMetadata = async ({
	params: { collectionName },
}: {
	params: { collectionName: string };
}) => {
	const collections = await getCollectionsListBySlug(collectionName);

	if (!collections) return { title: "Category" };

	return {
		title: collections.name,
		description: collections.description,
		openGraph: {
			title: collections.name,
			description: collections.description,
		},
	};
};

export default async function CollectionPaginationPage({
	params: { collectionName, pageNumber },
}: {
	params: { collectionName: string; pageNumber: string };
}) {
	const collectionsData = await getCollectionsListBySlug(collectionName);
	if (!collectionsData) throw notFound();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">{collectionsData.name}</h1>
				<ProductList products={collectionsData.products} />
				<Suspense fallback="Loading...">
					<Pagination activePage={Number(pageNumber)} totalProducts={1} />
				</Suspense>
			</div>
		</main>
	);
}
