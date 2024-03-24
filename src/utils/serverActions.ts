"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { changeItemQuantity, getCartByFromCookie, removeItemFromCart } from "@/api/cart";
import { createReview } from "@/api/products";

export const changeItemQuantityAction = async (itemId: string, quantity: number) => {
	const cartId = cookies().get("cartId");

	if (!cartId) {
		throw new Error("Failed to find or create cart");
	}
	if (quantity < 1) {
		throw new Error("Quantity must be greater than 0");
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

export const handlePaymentAction = async () => {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const cart = await getCartByFromCookie();

	if (!cart) {
		throw new Error("Failed to find cart");
	}

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product.name,
					description: item.product.description,
					images: [item.product.images[0].url],
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
