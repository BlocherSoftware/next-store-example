import { ShoppingCart } from "lucide-react";

export const Cart = ({ productCount = 0 }: { productCount: number }) => {
	return (
		<div className="group relative">
			<ShoppingCart />
			<span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-xs">
				{productCount}
			</span>
		</div>
	);
};
