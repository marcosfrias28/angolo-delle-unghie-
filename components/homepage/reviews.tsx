"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import { StandardHeader } from "../generic/standard-header";
interface Review {
  name: string;
  body: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Alice Rossi",
    body: "La mia estetista è fantastica! Le mie unghie sono sempre perfette e curate nei minimi dettagli. Consigliatissima!",
    rating: 5,
  },
  {
    name: "Luca Bianchi",
    body: "Ottimo servizio nel complesso. L'unica ragione per cui non do 5 stelle è che gli appuntamenti sono sempre pieni!",
    rating: 4,
  },
  {
    name: "Giulia Verdi",
    body: "Sono sbalordita da quanto velocemente la mia estetista riesce a fare le mie unghie. Una vera professionista!",
    rating: 5,
  },
  {
    name: "Marco Neri",
    body: "Il lavoro è ottimo, ma mi piacerebbe ci fossero più opzioni di colori tra cui scegliere.",
    rating: 3,
  },
  {
    name: "Elena Gialli",
    body: "La adoro! Le mie mani non sono mai state così belle. Raccomando vivamente il servizio!",
    rating: 5,
  },
  {
    name: "Francesco Blu",
    body: "Ero scettico all'inizio, ma la mia estetista ha superato ogni aspettativa. Ne vale assolutamente la pena!",
    rating: 4,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <ul className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "review-star",
            "w-4 h-4",
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </ul>
  );
};

const ReviewCard: React.FC<Review> = ({ name, body, rating }) => {
  return (
    <figure
      className={cn(
        "relative w-[250px] lg:w-[500px] min-h-fit overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <figcaption className="text-2xl md:text-3xl font-bold text-roseGold dark:text-roseGold-dark">
            {name}
          </figcaption>
          <StarRating rating={rating} />
        </div>
      </div>
      <blockquote className="mt-2 text-xl">{body}</blockquote>
    </figure>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="relative flex h-fit w-full flex-col gap-20 my-20 items-center justify-center overflow-hidden">
      <div>
        <StandardHeader
          position="center"
          description="Le più belle recensioni dei miei clienti, belle e brutte"
          className="text-5xl md:text-6xl font-bold text-center text-balance max-md:max-w-[70%] mx-auto"
        >
          Alcune recensioni dei miei clienti
        </StandardHeader>
      </div>
      <div>
        <Marquee pauseOnHover className="[--duration:20s] h-fit">
          {firstRow.map((review, i) => (
            <ReviewCard key={-i} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] h-fit">
          {secondRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewsSection;
