"use client"

export const ButtonShowCart = () => {
    return (
        <button type='button' className="ml-auto uppercase w-full bg-slate-700 text-white p-3" onClick={() => window.location.reload()}>
            go to cart
        </button>
    )
}