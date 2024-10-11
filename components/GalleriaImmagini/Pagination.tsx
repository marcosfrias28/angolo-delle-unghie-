"use client";

import { cn } from "@/lib/utils";
import { useGalleryStore } from "@/lib/store/gallery-store";
import { motion } from "framer-motion";

interface PaginationProps {
  length: number;
}

const Pagination: React.FC<PaginationProps> = ({ length }) => {
  if (!length) return null;
  const { currentPosition, setCurrentPosition } = useGalleryStore();

  return (
    <div className="flex gap-2 items-start self-stretch my-auto">
      {[...Array(length)].map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentPosition(index)}
          className={cn(
            "flex shrink-0 size-2 rounded-full overflow-hidden transition-all duration-300 transform-gpu",
            "cursor-pointer",
            index === currentPosition ? "w-10" : "size-2",
            "relative bg-roseGold"
          )}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={
              index === currentPosition
                ? {
                    width: "100%",
                    transitionDuration: "3s",
                  }
                : { width: "0%" }
            }
            id="background-position-x"
            className={cn(
              "absolute top-0 left-0 h-full w-full transition-all duration-300 transform-gpu",
              index === currentPosition
                ? "bg-roseGold-light dark:bg-white w-6"
                : "bg-stone-300 dark:bg-roseGold w-3"
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Pagination;
