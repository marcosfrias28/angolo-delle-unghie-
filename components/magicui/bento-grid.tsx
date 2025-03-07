import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

const imageCustomClass =
  "-right-20 -top-20 opacity-70 transition-all duration-500 mask-gradient object-cover min-w-full h-auto w-auto object-center";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full max-md:auto-rows-[40rem] auto-rows-[25rem] grid-cols-3 gap-10",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  src,
  Icon,
  description,
  href,
}: {
  name: string;
  className: string;
  src: StaticImageData;
  Icon: any;
  description: string;
  href?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
      // light styles
      "bg-gradient-to-b from-white dark:from-black/20 to-transparent dark:text-neutral-300  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu",
      className
    )}
  >
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={src.blurDataURL}
      className={cn(imageCustomClass)}
      fill
      sizes="auto"
      alt="laminazione"
    />
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
      <Icon className="size-16 origin-left transform-gpu text-neutral-700 dark:text-white transition-all duration-300 ease-in-out group-hover:scale-110 z-30" />
      <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-300 z-30">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-40 dark:from-black/90 dark:to-transparent z-30">
        {description}
      </p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
