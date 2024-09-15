"use client";

import Image from "next/image";
import { FC } from "react";
import config from "@/config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface HeroLogoProps {
  direction: "left" | "right";
  imageSrc: string;
}

const HeroLogo: FC<HeroLogoProps> = ({ direction, imageSrc }) => {
  const isLeft = direction === "left";
  useGSAP(() => {
    gsap.fromTo(
      ".banner-letter",
      { scale: 0.1, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div
      className={cn(
        "hero-logo",
        "[width:50vw] h-screen overflow-hidden grid",
        isLeft
          ? "bg-gradient-to-b from-roseGold-metallic from-70% to-transparent"
          : "bg-gradient-to-b from-warmWhite from-70% to-transparent"
      )}
    >
      <div
        className={cn(
          "w-screen pl-14 md:pl-28 flex justify-center items-center",
          !isLeft ? "-translate-x-1/2" : ""
        )}
      >
        <span className={cn("banner-letter opacity-0 inline-block")}>
          <Image
            src={imageSrc}
            width={1000}
            height={400}
            alt={`${config.websiteName} Logo`}
          />
        </span>
      </div>
    </div>
  );
};

export default HeroLogo;
