import { getProductListAll } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { PRODUCT_PER_PAGE } from "@/utils/constants";

export const Pagination = async ({ activePage }: { activePage: number }) => {
	const data = await getProductListAll();
	const pages = Math.ceil(data.length / PRODUCT_PER_PAGE);

	const addDots = (id: string) => (
		<li key={`pagination-page-${id}`} className="mr-2">
			...
		</li>
	);

	const addPageLink = (page: number) => (
		<li key={`pagination-page-${page}`} className="mr-2">
			<ActiveLink
				href={`/products/${page}`}
				activeClassName="text-decoration-line: underline"
				aria-label="pagination"
			>
				{page}
			</ActiveLink>
		</li>
	);

	const generatePaginationList = (pages: number) => {
		const pagination = [];

		if (activePage < 3) {
			for (let i = activePage - 1; i <= 3; i++) {
				if (i > 0) pagination.push(addPageLink(i));
			}
			pagination.push(addDots("dots"), addPageLink(pages));
		} else if (activePage >= 3 && activePage <= pages - 2) {
			pagination.push(addPageLink(1), addDots("dots-1"));
			for (let i = activePage - 1; i <= activePage + 1; i++) {
				pagination.push(addPageLink(i));
			}
			pagination.push(addDots("dots-2"), addPageLink(pages));
		} else if (activePage > pages - 2) {
			pagination.push(addPageLink(1), addDots("dots"));
			for (let i = pages - 2; i <= pages; i++) {
				pagination.push(addPageLink(i));
			}
		}

		return pagination;
	};

	return <ul className="mt-5 flex justify-center">{generatePaginationList(pages)}</ul>;
};
