import { priceFormatter } from "@/utils/utils";

type ProductDetailsDescriptionProps = {
	product: {
		name: string;
		price: number;
		category: string;
		description: string;
		longDescription: string;
	};
};

export const ProductDetailsDescription = ({
	product: { name, price, category, description, longDescription },
}: ProductDetailsDescriptionProps) => {
	return (
		<div>
			<h1 className="mb-2 text-5xl">{name}</h1>
			<p className="mb-3 text-sm text-slate-400">Category: {category}</p>
			<p className="mb-3">{description}</p>
			<p className="mb-3 text-2xl">{priceFormatter(price)}</p>
			<p>{longDescription}</p>
		</div>
	);
};
