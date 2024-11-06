"use client";

import { Article } from "@/lib/types";
import { unsplash } from "@/lib/utils/unsplash";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PagesGallery = () => {
  const [images, setImages] = useState<Article[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    unsplash({ query: "massages", page: currentPage, per_page: 12 })
      .then((res: any) => {
        setImages(res.results);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [currentPage]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-light dark:bg-rose">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">
          Galleria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            {images &&
              images
                .slice(0, 3)
                .map((src: Article, index) => (
                  <OptimisedImage key={index} image={src} index={index} />
                ))}
          </div>

          <div className="grid gap-4">
            {images &&
              images
                .slice(3, 6)
                .map((src: Article, index) => (
                  <OptimisedImage key={index + 3} image={src} index={index} />
                ))}
          </div>

          <div className="grid gap-4">
            {images &&
              images
                .slice(6, 9)
                .map((src: Article, index) => (
                  <OptimisedImage key={index + 6} image={src} index={index} />
                ))}
          </div>

          <div className="grid gap-4">
            {images &&
              images
                .slice(9, 12)
                .map((src: Article, index) => (
                  <OptimisedImage key={index + 9} image={src} index={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function OptimisedImage({ image, index }: { image: Article; index: number }) {
  return (
    <Image
      key={index}
      className="h-auto max-w-full rounded-lg"
      src={image.urls.small}
      width={300}
      height={300}
      alt={`Image ${index + 1}`}
    />
  );
}

export default PagesGallery;
