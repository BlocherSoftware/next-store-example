import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: {
		image: string;
		name: string;
		category: string;
		price: number;
	};
};

export const ProductListItem = ({
	product: { name, category, image, price },
}: ProductListItemProps) => {
	return (
		<li className="transition-shadow hover:shadow-lg">
			<article className="flex flex-col ">
				<ProductListItemImage src={image} alt={name} />
				<ProductListItemDescription name={name} category={category} price={price} />
			</article>
		</li>
	);
};
