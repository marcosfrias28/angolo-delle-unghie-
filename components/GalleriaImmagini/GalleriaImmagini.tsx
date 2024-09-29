"use client";
import React from "react";
import ImageGrid from "./ImageGrid";
import Pagination from "./Pagination";
import NavigationButtons from "./NavigationButtons";
import { useState } from "react";

const images = [
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
  "/estetica-bg.jpg",
];

const GalleriaImmagini: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  return (
    <section className="flex overflow-hidden flex-col items-start py-28 pl-16 max-md:py-24 max-md:pl-5">
      <header
        aria-labelledby="gallery-header"
        id="gallery-header"
        className="flex flex-col max-w-full text-black dark:text-white w-[768px]"
      >
        <h1 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          Galleria Immagini
        </h1>
        <p className="mt-6 text-lg max-md:max-w-full">
          Scopri le nostre creazioni uniche di nail art.
        </p>
      </header>
      <section className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
        <ImageGrid images={images} currentPosition={currentPosition} />
        <div className="flex flex-wrap gap-10 justify-between lg:justify-center lg:gap-20 items-center mt-12 w-full max-md:mt-10 px-10">
          <Pagination
            length={images.length}
            setCurrentPosition={setCurrentPosition}
            currentPosition={currentPosition}
          />
          <NavigationButtons
            length={images.length}
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
          />
        </div>
      </section>
    </section>
  );
};

export default GalleriaImmagini;
