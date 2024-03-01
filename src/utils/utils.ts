import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

export const priceFormatter = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price / 100);
};

export const pageNumberToPageNumberArray = (pages: number) =>
	new Array<number>(pages).fill(0).map((_, index) => index + 1);

export const getSortFromParams = (sortBy: string) => {
	switch (sortBy) {
		case "PRICE":
			return "PRICE" as ProductSortBy;
		case "NAME":
			return "NAME" as ProductSortBy;
		default:
			return "DEFAULT" as ProductSortBy;
	}
};
export const getOrderFromParams = (order: string) => {
	switch (order) {
		case "ASC":
			return "ASC" as SortDirection;
		case "DESC":
			return "DESC" as SortDirection;
		default:
			return undefined;
	}
};
