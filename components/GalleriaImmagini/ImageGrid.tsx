"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useGalleryStore } from "@/lib/store/gallery-store";

gsap.registerPlugin(ScrollToPlugin);

interface ImageGridProps {
  images: StaticImageData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { currentPosition, setIsPaused } = useGalleryStore();
  const isVisible = useInView(galleryRef);

  useEffect(() => {
    if (isVisible) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }, [isVisible]);

  useGSAP(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gsap.to(gallery, {
      duration: 2,
      ease: "power2",
      scrollTo: imagesRef.current[currentPosition],
    });
  }, [currentPosition]);

  return (
    <div
      ref={galleryRef}
      className="flex flex-nowrap gap-5 lg:gap-10 items-start w-screen mt-20 pr-0 mx-auto lg:pr-[1500px] overflow-hidden "
    >
      {images.map((src, index) => (
        <Image
          key={index}
          id={`gallery-image-${index}`}
          ref={(el: HTMLImageElement | null) => {
            if (el) {
              imagesRef.current[index] = el as HTMLImageElement;
            }
          }}
          placeholder="blur"
          src={src}
          alt={`Nail art design ${index + 1}`}
          width={600}
          height={800}
          className={cn(
            "max-md:h-[500px] h-[750px] max-md:min-w-[350px] md:min-w-[500px] w-auto object-cover object-center shrink-0 aspect-auto rounded-xl transition-all duration-500 transform-gpu ease-in-out",
            currentPosition === index
              ? `grayscale-0 ${index !== images.length - 1 ? "delay-1000" : ""}`
              : `grayscale ${index !== images.length - 2 ? "delay-1000" : ""}`
          )}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
