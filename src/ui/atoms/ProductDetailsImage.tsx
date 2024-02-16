import Image from "next/image";

type ProductDetailsImageeProps = {
	src: string;
	alt: string;
};

export const ProductDetailsImage = ({ src, alt }: ProductDetailsImageeProps) => {
	return (
		<div className="flex aspect-auto items-center justify-center overflow-hidden bg-white p-8">
			<Image src={src} alt={alt} width={400} height={400} priority />
		</div>
	);
};
