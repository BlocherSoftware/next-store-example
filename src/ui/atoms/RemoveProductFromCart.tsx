"use client";
import { removeItemFromCartAction } from "@/utils/serverActions";

export const RemoveProductFromCart = ({ productId }: { productId: string }) => {
	return (
		<form className="flex">
			<button
				data-testid="remove"
				className="text-red-500"
				type="submit"
				formAction={async () => {
					await removeItemFromCartAction(productId);
				}}
			>
				Remove
			</button>
		</form>
	);
};
