import { ExecuteGraphQL } from "@/utils/graphql";
import {
	ProductListDocument,
	ProductBySlugDocument,
	ProductListRelatedDocument,
	ProductSearchDocument,
	ReviewCreateDocument,
	ReviewByProductSlugDocument,
	type ProductSortBy,
	type SortDirection,
} from "@/gql/graphql";

export const getProductList = async (
	limit: number,
	offset: number,
	orderBy?: ProductSortBy,
	order?: SortDirection,
) => {
	const data = await ExecuteGraphQL({
		query: ProductListDocument,
		variables: { take: limit, skip: offset, orderBy, order },
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

export const createReview = async ({
	author,
	description,
	rating,
	title,
	email,
	productId,
}: {
	author: string;
	description: string;
	email: string;
	productId: string;
	rating: number;
	title: string;
}) => {
	const data = await ExecuteGraphQL({
		query: ReviewCreateDocument,
		variables: { author, description, email, productId, rating, title },
	});
	return data.reviewCreate;
};

export const ReviewByProductSlug = async (slug: string) => {
	const data = await ExecuteGraphQL({
		query: ReviewByProductSlugDocument,
		variables: { slug },
		next: {
			tags: ["review"],
		},
	});
	return data.product;
};
