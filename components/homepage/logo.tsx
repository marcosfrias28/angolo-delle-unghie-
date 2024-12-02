"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { motion } from "framer-motion";
import config from "@/config";
import { cn } from "@/lib/utils";
import React from "react";
import AngoloDelleUnghieDark from "@/public/angolodelleunghie-rose.svg";
import AngoloDelleUnghieLight from "@/public/angolodelleunghie.svg";

interface HeroLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

const Logo: React.FC<HeroLogoProps> = ({
  className,
  width = 500,
  height = 500,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return [...Array(2)].map((_, i) => (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn(
        "w-full h-full items-center justify-center",
        i === 0 ? "hidden dark:flex" : "flex dark:hidden",
        className
      )}
    >
      <Image
        src={i === 0 ? AngoloDelleUnghieDark : AngoloDelleUnghieLight}
        width={isMobile ? width : width + 200}
        height={isMobile ? height : height + 200}
        alt={`${config.websiteName} Logo`}
      />
    </motion.div>
  ));
};

export default Logo;
