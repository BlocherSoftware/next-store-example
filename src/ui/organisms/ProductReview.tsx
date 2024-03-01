import { ReviewByProductSlug } from "@/api/products";
import { ReviewFormPanel } from "@/ui/molecules/ReviewFormPanel";
import { ReviewList } from "@/ui/molecules/ReviewList";

export const ProductReview = async ({
	productId,
	productSlug,
}: {
	productId: string;
	productSlug: string;
}) => {
	const reviewData = await ReviewByProductSlug(productSlug);

	if (!reviewData) return null;

	return (
		<section className="my-10 flex gap-10">
			<ReviewFormPanel
				productId={productId}
				rating={reviewData.rating}
				numberOfReviews={reviewData.reviews.length}
			/>
			<ReviewList reviews={reviewData.reviews} />
		</section>
	);
};
