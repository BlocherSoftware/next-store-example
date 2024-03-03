import Link from "next/link";
import { priceFormatter } from "@/utils/utils";
import { StarRating } from "@/ui/atoms/StarRating";

type ProductListItemDescriptionProps = {
	name: string;
	category: {
		name: string;
	}[];
	price: number;
	slug: string;
	rating: number | null | undefined;
};

export const ProductListItemDescription = ({
	name,
	category,
	price,
	slug,
	rating,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col bg-slate-50 p-4">
			<Link href={`/product/${slug}`}>
				<h3 className="mb-1 text-lg font-semibold" role="heading">
					{name}
				</h3>
			</Link>

			<p className="mb-2 text-sm text-slate-400">Category: {category[0].name}</p>
			<StarRating rating={rating ? rating : 0} />
			<p className="text-xl" data-testid="product-price">
				{priceFormatter(price)}
			</p>
		</div>
	);
};
