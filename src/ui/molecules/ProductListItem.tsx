import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type Productitem } from "@/utils/types";

type ProductListItemProps = {
	product: Productitem;
};

export const ProductListItem = ({
	product: { name, category, image, price, id },
}: ProductListItemProps) => {
	return (
		<li className="transition-shadow hover:shadow-lg">
			<article className="flex flex-col ">
				<ProductListItemImage src={image} alt={name} productID={id} />
				<ProductListItemDescription productID={id} name={name} category={category} price={price} />
			</article>
		</li>
	);
};
