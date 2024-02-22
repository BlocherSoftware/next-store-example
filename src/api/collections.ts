import { ExecuteGraphQL } from "@/utils/graphql";
import { CollectionBySlugDocument, CollectionListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const data = await ExecuteGraphQL({
		query: CollectionListDocument,
	});
	return data.collections.data;
};

export const getCollectionsListBySlug = async (slug: string) => {
	const data = await ExecuteGraphQL({
		query: CollectionBySlugDocument,
		variables: { slug },
	});
	return data.collection?.products;
};
