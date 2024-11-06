"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const title = "Massaggi";
  const description =
    "I massaggi offrono un’esperienza di rilassamento e benessere, ideale per alleviare lo stress e migliorare la circolazione. Dalla tecnica rilassante al massaggio terapeutico, ogni trattamento è personalizzato per rispondere alle esigenze specifiche del cliente, favorendo il rilassamento del corpo e della mente.";
  const ctaText = "Prenota il tuo massaggio";
  const ctaLink = "#";

  return (
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
            <Image
              alt={title}
              className="object-cover w-full h-full aspect-[9/14]"
              height="600"
              src={images[currentImageIndex]?.urls?.regular}
              width="800"
            />
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
  );
};

export default CTASection;
