import { type ReviewItemFragment } from "@/gql/graphql";
import { ReviewItem } from "@/ui/molecules/ReviewItem";

export const ReviewList = ({ reviews }: { reviews: ReviewItemFragment[] }) => {
	return (
		<div className="w-full">
			{reviews.map((review) => (
				<ReviewItem review={review} key={review.id} />
			))}
		</div>
	);
};
