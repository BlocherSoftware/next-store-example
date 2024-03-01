import { StarRating } from "@/ui/atoms/StarRating";
import { StarRatingForm } from "@/ui/atoms/StarRatingForm";
import { ReviewForm } from "@/ui/atoms/ReviewForm";

export const ReviewFormPanel = ({
	productId,
	rating,
	numberOfReviews,
}: {
	productId: string;
	rating: number | null | undefined;
	numberOfReviews: number;
}) => {
	return (
		<ReviewForm productId={productId}>
			<div className="mb-8">
				<h4 className="mb-2 text-2xl">Customer Reviews</h4>
				{rating && (
					<div className="flex gap-2 align-middle">
						<StarRating rating={Math.ceil(rating)} />
						based on {numberOfReviews} reviews
					</div>
				)}
			</div>

			<div className="mb-3 flex flex-col ">
				<label htmlFor="review" className="text-xs text-gray-700">
					Review title
				</label>
				<input
					required
					type="text"
					name="headline"
					className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div className="mb-3 flex flex-col">
				<label htmlFor="review" className="text-xs text-gray-700">
					Review content
				</label>
				<textarea
					required
					name="content"
					className="mt-1 block w-full rounded-md border-gray-300  px-3 py-2  text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div className="mb-3 flex flex-col">
				<label htmlFor="rating" className="mb-1 text-xs text-gray-700">
					Rating
				</label>
				<StarRatingForm rating={1} />
			</div>
			<div className="mb-3 flex flex-col">
				<label htmlFor="review" className="text-xs text-gray-700">
					Name
				</label>
				<input
					required
					type="text"
					name="name"
					className="mt-1 block w-full rounded-md border-gray-300  px-3 py-2  text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div className="mb-3 flex flex-col">
				<label htmlFor="review" className="text-xs text-gray-700">
					Email
				</label>
				<input
					required
					type="email"
					name="email"
					className="mt-1 block w-full rounded-md border-gray-300  px-3 py-2  text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>

			<button
				type="submit"
				className="mt-5 w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:bg-stone-500"
			>
				Submit
			</button>
		</ReviewForm>
	);
};
