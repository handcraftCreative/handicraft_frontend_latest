import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratingstar = ({ rating, totalStars = 5 }) => {
	// Ensure rating is within the valid range
	const validRating = Math.max(0, Math.min(rating, totalStars));

	const fullStars = Math.floor(validRating);
	const hasHalfStar = validRating % 1 !== 0;
	const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			{/* Full Stars */}
			{fullStars > 0 &&
				Array(fullStars)
					.fill()
					.map((_, i) => <FaStar key={`full-${i}`} color="#ffc107" />)}

			{/* Half Star */}
			{hasHalfStar && <FaStarHalfAlt color="#ffc107" />}

			{/* Empty Stars */}
			{emptyStars > 0 &&
				Array(emptyStars)
					.fill()
					.map((_, i) => <FaRegStar key={`empty-${i}`} color="#ffc107" />)}
		</div>
	);
};

export default Ratingstar;
