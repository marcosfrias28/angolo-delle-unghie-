"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ScrollIcon({
  animIsActive = true,
  className,
}: {
  animIsActive?: boolean;
  className?: string;
}) {
  useGSAP(() => {
    if (!animIsActive) return;
    gsap.to(".hero-link-to-base", {
      duration: 3,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#cta",
        start: "top +=300px",
        end: "200px top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      className={cn(
        "hero-link-to-base",
        " p-3 mb-5 rounded-full flex items-start justify-center w-[30px] h-[60px] border-2 border-roseGold dark:border-white bg-transparent z-20",
        "absolute right-auto",
        animIsActive ? "bottom-0" : "top-0",
        className
      )}
    >
      <div className="bright">
        <div className="size-3 rounded-full bg-roseGold dark:bg-white animate-bounce-more"></div>
      </div>
    </div>
  );
}

export default ScrollIcon;
