/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex overflow-hidden gap-1 items-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          loading="lazy"
          src={`http://b.io/ext_${star <= rating ? "1" : "10"}-`}
          alt={star <= rating ? "Filled star" : "Empty star"}
          className="object-contain shrink-0 w-5 aspect-[1.05]"
        />
      ))}
    </div>
  );
};

export default StarRating;
