"use client";
import { Search } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const Serachbar = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [search, setSearch] = useState("");
	const searchRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const query = params.get("query");
		if (query) setSearch(query);
		else setSearch("");
	}, [params]);

	const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		if (searchRef.current) clearTimeout(searchRef.current);

		const timeout = setTimeout(async () => {
			router.push(`/search?query=${e.target.value}`);
		}, 500);

		searchRef.current = timeout;
	}, []);

	return (
		<div className="relative w-80">
			<input
				type="text"
				placeholder="Search for products"
				className="s w-full border-b-2 border-gray-700 p-2"
				onChange={handleSearch}
				value={search}
			/>
			<Search className="absolute right-0 top-2" />
		</div>
	);
};
