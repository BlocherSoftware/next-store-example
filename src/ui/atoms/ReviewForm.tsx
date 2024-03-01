"use client";
import { useRef } from "react";
import { handleFormReviewAction } from "@/utils/serverActions";

export const ReviewForm = ({
	productId,
	children,
}: {
	productId: string;
	children: React.ReactNode;
}) => {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<form
			action={async (formData) => {
				await handleFormReviewAction(formData, productId);
				ref.current?.reset();
			}}
			className="w-4/12 max-w-sm"
			ref={ref}
			data-testid="add-review-form"
		>
			{children}
		</form>
	);
};
