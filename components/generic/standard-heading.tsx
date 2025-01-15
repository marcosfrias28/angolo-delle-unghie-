"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  position?: "left" | "right" | "center";
  description?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "big" | "large";
}

function StandardHeading({
  title,
  position = "left",
  description,
  className,
  children,
  size,
}: Props) {
  const textSize = () => {
    if (!size) return "text-5xl";
    if (size === "small") return "text-4xl";
    if (size === "medium") return "text-6xl";
    if (size === "big") return "text-7xl";
    if (size === "large") return "text-8xl";
  };

  return (
    <motion.header
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      aria-labelledby={title}
      className={cn(
        "relative",
        // Layout
        "flex flex-col max-w-full",
        // Text colors
        "text-rose dark:text-white",
        // Spacing
        "py-6 px-3 max-lg:pb-8 max-lg:pt-24 lg:mb-10",
        // Positioning
        position === "left" && "items-start",
        position === "right" && "items-end",
        position === "center" && "items-center",
        className
      )}
    >
      <h2
        className={cn(
          "z-10",
          "font-bold leading-tight max-md:max-w-full max-md:text-4xl text-center w-full",
          textSize()
        )}
      >
        {children ? children : title}
      </h2>
      <h2
        className={cn(
          "absolute left-1/2 -translate-x-1/2 z-0 blur-md",
          "font-bold leading-tight max-md:max-w-full max-md:text-4xl text-center w-full",
          textSize()
        )}
      >
        {children ? children : title}
      </h2>
      <p className="mt-6 text-xl max-md:max-w-full font-medium">
        {description}
      </p>
    </motion.header>
  );
}

export default StandardHeading;
