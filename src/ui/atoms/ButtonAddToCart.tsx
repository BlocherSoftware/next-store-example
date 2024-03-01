"use client";

import { useFormStatus } from "react-dom";

export const ButtonAddToCart = () => {
	const { pending } = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={pending}
			className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:bg-stone-500"
		>
			Add to cart
		</button>
	);
};
