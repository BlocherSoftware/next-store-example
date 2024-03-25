import { ExecuteGraphQL } from "@/utils/graphql";
import { OrdersByEmailDocument, OrderByIdDocument } from "@/gql/graphql";

export const getOrdersByEmail = async (email: string) => {
	const data = await ExecuteGraphQL({
		query: OrdersByEmailDocument,
		variables: { email },
	});
	return data.orders.data;
};

export const getOrderById = async (id: string) => {
	const data = await ExecuteGraphQL({
		query: OrderByIdDocument,
		variables: { id },
	});
	return data;
};
