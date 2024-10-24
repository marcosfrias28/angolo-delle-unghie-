"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NailTypePage({
  title = "Unghie Gel",
  description = "Le unghie gel sono una scelta popolare per chi desidera una manicure duratura e dall'aspetto naturale. Questo tipo di unghie offre una finitura lucida e resistente che può durare fino a tre settimane.",
  features = [
    "Durata fino a 3 settimane",
    "Aspetto naturale e lucido",
    "Rinforzano le unghie naturali",
  ],
  images = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VsJTIwbmFpbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1632344004181-53c1e3a52d2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VsJTIwbmFpbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2VsJTIwbmFpbHN8ZW58MHx8MHx8fDA%3D",
  ],
  ctaText = "Prenota ora",
  ctaLink = "#",
} = {}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-roseGold-light dark:bg-rose text-rose dark:text-roseGold-light">
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-rose dark:text-roseGold-light">
                    {title}
                  </h1>
                  <p className="max-w-[600px] text-rose dark:text-roseGold-light md:text-xl">
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
                  blurDataURL={images[currentImageIndex]}
                  placeholder="blur"
                  className="object-cover w-full h-full aspect-[9/14]"
                  height="600"
                  src={images[currentImageIndex]}
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-accent dark:bg-roseGold-DEFAULT">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-rose dark:text-roseGold-light">
              Caratteristiche
            </h2>
            <ul className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-rose dark:text-roseGold-light"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-light dark:bg-rose">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-rose dark:text-roseGold-light">
              Galleria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-roseGold-metallic dark:bg-roseGold-dark">
                    <CardContent className="p-0">
                      <Image
                        alt={`${title} example ${index + 1}`}
                        className="object-cover w-full h-full"
                        height="400"
                        src={src}
                        width="600"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-rose dark:text-roseGold-light">
                  Pronta per provare le {title}?
                </h2>
                <p className="max-w-[900px] text-rose dark:text-roseGold-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
