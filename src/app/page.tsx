import { ProductList } from "@/ui/organisms/ProductList";

const products = [
	{
		image: "/product_1.jpg",
		name: "Ocean phone case",
		description: "The best phone case in the world",
		price: 100,
	},
	{
		image: "/product_2.jpg",
		name: "Electro phone case",
		description: "The best phone case in the world",
		price: 50,
	},
	{
		image: "/product_3.jpg",
		name: "Colorful phone case",
		description: "The best phone case in the world",
		price: 150,
	},
	{
		image: "/product_4.jpg",
		name: "Lazur phone case",
		description: "The best phone case in the world",
		price: 20,
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="container mx-auto">
				<h1 className="mb-5 text-4xl font-bold">Products</h1>
				<ProductList products={products} />
			</div>
		</main>
	);
}
