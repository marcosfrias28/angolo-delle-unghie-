"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export function StarRating({ rating, onRatingChange }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          name="rating"
          id="rating"
          className={cn(
            "w-8 h-8 cursor-pointer transition-colors",
            (hoverRating || rating) >= star
              ? "text-roseGold-light fill-roseGold-light"
              : "text-gray-300"
          )}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
}
