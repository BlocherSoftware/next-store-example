"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const ProductListSort = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getSortFromParams = useCallback(() => {
		const sortBy = searchParams.get("sortBy");
		const order = searchParams.get("order");
		if (!sortBy && !order) {
			return "DEFAULT";
		}

		return `${sortBy}/${order}`;
	}, [searchParams]);

	const handleSortChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const [sortBy, order] = e.target.value.split("/");
			if (sortBy === "DEFAULT") {
				const params = new URLSearchParams(searchParams.toString());
				params.delete("sortBy");
				params.delete("order");
				router.push(pathname + "?" + params.toString());
				return;
			}
			const params = new URLSearchParams(searchParams.toString());
			params.set("sortBy", sortBy);
			params.set("order", order);
			router.push(pathname + "?" + params.toString());
		},
		[pathname, router, searchParams],
	);

	return (
		<div className="mb-5 flex items-center justify-between">
			<div>
				<label htmlFor="sort">Sort by:</label>
				<select id="sort" className="ml-2" value={getSortFromParams()} onChange={handleSortChange}>
					<option value="DEFAULT">Default</option>
					<option value="NAME/ASC">Name (A-Z)</option>
					<option value="NAME/DESC">Name (Z-A)</option>
					<option value="PRICE/ASC" data-testid="sort-by-price">
						Price (Low to High)
					</option>
					<option value="PRICE/DESC">Price (High to Low)</option>
					<option value="RATING/ASC" data-testid="sort-by-rating">
						Rating (Low to High)
					</option>
					<option value="RATING/DESC">Rating (High to Low)</option>
				</select>
			</div>
		</div>
	);
};
