import { StarRating } from "@/ui/atoms/StarRating";

export const ReviewAuthor = ({ author, rating }: { author: string; rating: number }) => (
	<div className="mb-3">
		<span className="text-sm font-semibold">{author}</span>
		<StarRating rating={Math.ceil(rating)} />
	</div>
);
