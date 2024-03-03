import { Star } from "lucide-react";

const stars = [5, 4, 3, 2, 1];

export const StarRating = ({ rating = 0 }: { rating?: number }) => {
	return (
		<div className="stars-rating flex flex-row-reverse justify-end">
			<span data-testid="product-rating ">{rating.toFixed(1)}</span>
			{stars.map((star) => (
				<Star
					width={24}
					height={24}
					key={star}
					className={star <= rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}
				/>
			))}
		</div>
	);
};
