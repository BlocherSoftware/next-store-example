import { getOrderById } from "@/api/orders";
import { priceFormatter } from "@/utils/utils";

export default async function OrderPage({ params: { orderId } }: { params: { orderId: string } }) {
    const orders = await getOrderById(orderId);

    if (!orders) {
        return <div>Order not found</div>;
    }
    const productList = orders.order?.lines as Array<{ cartId: string, productQuantity: string, productId: string, productName: string, productSlug: string, productPrice: number }>

    return <div className="container m-auto">

        <table className="w-full text-left">
            <thead>
                <tr className="[&>th]:p-3 border-b-2 border-black">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {productList.map((item) => (
                    <tr key={`order-product-${item.productId}`} className="[&>td]:p-3 border-b-2 border-black">
                        <td>{item.productName}</td>
                        <td>
                            {item.productQuantity}
                        </td>
                        <td>{priceFormatter(item.productPrice)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}