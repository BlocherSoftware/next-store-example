import { type ProductDetailsFragment } from "@/gql/graphql";
import { priceFormatter } from "@/utils/utils";

type ProductDetailsDescriptionProps = {
	product: ProductDetailsFragment;
};

export const ProductDetailsDescription = ({
	product: { name, price, categories, description },
}: ProductDetailsDescriptionProps) => {
	return (
		<div>
			<h1 className="mb-2 text-5xl">{name}</h1>
			<p className="mb-3 text-sm text-slate-400">
				Category: {categories.map((category) => category.name).join(", ")}
			</p>
			<p className="mb-3 text-2xl">{priceFormatter(price)}</p>
			<p className="mb-3">{description}</p>
		</div>
	);
};
