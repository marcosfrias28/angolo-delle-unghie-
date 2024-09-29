"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const petalImages = [
  {
    src: "/petali/p1.webp",
    y: -97,
    x: 60.23076923076923,
  },
  {
    src: "/petali/p12.webp",
    y: -19,
    x: 120.46153846153847,
  },
  {
    src: "/petali/p2.webp",
    y: -41,
    x: 180.6923076923077,
  },
  {
    src: "/petali/p3.webp",
    y: 329,
    x: 240.92307692307693,
  },
  {
    src: "/petali/p9.webp",
    y: 50,
    x: 301.1538461538462,
  },
  {
    src: "/petali/p4.webp",
    y: 26,
    x: 361.3846153846154,
  },
  {
    src: "/petali/p10.webp",
    y: -96,
    x: 421.61538461538464,
  },
  {
    src: "/petali/p5.webp",
    y: -16,
    x: 481.84615384615387,
  },
  {
    src: "/petali/p8.webp",
    y: 34,
    x: 542.0769230769231,
  },
  {
    src: "/petali/p6.webp",
    y: -203,
    x: 602.3076923076924,
  },
  {
    src: "/petali/p7.webp",
    y: -231,
    x: 662.5384615384615,
  },
  {
    src: "/petali/p11.webp",
    y: -29,
    x: 722.7692307692308,
  },
];

export default function FallingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    console.log("ref", containerRef.current);
    if (!containerRef.current || petalImages.length === 0) return;

    const container = containerRef.current;

    const fallDuration = Math.floor(Math.random() * 10 + 15) + "s";

    petalImages.map((petal, index) => {
      const petalElement = containerRef.current?.querySelector(
        `#petal-${index}`
      ) as HTMLElement;
      if (!petalElement) return;

      tl.set(petalElement, {
        y: -1000,
      });

      tl.to(petalElement, {
        y: container.clientHeight - 300,
        rotation: `+=${Math.random() * 720 - 360}`,
        ease: "none",
        duration: fallDuration,
        scrollTrigger: {
          trigger: container,
          start: "20% bottom",
          end: "90% center",
          markers: true,
          onUpdate: (self) => {
            const swayAmount = 50; // Aumenta l'oscillazione
            const sway = Math.sin(self.progress * Math.PI * 2) * swayAmount; // Oscillazione da -swayAmount a swayAmount
            gsap.to(petalElement, {
              x: petal.x + sway, // Usa un valore numerico per x
              duration: 0.1, // Riduci la durata per movimenti più fluidi
              ease: "none",
            });
          },
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-[3000px] overflow-hidden flex flex-col flex-nowrap py-96 justify-between bg-gradient-to-b from-transparent to-roseGold -mt-5"
    >
      <h3
        className={cn(
          "mx-auto text-center text-black dark:text-white",
          "text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
        )}
      >
        UNGHIE
      </h3>
      <h3
        className={cn(
          "mx-auto text-center text-black dark:text-white",
          "text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
        )}
      >
        PERFETTE
      </h3>
      <h3
        className={cn(
          "mx-auto text-center text-black dark:text-white",
          "text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
        )}
      >
        SEMPRE
      </h3>
      <div className="absolute top-0 w-screen h-full">
        {petalImages.map((petalo, index) => (
          <Image
            key={index}
            id={`petal-${index}`}
            src={petalo.src}
            alt={`Petal ${index + 1}`}
            width={200}
            height={200}
            className={cn(
              "absolute z-20 size-20 md:size-40 lg:size-60 xl:size-80 w-auto h-auto",
              `drop-shadow-2xl`
            )}
            style={{
              left: `${petalo.x}px`,
              top: `${petalo.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
