import Link from "next/link";
import { priceFormatter } from "@/utils/utils";

type ProductListItemDescriptionProps = {
	name: string;
	category: {
		name: string;
	}[];
	price: number;
	slug: string;
};

export const ProductListItemDescription = ({
	name,
	category,
	price,
	slug,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col bg-slate-50 p-4">
			<Link href={`/product/${slug}`}>
				<h3 className="mb-1 text-lg font-semibold" role="heading">
					{name}
				</h3>
			</Link>

			<p className="mb-2 text-sm text-slate-400">Category: {category[0].name}</p>
			<p className="text-xl">{priceFormatter(price)}</p>
		</div>
	);
};
