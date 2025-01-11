import { Review } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { format } from "@formkit/tempo";
import { Star } from "lucide-react";

const StarRating: React.FC<{ rating: string }> = ({ rating }) => {
  return (
    <ul className="flex" aria-label={`Valutazione: ${rating} su 5 stelle`}>
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <Star
            className={cn(
              "review-star",
              "w-4 h-4",
              index < Number(rating)
                ? "text-roseGold-light fill-roseGold-light"
                : "text-gray-300"
            )}
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
};

interface ReviewCardProps extends Review {
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  body,
  rating,
  created_at,
  className,
}) => {
  return (
    <figure
      className={cn(
        "relative w-[250px] lg:w-[500px] overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <figcaption className="text-2xl md:text-3xl font-bold text-roseGold dark:text-roseGold-dark">
            {name}
          </figcaption>
          <StarRating rating={rating || "0"} />
        </div>
      </div>
      <blockquote className="mt-2 text-xl text-ellipsis overflow-hidden max-h-36">
        {body}
      </blockquote>
      <time className="absolute bottom-3 right-3 text-sm text-black dark:text-white">
        {format(created_at ? created_at : new Date(), "long", "it")}
      </time>
    </figure>
  );
};

export default ReviewCard;
