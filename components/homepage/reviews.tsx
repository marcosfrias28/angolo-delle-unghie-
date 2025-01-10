import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import StandardHeading from "@/components/generic/standard-heading";
import config from "@/config";
import { getReviews } from "@/lib/actions/reviews";
import { Review } from "@/lib/db/schema";
import ReviewCard from "./review-card";

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
