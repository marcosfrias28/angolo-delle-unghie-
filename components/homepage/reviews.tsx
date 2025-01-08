import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import StandardHeading from "@/components/generic/standard-heading";
import config from "@/config";
import { getReviews } from "@/lib/actions/reviews";
import { Review } from "@/lib/db/schema";
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

const ReviewCard: React.FC<Review> = ({ name, body, rating, created_at }) => {
  return (
    <figure
      className={cn(
        "relative w-[250px] lg:w-[500px] overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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
      <time className="absolute bottom-3 right-3 text-sm text-white">
        {created_at?.toLocaleDateString()}
      </time>
    </figure>
  );
};

const NoReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Miryam Pezzotta",
      body: "Non ci sono recensioni al momento. Controlla più tardi!",
      rating: "5",
      status: "idle",
      created_at: new Date(),
    },
  ];

  return (
    <div className="flex flex-col gap-[1rem] mx-auto mt-10 items-center justify-center min-w-[250px]">
      <ReviewCard {...reviews[0]} />
    </div>
  );
};

const ReviewsSection: React.FC = async () => {
  const reviews = await getReviews();
  return (
    <section className="relative w-full items-center justify-center overflow-hidden">
      <StandardHeading
        position="center"
        description={`Dai un'occhiata a quello che le persone pensano su ${config.websiteName}.`}
        className="text-5xl md:text-6xl font-bold text-center text-balance max-md:max-w-[70%] mx-auto"
      >
        Alcune recensioni di clienti abituali
      </StandardHeading>
      {!reviews || reviews?.length === 0 ? (
        <NoReviews />
      ) : (
        <div className="flex flex-col gap-[1rem] mx-auto mt-10">
          <Marquee pauseOnHover className="[--duration:20s] h-64">
            {reviews
              .slice(0, Math.ceil(reviews.length / 2))
              .map((review, i) => (
                <ReviewCard key={`first-${i}`} {...review} />
              ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] h-64">
            {reviews.slice(Math.ceil(reviews.length / 2)).map((review, i) => (
              <ReviewCard key={`second-${i}`} {...review} />
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
