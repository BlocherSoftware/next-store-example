"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { PRODUCT_PER_PAGE } from "@/utils/constants";

export const Pagination = async ({
	activePage,
	totalProducts,
}: {
	activePage: number;
	totalProducts: number;
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const pages = Math.ceil(totalProducts / PRODUCT_PER_PAGE);

	const addDots = (id: string) => (
		<li key={`pagination-page-${id}`} className="mr-2">
			...
		</li>
	);

	const addPageLink = (page: number) => {
		const pathnameArr = pathname.split("/");
		pathnameArr.fill(String(page), -1).join("/");
		return (
			<li key={`pagination-page-${page}`} className="mr-2">
				<ActiveLink
					href={`${pathnameArr.fill(String(page), -1).join("/")}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`}
					activeClassName="text-decoration-line: underline"
				>
					{page}
				</ActiveLink>
			</li>
		);
	};

	const generatePaginationList = (pages: number) => {
		const pagination = [];
		if (pages < 3) {
			for (let i = 1; i <= pages; i++) {
				if (i > 0) pagination.push(addPageLink(i));
			}
			return pagination;
		}

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

	return (
		<ul className="mt-5 flex justify-center" aria-label="pagination">
			{generatePaginationList(pages)}
		</ul>
	);
};
