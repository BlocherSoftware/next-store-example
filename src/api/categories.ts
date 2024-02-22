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
	if (!data) {
		throw new Error("Failed to fetch category");
	}
	return data.category;
};
