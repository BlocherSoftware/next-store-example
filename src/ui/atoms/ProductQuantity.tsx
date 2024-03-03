"use client";
import { useOptimistic } from "react";
import { changeItemQuantityAction } from "@/utils/serverActions";

export function ProductQuantity({ itemId, quantity }: { itemId: string; quantity: number }) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				data-testid="decrement"
				className="h-6 w-6 border"
				type="submit"
				disabled={optimisticQuantity <= 1}
				formAction={async () => {
					if (optimisticQuantity > 1) {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantityAction(itemId, optimisticQuantity - 1);
					}
				}}
			>
				-
			</button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantityAction(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
