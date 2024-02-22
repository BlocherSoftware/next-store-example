import { notFound } from "next/navigation";
import { getProductBySlug } from "@/api/products";
import { ProductDetails } from "@/ui/molecules/ProductDetails";
import { ProductListRelated } from "@/ui/organisms/ProductListRelated";

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
		openGraph: {
			title: productData.name,
			description: productData.description,
			images: [{ url: productData.images[0].url }],
		},
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
			</div>
		</main>
	);
}
