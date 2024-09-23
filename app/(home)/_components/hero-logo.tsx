"use client";

import Image from "next/image";
import { FC } from "react";
import config from "@/config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

interface HeroLogoProps {
  imageSrc: string;
  className?: string;
}

const HeroLogo: FC<HeroLogoProps> = ({ imageSrc, className }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".logo",
      { scale: 0.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#cta",
      { scale: 0.1, opacity: 0 },
      { scale: 1, opacity: 1, delay: 0.5, duration: 1 }
    );
  }, []);

  return (
    <div className={cn("w-full h-full", className)}>
      <Image
        src={imageSrc}
        width={800}
        height={800}
        className="logo opacity-0"
        alt={`${config.websiteName} Logo`}
      />
    </div>
  );
};

export default HeroLogo;
