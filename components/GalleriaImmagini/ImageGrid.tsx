"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollToPlugin);

interface ImageGridProps {
  images: string[];
  currentPosition: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, currentPosition }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isMaximized, setIsMaximized] = useState<number | null>(null);

  useEffect(() => {}, []);

  useGSAP(() => {
    gsap.to(galleryRef.current, {
      duration: 2,
      ease: "power2",
      scrollTo: imagesRef.current[currentPosition],
    });
  }, [currentPosition]);

  return (
    <div
      ref={galleryRef}
      className="flex flex-nowrap gap-10 items-start max-md:max-w-full py-5 pr-[800px] overflow-hidden px-20"
    >
      <AnimatePresence>
        {isMaximized && (
          <motion.div
            key={isMaximized}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsMaximized(NaN)}
            className="fixed top-0 left-0 w-full h-full z-[999] flex items-center justify-center backdrop:blur-3xl"
          >
            <Image
              loading="lazy"
              src={images[isMaximized]}
              alt={`Nail art design ${isMaximized + 1}`}
              width={1000}
              height={1000}
              className="object-contain shrink-0 aspect-square rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {images.map((src, index) => (
        <Image
          key={index}
          id={`gallery-image-${index}`}
          ref={(el: HTMLImageElement | null) => {
            if (el) {
              imagesRef.current[index] = el as HTMLImageElement;
            }
          }}
          onClick={() => setIsMaximized(index)}
          loading="lazy"
          src={src}
          alt={`Nail art design ${index + 1}`}
          width={700}
          height={700}
          className="object-contain shrink-0 aspect-square rounded-2xl hover:scale-105 transition-transform transform-gpu duration-500 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
