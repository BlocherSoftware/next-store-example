import { type ProductDetailsFragment } from "@/gql/graphql";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<div className="grid grid-cols-2 gap-x-8">
			<ProductDetailsImage
				src={product.images[0].url}
				alt={product.images[0].alt || product.name}
			/>
			<ProductDetailsDescription product={product} />
		</div>
	);
};
