import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { cartFindOrCreate, addToCart, getCartByFromCookie } from "@/api/cart";
import { type ProductDetailsFragment } from "@/gql/graphql";
import { ButtonAddToCart } from "@/ui/atoms/ButtonAddToCart";
import { priceFormatter } from "@/utils/utils";

type ProductDetailsDescriptionProps = {
	product: ProductDetailsFragment;
};

export const ProductDetailsDescription = ({
	product: { name, price, categories, description, id },
}: ProductDetailsDescriptionProps) => {
	const addProductToCartAction = async () => {
		"use server";
		const cart = await getCartByFromCookie();

		if (cart) {
			await addToCart(cart.id, {
				item: {
					productId: id,
					quantity: 1,
				},
			});
		} else {
			const newCart = await cartFindOrCreate({
				items: [
					{
						productId: id,
					},
				],
			});
			cookies().set("cartId", newCart.id, {
				httpOnly: true,
				sameSite: "lax",
			});
		}

		revalidateTag("cart");
	};

	return (
		<div>
			<h1 className="mb-2 text-5xl">{name}</h1>
			<p className="mb-3 text-sm text-slate-400">
				Category: {categories.map((category) => category.name).join(", ")}
			</p>
			<p className="mb-3 text-2xl">{priceFormatter(price)}</p>
			<p className="mb-3">{description}</p>
			<form action={addProductToCartAction}>
				<ButtonAddToCart />
			</form>
		</div>
	);
};
