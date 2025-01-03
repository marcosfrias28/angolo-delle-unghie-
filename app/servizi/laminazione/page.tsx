"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const { title, description, features, images, ctaText, ctaLink } = {
  title: "Laminazione Ciglia e Sopracciglia",
  description:
    "La laminazione di ciglia e sopracciglia è un trattamento che rinforza, curva e definisce le ciglia e le sopracciglia naturali, donando uno sguardo intenso e ben definito. Perfetto per chi desidera un look naturale ma curato, senza l'uso quotidiano di make-up.",
  features: [
    "Rinforzo e curvatura delle ciglia naturali",
    "Definizione delle sopracciglia per un look naturale",
    "Trattamenti nutrienti per ciglia e sopracciglia",
    "Aspetto intenso e curato a lunga durata",
  ],
  images: [
    "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtaW5hemlvbmUlMjBjaWdsaWUlMjBlJTIwc29wcmFjY2lnaWxpYXxlbnwwfHwwfHx8fDA%3D",
    "https://images.unsplash.com/photo-1580714559550-4cb5d62e42c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtaW5hemlvbmUlMjBjaWdsaWUlMjBlJTIwc29wcmFjY2lnaWxpYXxlbnwwfHwwfHx8fDA%3D",
    "https://images.unsplash.com/photo-1551232868-83160edcd444?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29wcmFjY2lnaWxpYXxlbnwwfHwwfHx8fDA%3D",
  ],
  ctaText: "Prenota il tuo trattamento",
  ctaLink: "#",
};
export default function LaminazionePage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-roseGold-light dark:bg-rose">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">
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
