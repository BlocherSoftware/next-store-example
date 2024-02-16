"use client";

import Link from "next/link";
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
	activeClassName: string;
	className?: string;
	exact?: boolean;
	children: ReactNode;
}) {
	const path = usePathname();
	const isActive = exact ? path === href : path.startsWith(href as string);

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
