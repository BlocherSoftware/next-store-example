import { type ReviewItemFragment } from "@/gql/graphql";
import { ReviewAuthor } from "@/ui/atoms/ReviewAuthor";

export const ReviewItem = ({ review }: { review: ReviewItemFragment }) => {
	return (
		<div className="mb-6 border-b-2 border-slate-100 pb-7">
			<ReviewAuthor author={review.author} rating={review.rating} />
			<h4 className="mb-1 font-semibold">{review.title}</h4>
			<p>{review.description}</p>
		</div>
	);
};
