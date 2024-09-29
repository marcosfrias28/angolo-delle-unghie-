"use client";
import { useEffect, FC, useState, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationButtonsProps {
  setCurrentPosition: Dispatch<SetStateAction<number>>;
  length: number;
  currentPosition: number;
}

const NavigationButtons: FC<NavigationButtonsProps> = ({
  setCurrentPosition,
  length,
  currentPosition,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (currentPosition > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [currentPosition]);

  const previousImage = () => {
    setCurrentPosition((prev) => {
      if (prev === 0) {
        setIsDisabled(true);
        return 0;
      }
      return prev - 1;
    });
  };

  const nextImage = () => {
    if (isDisabled) {
      setIsDisabled(false);
    }

    setCurrentPosition((prev) => {
      if (prev + 1 === length) {
        return 0;
      }
      return prev + 1;
    });
  };
  return (
    <div className="flex gap-4 items-start self-stretch my-auto">
      <Button
        variant="ringHover"
        onClick={previousImage}
        className={cn(
          "flex gap-2 justify-center items-center px-3 w-12 h-12 bg-white border border-black border-solid rounded-[50px]",
          isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        )}
        aria-label="Previous"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3841f420e4edfdc173cc2149d377fa621246da26e67fffb2dc86ea5ee22b81ac?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234"
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </Button>
      <Button
        variant="ringHover"
        onClick={nextImage}
        className="flex gap-2 justify-center items-center px-3 w-12 h-12 bg-white border border-black border-solid rounded-[50px]"
        aria-label="Next"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54fe5f9fd50db6211a001135f66c986549b8b8b5d065a75f6f0f460ae58c03e?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234"
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </Button>
    </div>
  );
};

export default NavigationButtons;
