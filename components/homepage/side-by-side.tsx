"use client";

import { useRef } from "react";
import { Sparkles, Heart, Smile, Star, Clock, Palette } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import ShineBorder from "../ui/shine-border";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Esperienza",
    description: "Oltre 10 anni nel mondo della nail art",
    icon: Sparkles,
  },
  {
    name: "Passione",
    description: "Dedizione e amore per il mio lavoro",
    icon: Heart,
  },
  {
    name: "Cura Personale",
    description: "Attenzione ai dettagli e alle tue esigenze",
    icon: Smile,
  },
  {
    name: "Qualità Premium",
    description: "Utilizzo solo prodotti di alta qualità",
    icon: Star,
  },
  {
    name: "Flessibilità",
    description: "Orari su misura per le tue esigenze",
    icon: Clock,
  },
  {
    name: "Creatività",
    description: "Design unici e personalizzati",
    icon: Palette,
  },
];

export default function SideBySide() {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isInView = useInView(sectionRef, { once: true });
  const isInViewDiv = useInView(divRef, { once: true });

  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline();

    gsap.set(image, { y: 100, opacity: 0 });

    gsap.set(divRef.current, {
      y: isMobile ? 200 : 0,
      x: !isMobile ? 500 : 0,
      opacity: 0,
    });

    tl.to(image, {
      opacity: 1,
      y: 0,
      scale: isMobile ? 1.8 : 1.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "-=700px center",
        end: "center bottom",
        scrub: true,
        markers: true,
      },
    }).to(divRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "-=500px center",
        end: "center bottom",
        scrub: true,
      },
    });
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center min-h-[1200px] p-4"
    >
      <Image
        ref={imageRef}
        id="hero-nail-2"
        src="/hand-nail-red-2.webp"
        alt="Hands with nails french style"
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 mask-gradient w-auto h-auto max-md:mb-40"
      />
      <ShineBorder
        ref={divRef}
        borderWidth={4}
        borderRadius={20}
        color={[
          "rgb(183, 110, 121)",
          "rgb(255, 228, 225)",
          "rgb(190, 120, 120)",
        ]}
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto p-8 rounded-2xl max-md:my-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInViewDiv ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12 space-y-4"
          >
            <h4 className="text-2xl text-gray-600 dark:text-gray-300 mb-10 font-bold">
              “Dove la passione incontra la perfezione”
            </h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              L'
              <span className="bg-gradient-to-r from-rose to-roseGold-light bg-clip-text text-transparent dark:from-rose dark:to-roseGold-dark">
                Angolo Delle Unghie
              </span>
            </h1>
            <p className="text-xl font-thin mb-4 text-gray-800 dark:text-white/70 max-w-4xl mx-auto">
              Il tuo punto di riferimento per la cura e la bellezza
            </p>
          </motion.div>

          <div className="flex max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInViewDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="divide-x-8"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInViewDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className={cn(
                  //display
                  "relative flex items-center justify-center",

                  //floating
                  "lg:float-right [shape-outside:_circle()]",

                  //shape
                  "rounded-full ring-8 ring-offset-[12px]",

                  //size
                  "w-full h-auto max-h-80 max-w-80 max-md:max-w-60 max-md:max-h-60 dark:text-white",

                  //spacing
                  "lg:ml-20 max-md:mx-auto max-md:my-10",

                  //colors
                  "bg-gradient-to-b from-roseGold-light to-roseGold-light dark:from-rose dark:to-roseGold-dark ring-rose dark:ring-white ring-offset-[#f7f7f7] dark:ring-offset-black",

                  //resize
                  "shrink-0 overflow-hidden"
                )}
              >
                <Image
                  src="/miry-image.webp"
                  placeholder="blur"
                  blurDataURL="/miry-image.webp"
                  alt="Il mio spazio di lavoro"
                  objectFit="cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="object-cover object-center scale-150 mt-36 mr-10"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 max-md:text-center text-pretty">
                Ciao, sono{" "}
                <span className="bg-gradient-to-r from-rose to-roseGold-light bg-clip-text text-transparent dark:from-rose dark:to-rose via-roseGold-light">
                  Miryam
                </span>
                !
              </h3>
              <p className="text-xl [&>span]:font-bold text-gray-700 dark:text-gray-300 max-md:text-center text-pretty font-medium pl-3 border-l-4 border-rose dark:border-roseGold-light mt-7">
                Benvenuta nel mio spazio dedicato alla cura e alla bellezza
                delle tue unghie. Qui, in un ambiente
                <span> accogliente</span> e<span> personalizzato</span> , potrai
                goderti trattamenti di alta qualità e momenti di puro relax.
              </p>
              <br />
              <p className="text-xl [&>span]:font-bold text-gray-700 dark:text-gray-300 max-md:text-center text-pretty font-medium pl-3 border-l-4 border-rose dark:border-roseGold-light">
                La mia passione per l'arte delle unghie si unisce all'attenzione
                per il benessere di ogni cliente. Ogni trattamento è
                un'opportunità per <span>prendersi cura di sé</span> e sentirsi
                speciali.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid max-md:grid-cols-2 grid-cols-3 gap-8 mt-10"
          >
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="max-md:p-2 p-6 text-center transform transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-roseGold-light mb-4 mx-auto" />
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.name}
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-48 mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </ShineBorder>
    </section>
  );
}
