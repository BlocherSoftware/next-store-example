type ProductItemResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductList = async (limit: number, offset: string) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${limit}&offset=${(Number(offset) - 1) * limit}`,
	);
	const data = (await response.json()) as ProductItemResponse[];

	const products = data.map((product) => ({
		id: product.id,
		image: product.image,
		name: product.title,
		category: product.category,
		price: product.price,
	}));
	return products;
};

export const getProductListAll = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=-1`, {
		cache: "no-store",
	});
	const data = (await response.json()) as ProductItemResponse[];

	const products = data.map((product) => ({
		id: product.id,
		image: product.image,
		name: product.title,
		category: product.category,
		price: product.price,
	}));
	return products;
};

export const getProductById = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const data = (await response.json()) as ProductItemResponse;

	const product = {
		id: data.id,
		image: data.image,
		name: data.title,
		category: data.category,
		price: data.price,
		description: data.description,
		longDescription: data.longDescription,
	};
	return product;
};
