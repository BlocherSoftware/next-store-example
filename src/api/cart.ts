import { cookies } from "next/headers";
import { ExecuteGraphQL } from "@/utils/graphql";
import {
	CartFindOrCreateDocument,
	CartGetByIdDocument,
	CartAddItemDocument,
	type MutationCartAddItemInput,
	type MutationCartFindOrCreateInput,
	CartChangeItemQuantityDocument,
	CartRemoveItemFromCartDocument,
} from "@/gql/graphql";

export const getCartByFromCookie = async () => {
	const cartId = cookies().get("cartId");
	if (!cartId) {
		return null;
	}
	const { cart } = await ExecuteGraphQL({
		query: CartGetByIdDocument,
		variables: {
			id: cartId?.value,
		},
	});
	return cart;
};

export const cartFindOrCreate = async (input: MutationCartFindOrCreateInput) => {
	const cart = await getCartByFromCookie();
	if (cart) {
		return cart;
	}

	const { cartFindOrCreate: newCart } = await ExecuteGraphQL({
		query: CartFindOrCreateDocument,
		variables: {
			input,
		},
	});

	if (!newCart.id) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
};

export const addToCart = async (cartId: string, product: MutationCartAddItemInput) => {
	if (!cartId) {
		throw new Error("Failed to find or create cart");
	}

	await ExecuteGraphQL({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input: product,
		},
	});
};

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	if (!cartId) {
		throw new Error("Failed to find or create cart");
	}

	await ExecuteGraphQL({
		query: CartChangeItemQuantityDocument,
		variables: {
			id: cartId,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
};

export const removeItemFromCart = async (productId: string) => {
	const cartId = cookies().get("cartId");
	if (!cartId) {
		throw new Error("Failed to find or create cart");
	}

	await ExecuteGraphQL({
		query: CartRemoveItemFromCartDocument,
		variables: {
			id: cartId.value,
			productId,
		},
		next: {
			tags: ["cart"],
		},
	});
};
