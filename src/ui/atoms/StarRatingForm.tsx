"use client";
import { Star } from "lucide-react";
import { useState } from "react";

type StarRatingAvailable = 0 | 1 | 2 | 3 | 4 | 5;
const stars = [5, 4, 3, 2, 1];

export const StarRatingForm = ({ rating = 0 }: { rating?: StarRatingAvailable }) => {
	const [newRating, setNewRating] = useState<number>(rating);
	return (
		<fieldset className="stars-rating flex flex-row-reverse justify-end">
			{stars.map((star) => (
				<>
					<input
						required
						id={`rating-${star}`}
						type="radio"
						value={star}
						name="rating"
						checked={star === newRating}
						className="sr-only"
						onChange={(e) => {
							setNewRating(Number(e.target.value));
						}}
					/>
					<label
						htmlFor={`rating-${star}`}
						className={`peer cursor-pointer [&>svg]:hover:fill-yellow-400 [&>svg]:hover:stroke-yellow-400 [&>svg]:peer-hover:fill-yellow-400 [&>svg]:peer-hover:stroke-yellow-400 ${
							star <= newRating
								? "[&>svg]:fill-yellow-400 [&>svg]:stroke-yellow-400"
								: "[&>svg]:stroke-gray-300"
						}`}
					>
						<Star width={24} height={24} key={star} />
					</label>
				</>
			))}
		</fieldset>
	);
	// return (
	// 	<div>
	// 		<input type="number" value="1" name="rating" />
	// 		<Star className={`stroke-gray-300 hover:fill-yellow-400 hover:stroke-yellow-400`} />
	// 		<input type="number" value="2" name="rating" />
	// 		<Star className="stroke-gray-300 hover:fill-yellow-400 hover:stroke-yellow-400" />
	// 		<input type="number" value="3" name="rating" />
	// 		<Star className="stroke-gray-300 hover:fill-yellow-400 hover:stroke-yellow-400" />
	// 		<input type="number" value="4" name="rating" />
	// 		<Star className="stroke-gray-300 hover:fill-yellow-400 hover:stroke-yellow-400" />
	// 		<input type="number" value="5" name="rating" />
	// 		<Star className="stroke-gray-300 hover:fill-yellow-400 hover:stroke-yellow-400" />
	// 	</div>
	// );
};
