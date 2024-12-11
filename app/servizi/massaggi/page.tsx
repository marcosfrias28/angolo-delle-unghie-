"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Article } from "@/lib/types";
import { set } from "zod";

const { title, description, features, images, ctaText, ctaLink } = {
  title: "Massaggi",
  description:
    "I massaggi offrono un’esperienza di rilassamento e benessere, ideale per alleviare lo stress e migliorare la circolazione. Dalla tecnica rilassante al massaggio terapeutico, ogni trattamento è personalizzato per rispondere alle esigenze specifiche del cliente, favorendo il rilassamento del corpo e della mente.",
  images: ["", ""],
  features: [
    "Massaggi rilassanti per ridurre lo stress",
    "Massaggi terapeutici per dolori muscolari",
    "Massaggi linfodrenanti per migliorare la circolazione",
    "Massaggi con oli essenziali per il benessere totale",
    "Trattamenti personalizzati per ogni necessità",
  ],
  ctaText: "Prenota il tuo massaggio",
  ctaLink: "#",
};

export default function MassaggiPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<Article[] | []>([]);

  const useImages = useCallback(async () => {
    console.log("data");
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-roseGold-light dark:bg-rose text-black">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-roseGold-metallic dark:bg-roseGold-dark">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                    {title}
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl">
                    {description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={ctaLink}>
                    <Button
                      size="lg"
                      className="bg-rose text-roseGold-light hover:bg-roseGold-dark dark:bg-roseGold-light dark:text-rose dark:hover:bg-roseGold-accent"
                    >
                      {ctaText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                {/* <Image
                  alt={title}
                  className="object-cover w-full h-full aspect-[9/14]"
                  height="600"
                  src={images[currentImageIndex]?.urls?.regular}
                  width="800"
                /> */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="bg-roseGold-light/80 text-rose hover:bg-roseGold-light"
                  >
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="bg-roseGold-light/80 text-rose hover:bg-roseGold-light"
                  >
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-accent dark:bg-roseGold-DEFAULT">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">
              Caratteristiche
            </h2>
            <ul className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-black"
                >
                  <svg
                    className="text-rose dark:text-roseGold-light"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-metallic dark:bg-roseGold-dark">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Pronta per provare le {title}?
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prenota ora il tuo appuntamento e lasciati conquistare dalla
                  bellezza delle tue nuove unghie.
                </p>
              </div>
              <Link href={ctaLink}>
                <Button
                  size="lg"
                  className="bg-rose text-roseGold-light hover:bg-roseGold-dark dark:bg-roseGold-light dark:text-rose dark:hover:bg-roseGold-accent"
                >
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
