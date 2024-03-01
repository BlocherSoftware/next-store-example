"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { Route } from "next";
import { type ReactNode } from "react";

export function ActiveLink<T extends string>({
	href,
	activeClassName,
	className,
	exact = true,
	children,
	...rest
}: {
	href: Route<T> | URL;
	activeClassName?: string;
	className?: string;
	exact?: boolean;
	children: ReactNode;
} & Omit<LinkProps<T>, "href">) {
	const path = usePathname();
	const hrefWithoutSearchParams = href.toString().split("?")[0];
	const isActive = exact
		? path === hrefWithoutSearchParams
		: path.startsWith(hrefWithoutSearchParams);

	return (
		<Link
			href={href}
			className={clsx(isActive && activeClassName, className)}
			aria-current={isActive ? "page" : undefined}
			{...rest}
		>
			{children}
		</Link>
	);
}
