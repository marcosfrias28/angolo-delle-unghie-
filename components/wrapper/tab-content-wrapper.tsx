import { Review } from "@/lib/db/schema";
import { TabsContent } from "../ui/tabs";
import { cn } from "@/lib/utils";
import ReviewCard from "../homepage/review-card";
import { Checkbox } from "../ui/checkbox";

export const TabContentWrapper = ({
  value,
  reviews,
  handleSelection,
  selectedReviews,
}: {
  value: "all" | "accepted" | "rejected" | "idle";
  reviews: Review[];
  handleSelection: (id: string) => void;
  selectedReviews: string[];
}) => {
  return (
    <TabsContent
      className={cn(
        "grid",
        "gap-5",
        "grid-cols-2 max-sm:grid-cols-1 grid-rows-auto"
      )}
      value={value}
    >
      {reviews.map((review) => (
        <div
          key={review.id}
          onClick={() => handleSelection(review.id.toString())}
          className="relative hover:bg-white/20 transition-colors duration-400 bg-black/1 group p-4 flex flex-col items-center justify-between gap-5 border-2 border-black/20 dark:border-white/10 rounded-xl"
        >
          <div className="flex flex-row flex-nowrap w-full items-center gap-2">
            <ReviewCard className=" pointer-events-none" {...review} />
            <Checkbox
              className="size-7 absolute right-2 bottom-2"
              checked={selectedReviews.includes(review.id.toString())}
            />
          </div>
          <span
            className={cn(
              review.status === "idle"
                ? "text-yellow-500"
                : review.status === "accepted"
                ? "text-green-500"
                : "text-red-500"
            )}
          >
            {review.status === "idle"
              ? "In attesa"
              : review.status === "accepted"
              ? "Accettata"
              : "Rifiutata"}
          </span>
        </div>
      ))}
    </TabsContent>
  );
};

export default TabContentWrapper;
