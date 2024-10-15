"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ScrollIcon() {
  useGSAP(() => {
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
    <div className="hero-link-to-base absolute p-3  bottom-0 right-5 lg:right-auto mb-5 rounded-full flex items-start justify-center w-[30px] h-[60px] border-2 border-roseGold dark:border-white bg-transparent z-50">
      <div className="bright">
        <div className="size-3 rounded-full bg-roseGold dark:bg-white animate-bounce-more"></div>
      </div>
    </div>
  );
}

export default ScrollIcon;
