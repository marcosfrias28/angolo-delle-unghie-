"use client";
import { useEffect, FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGalleryStore } from "@/lib/store/gallery-store";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";

interface NavigationButtonsProps {
  length: number;
}

const NavigationButtons: FC<NavigationButtonsProps> = ({ length }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { setCurrentPosition, currentPosition, isPaused, setIsPaused } =
    useGalleryStore();

  useEffect(() => {
    if (currentPosition > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [currentPosition]);

  useEffect(() => {
    if (isPaused) return;
    const autoPlay = setTimeout(() => {
      if (currentPosition + 1 === length) {
        setCurrentPosition(0);
        return;
      }
      setCurrentPosition(currentPosition + 1);
    }, 3000);
    return () => clearTimeout(autoPlay);
  }, [isPaused, currentPosition]);

  const previousImage = () => {
    if (currentPosition === 0) {
      setIsDisabled(true);
    } else {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const nextImage = () => {
    if (isDisabled) {
      setIsDisabled(false);
    }
    if (currentPosition + 1 === length) {
      setCurrentPosition(0);
    } else {
      setCurrentPosition(currentPosition + 1);
    }
  };
  return (
    <div className="flex gap-1 items-start self-stretch mb-2">
      <Button
        variant="ringHover"
        onClick={previousImage}
        className={cn(
          "flex gap-2 justify-center items-center px-3 w-12 h-12 bg-white border border-black border-solid rounded-[50px] text-black dark:hover:text-white",
          isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        )}
        aria-label="Previous"
      >
        <ArrowLeft className="object-contain self-stretch my-auto w-6 aspect-square" />
      </Button>
      <Button
        variant="ringHover"
        onClick={nextImage}
        className="flex gap-2 justify-center items-center px-3 w-12 h-12 bg-white border border-black border-solid rounded-[50px] text-black dark:hover:text-white"
        aria-label="Next"
      >
        <ArrowRight className="object-contain self-stretch my-auto w-6 aspect-square" />
      </Button>
      <Button
        variant="ringHover"
        onClick={() => setIsPaused(!isPaused)}
        className="flex gap-2 ml-4 justify-center items-center px-3 w-12 h-12 bg-white border border-black border-solid rounded-[50px] text-black dark:hover:text-white"
        aria-label="Next"
      >
        {isPaused ? (
          <Play className="object-contain self-stretch my-auto w-6 aspect-square" />
        ) : (
          <Pause className="object-contain self-stretch my-auto w-6 aspect-square" />
        )}
      </Button>
    </div>
  );
};

export default NavigationButtons;
