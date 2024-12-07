"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  position?: "left" | "right" | "center";
  description?: string;
  className?: string;
}

export function StandardHeader({
  title,
  position = "left",
  description,
  className,
}: Props) {
  return (
    <motion.header
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, once: true }}
      aria-labelledby={title}
      className={cn(
        "dark:[filter:url(#blur-and-scale)] z-30",
        // Layout
        "flex flex-col max-w-full",
        // Text colors
        "text-rose dark:text-white",
        // Spacing
        " py-6 px-3",
        // Positioning
        position === "left" && "items-start",
        position === "right" && "items-end",
        position === "center" && "items-center",
        className
      )}
    >
      <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
    </motion.header>
  );
}
