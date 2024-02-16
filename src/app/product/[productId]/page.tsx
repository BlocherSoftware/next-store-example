import { getProductById } from "@/api/products";
import { ProductDetails } from "@/ui/molecules/ProductDetails";

type ProductPageProps = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params: { productId } }: ProductPageProps) => {
	const productData = await getProductById(productId);
	return {
		title: productData.name,
		description: productData.description,
		openGraph: {
			title: productData.name,
			description: productData.description,
			images: [{ url: productData.image }],
		},
	};
};

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
	const productData = await getProductById(productId);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<ProductDetails product={productData} />
			</div>
		</main>
	);
}
