import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product: { name, price, categories, images, slug },
}: ProductListItemProps) => {
	return (
		<li className="transition-shadow hover:shadow-lg">
			<article className="flex flex-col ">
				{images[0] && (
					<ProductListItemImage src={images[0].url} alt={images[0].alt || name} slug={slug} />
				)}

				<ProductListItemDescription slug={slug} name={name} category={categories} price={price} />
			</article>
		</li>
	);
};
