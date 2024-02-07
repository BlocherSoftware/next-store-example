import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: {
		image: string;
		name: string;
		description: string;
		price: number;
	};
};

export const ProductListItem = ({
	product: { name, description, image, price },
}: ProductListItemProps) => {
	return (
		<li className="transition-shadow hover:shadow-lg">
			<article className="flex flex-col ">
				<ProductListItemImage src={image} alt={name} />
				<ProductListItemDescription name={name} description={description} price={price} />
			</article>
		</li>
	);
};
