"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { motion } from "framer-motion";
import config from "@/config";
import { cn } from "@/lib/utils";
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

  // Definiamo un oggetto con le due possibili immagini e le condizioni per la loro visibilità
  const images = [
    {
      src: AngoloDelleUnghieDark,
      alt: `${config.websiteName} Logo (Dark)`,
      className: "hidden dark:flex",
    },
    {
      src: AngoloDelleUnghieLight,
      alt: `${config.websiteName} Logo (Light)`,
      className: "flex dark:hidden",
    },
  ];

  return images.map(({ src, alt, className: imageClass }, i) => (
    <div
      key={i}
      className={cn(
        "w-full h-full items-center justify-center pointer-events-none z-0",
        imageClass,
        className
      )}
    >
      <Image
        src={src}
        loading="eager"
        width={width + (isMobile ? 100 : 0)}
        height={height + (isMobile ? 100 : 0)}
        alt={alt}
      />
    </div>
  ));
};

export default Logo;
