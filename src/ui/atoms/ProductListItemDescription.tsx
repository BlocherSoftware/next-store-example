import Link from "next/link";
import { priceFormatter } from "@/utils";

type ProductListItemDescriptionProps = {
	name: string;
	category: string;
	price: number;
};

export const ProductListItemDescription = ({
	name,
	category,
	price,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col bg-slate-50 p-4">
			<h3 className="mb-1 text-lg font-semibold">
				<Link href="/">{name}</Link>
			</h3>
			<p className="mb-2 text-sm text-slate-400">Category: {category}</p>
			<p className="text-xl">{priceFormatter(price)}</p>
		</div>
	);
};
