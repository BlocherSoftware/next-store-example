"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { changeItemQuantity, removeItemFromCart } from "@/api/cart";
import { createReview } from "@/api/products";

export const changeItemQuantityAction = async (itemId: string, quantity: number) => {
	const cartId = cookies().get("cartId");

	if (!cartId) {
		throw new Error("Failed to find or create cart");
	}
	await changeItemQuantity(cartId.value, itemId, quantity);
	revalidateTag("cart");
};

export const removeItemFromCartAction = async (productId: string) => {
	await removeItemFromCart(productId);
	revalidateTag("cart");
};

export const handleFormReviewAction = async (formData: FormData, productId: string) => {
	"use server";
	const review = {
		author: String(formData.get("name")),
		description: String(formData.get("content")),
		rating: Number(formData.get("rating")),
		title: String(formData.get("headline")),
		email: String(formData.get("email")),
		productId,
	};

	await createReview(review);
	revalidateTag("review");
};
