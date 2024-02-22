import { ExecuteGraphQL } from "@/utils/graphql";
import { CategoryListDocument, CategoriesBySlugDocument } from "@/gql/graphql";

export const getCategoryList = async () => {
	const data = await ExecuteGraphQL({
		query: CategoryListDocument,
	});
	return data.categories.data;
};

export const getCategoryBySlug = async (slug: string) => {
	const data = await ExecuteGraphQL({
		query: CategoriesBySlugDocument,
		variables: { slug },
	});
	return data.category?.products;
};
