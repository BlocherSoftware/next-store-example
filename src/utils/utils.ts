export const priceFormatter = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const pageNumberToPageNumberArray = (pages: number) =>
	new Array<number>(pages).fill(0).map((_, index) => index + 1);
