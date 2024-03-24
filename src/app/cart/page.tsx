import { redirect } from "next/navigation";
import NextImage from "next/image";
import { getCartByFromCookie } from "@/api/cart";
import { ProductQuantity } from "@/ui/atoms/ProductQuantity";
import { RemoveProductFromCart } from "@/ui/atoms/RemoveProductFromCart";
import { handlePaymentAction } from "@/utils/serverActions";

export default async function CartPage() {
	const cart = await getCartByFromCookie();

	if (!cart) {
		redirect("/");
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Cart</h1>
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{cart.items.map((item) => (
							<tr key={`cart-product-${item.product.id}`}>
								<td>
									<NextImage
										src={item.product.images[0].url}
										alt={item.product.name}
										width={200}
										height={200}
									/>
								</td>
								<td>{item.product.name}</td>
								<td>
									<ProductQuantity itemId={item.product.id} quantity={item.quantity} />
								</td>
								<td>{item.product.price}</td>
								<td>
									<RemoveProductFromCart productId={item.product.id} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<form action={handlePaymentAction}>
					<button type="submit" className="mt-5 w-full rounded-md bg-blue-500 p-3 text-white">
						Checkout
					</button>
				</form>
			</div>
		</main>
	);
}
