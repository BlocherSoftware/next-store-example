import Image from "next/image";
import Link from "next/link";

type ProductListItemImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemImage = ({ src, alt }: ProductListItemImageProps) => {
	return (
		<Link href="#" className="aspect-auto">
			<Image src={src} alt={alt} width={600} height={600} priority />
		</Link>
	);
};
