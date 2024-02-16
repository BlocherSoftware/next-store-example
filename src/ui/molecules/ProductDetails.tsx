import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage";

type ProductDetailsProps = {
	product: {
		name: string;
		price: number;
		category: string;
		description: string;
		longDescription: string;
		image: string;
	};
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<div className="grid grid-cols-2 gap-x-8">
			<ProductDetailsImage src={product.image} alt={product.name} />
			<ProductDetailsDescription product={product} />
		</div>
	);
};
