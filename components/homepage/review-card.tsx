import { Review } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { format } from "@formkit/tempo";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

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
    <Dialog>
      <DialogTrigger
        className={cn(
          "relative w-[250px] lg:w-[500px] overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          "flex flex-col justify-between items-center",
          className
        )}
      >
        <ReviewHeader name={name} rating={rating} />
        <ReviewBody body={body} />
        <ReviewFooter date={created_at} />
      </DialogTrigger>
      <DialogContent className="w-screen h-screen p-20 rounded-[50px]">
        <DialogHeader>
          <ReviewHeader name={name} rating={rating} />
        </DialogHeader>
        <DialogDescription>
          <ReviewBody body={body} />
        </DialogDescription>
        <DialogFooter>
          <ReviewFooter date={created_at} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ReviewHeader: React.FC<{
  name: string | null;
  rating: string | null;
}> = ({ name, rating }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <figcaption className="text-xl md:text-3xl font-bold text-roseGold dark:text-roseGold-dark">
          {name}
        </figcaption>
        <StarRating rating={rating || "0"} />
      </div>
    </div>
  );
};

const ReviewFooter: React.FC<{ date: Date | null }> = ({ date }) => {
  return (
    <time className="absolute bottom-3 right-3 text-sm text-black dark:text-white">
      {format(date ? date : new Date(), "long", "it")}
    </time>
  );
};

const ReviewBody: React.FC<{ body: string | null }> = ({ body }) => {
  return (
    <blockquote className="mt-2 text-xl text-ellipsis overflow-hidden max-h-36">
      “{body}”
    </blockquote>
  );
};

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

export default ReviewCard;
