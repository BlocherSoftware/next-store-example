import Image from "next/image";
import Link from "next/link";

type ProductListItemImageProps = {
	src: string;
	alt: string;
	slug: string;
};

export const ProductListItemImage = ({ src, alt, slug }: ProductListItemImageProps) => {
	return (
		<Link
			href={`/product/${slug}`}
			className="flex aspect-auto h-96 items-center justify-center overflow-hidden bg-white p-3"
		>
			<Image src={src} alt={alt} width={200} height={200} priority />
		</Link>
	);
};
