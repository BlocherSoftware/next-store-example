import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProductBySlug } from "@/api/products";
import { ProductDetails } from "@/ui/molecules/ProductDetails";
import { ProductListRelated } from "@/ui/organisms/ProductListRelated";
import { ProductReview } from "@/ui/organisms/ProductReview";

type ProductPageProps = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params: { productId } }: ProductPageProps) => {
	const productData = await getProductBySlug(productId);

	if (!productData) throw notFound();

	return {
		title: productData.name,
		description: productData.description,
	};
};

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
	const productData = await getProductBySlug(productId);

	if (!productData) {
		throw notFound();
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<ProductDetails product={productData} />
				<ProductListRelated />
				<Suspense>
					<ProductReview productId={productData.id} productSlug={productId} />
				</Suspense>
			</div>
		</main>
	);
}
