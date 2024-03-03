import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getCartByFromCookie } from "@/api/cart";

export const Cart = async () => {
	const productCount = await getCartByFromCookie();
	return (
		<Link href="/cart" className="group relative">
			<ShoppingCart />
			<span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-xs">
				{productCount?.items.map((item) => item.quantity).reduce((a, b) => a + b, 0) || 0}
			</span>
		</Link>
	);
};
