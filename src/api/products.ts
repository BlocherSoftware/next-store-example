import { ExecuteGraphQL } from "@/utils/graphql";
import {
	ProductListDocument,
	ProductBySlugDocument,
	ProductListRelatedDocument,
	ProductSearchDocument,
} from "@/gql/graphql";

export const getProductList = async (limit: number, offset: number) => {
	const data = await ExecuteGraphQL({
		query: ProductListDocument,
		variables: { take: limit, skip: offset },
	});
	return data.products;
};

export const getProductBySlug = async (slug: string) => {
	const data = await ExecuteGraphQL({
		query: ProductBySlugDocument,
		variables: { slug },
	});
	return data.product;
};

export const getProductListRelated = async () => {
	const data = await ExecuteGraphQL({
		query: ProductListRelatedDocument,
	});
	return data.products.data;
};

export const serachProducts = async (search: string) => {
	const data = await ExecuteGraphQL({
		query: ProductSearchDocument,
		variables: { search },
	});
	return data.products;
};
