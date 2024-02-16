"use client";

import Link from "next/link";
// import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { Route } from "next";
import { type ReactNode } from "react";

enum AriaCurrent {
	TRUE = "true",
	FALSE = "false",
	PAGE = "page",
	STEP = "step",
	Location = "location",
	DATE = "date",
	TIME = "time",
}

export function ActiveLink<T extends string>({
	href,
	activeClassName,
	className,
	exact = true,
	children,
	...rest
}: {
	href: Route<T> | URL;
	activeClassName: string;
	className?: string;
	exact?: boolean;
	children: ReactNode;
}) {
	const path = usePathname();
	const isActive = exact ? path === href : path.includes(href.toString());

	return (
		<Link
			href={href}
			className={clsx(isActive && activeClassName, className)}
			aria-current={isActive ? (exact ? AriaCurrent.PAGE : AriaCurrent.TRUE) : AriaCurrent.FALSE}
			{...rest}
		>
			{children}
		</Link>
	);
}
