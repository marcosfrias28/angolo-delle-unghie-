"use client";

import Image from "next/image";
import { FC } from "react";
import config from "@/config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface HeroLogoProps {
  imageSrc: string;
  className?: string;
}

const HeroLogo: FC<HeroLogoProps> = ({ imageSrc, className }) => {
  return (
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
      className={cn("w-full h-full", className)}
    >
      <Image
        src={imageSrc}
        width={800}
        height={800}
        alt={`${config.websiteName} Logo`}
      />
    </motion.div>
  );
};

export default HeroLogo;
