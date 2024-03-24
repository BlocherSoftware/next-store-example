import NextImage from "next/image";
import { getCartByFromCookie } from "@/api/cart";
import { RemoveProductFromCart } from "@/ui/atoms/RemoveProductFromCart";
import { CloseModal } from "@/app/@modal/(.)cart/CloseModal";
import { ButtonShowCart } from "@/app/@modal/(.)cart/ButtonShowCart";
import { Overlay } from "@/app/@modal/(.)cart/Overlay";

export default async function ModalCart() {
    const cart = await getCartByFromCookie();

    return <>
        <Overlay />
        <div className="fixed z-50 top-0 right-0 h-screen w-[400px] bg-white p-4 shadow-xl">
            <div className="flex mb-6">
                <h1 className="text-xl">Cart</h1>
                <CloseModal />
            </div>
            <div>
                {cart?.items.map((item) => (
                    <div className="flex items-center gap-2 border-b-2 border-slate-100 p-3" key={`cart-product-${item.product.id}`}>
                        <NextImage
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            width={100}
                            height={100}
                        />
                        <div>{item.product.name}</div>
                        <div>{item.product.price}</div>

                        <RemoveProductFromCart productId={item.product.id} />

                    </div>
                ))}
            </div>
            <ButtonShowCart />
        </div>
    </>
}