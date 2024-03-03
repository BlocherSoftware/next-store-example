import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/api/products";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 630,
};

export default async function OpenGraphImage({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<ImageResponse> {
	const productData = await getProductBySlug(productId);

	if (!productData) return new ImageResponse(<div>Product not found</div>);

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img src={productData.images[0].url} width={600} height={600} alt={productData.name} />
				<div
					style={{
						fontSize: 18,
						background: "white",
						width: "50%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<p
						style={{
							fontSize: 48,
							margin: 0,
						}}
					>
						{productData.name}
					</p>
					<p
						style={{
							fontSize: 18,
							margin: 0,
							marginBottom: 20,
							color: "gray",
						}}
					>
						Category: {productData.categories[0].name}
					</p>
					<p
						style={{
							fontSize: 18,
							margin: 0,
						}}
					>
						{productData.description}
					</p>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
