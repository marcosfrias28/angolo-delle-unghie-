"use client";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  length: number;
  currentPosition: number;
  setCurrentPosition: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  length,
  currentPosition,
  setCurrentPosition,
}) => {
  if (!length) return null;

  return (
    <div className="flex gap-2 items-start self-stretch my-auto">
      {[...Array(length)].map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentPosition(index)}
          className={cn(
            "flex shrink-0 h-3 rounded-full transition-all duration-300 transform-gpu",
            "cursor-pointer",
            index === currentPosition
              ? "bg-black dark:bg-white w-6"
              : "bg-stone-300 dark:bg-roseGold w-3"
          )}
        />
      ))}
    </div>
  );
};

export default Pagination;
