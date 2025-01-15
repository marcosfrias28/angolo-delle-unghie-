"use client";

import { useRef } from "react";
import { Sparkles, Heart, Smile, Star, Clock, Palette } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import ShineBorder from "../ui/shine-border";
import ProfileImage from "@/public/miry-image.webp";
import CustomParragraph from "../ui/custom-paragraph";

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

export default function AboutMe() {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const isInView = useInView(sectionRef, { once: true });
  const isInViewDiv = useInView(divRef, { once: true });

  useGSAP(() => {
    const section = sectionRef.current;
    const tl = gsap.timeline();

    gsap.set(divRef.current, {
      y: isMobile ? 200 : 0,
      x: isMobile ? 0 : 2000,
      opacity: 0.7,
    });

    tl.to(divRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "center 60%",
        scrub: true,
      },
    });
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col w-full px-4 justify-center items-center min-h-[1200px] max-lg:mb-10 lg:my-20 max-lg:max-h-fit"
    >
      <Image
        id="hero-nail"
        src="/hand-nail-red.webp"
        alt="Mani con Unghie French"
        width={800}
        height={1200}
        className="smax-md:hidden absolute bottom-0 -right-28 mask-gradient opacity-45"
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
        className="shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10 w-full mx-auto p-3 rounded-2xl max-md:my-10">
          <motion.div
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

          <div className="flex max-w-6xl mx-auto">
            <motion.div
              animate={
                isInViewDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="divide-x-8"
            >
              <motion.div
                animate={
                  isInViewDiv ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className={cn(
                  //blur effect
                  "[filter:url(#blur-and-scale)] lg:[filter:url(#blur-and-scale-more)]",

                  //display
                  "relative flex items-center justify-center",

                  //floating
                  "lg:float-right [shape-outside:_circle()]",

                  //shape
                  "rounded-full ring-8 ring-offset-[12px]",

                  //size
                  "w-full h-auto max-h-80 max-w-80 max-md:max-w-60 max-md:max-h-60 dark:text-white",

                  //spacing
                  "lg:ml-20 max-lg:mx-auto max-md:my-10 mt-10",

                  //colors
                  "bg-gradient-to-b from-roseGold-light to-roseGold-light dark:from-rose dark:to-roseGold-dark ring-rose dark:ring-white ring-offset-[#f7f7f7] dark:ring-offset-black",

                  //resize
                  "shrink-0 overflow-hidden"
                )}
              >
                <Image
                  src={ProfileImage}
                  placeholder="blur"
                  blurDataURL={ProfileImage.blurDataURL || ""}
                  alt="Foto di Miryam"
                  loading="eager"
                  width={300}
                  height={300}
                  className="object-cover aspect-square object-center scale-150 mt-36 lg:mr-10 max-lg:mb-20 w-[300px] h-auto"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 max-md:text-center text-pretty mt-10">
                Ciao, sono
                <span className="bg-gradient-to-r ml-2 from-rose to-roseGold-light bg-clip-text text-transparent dark:from-rose dark:to-rose via-roseGold-light">
                  Miryam
                </span>
                !
              </h3>
              <CustomParragraph>
                <span>Ogni giorno</span>,
                <span>ogni sorriso delle mie clienti</span>,
                <span>ogni piccola vittoria</span> mi ricordano perché ho
                iniziato questo cammino e perché,
                <span>
                  nonostante le difficoltà, non ho mai smesso di crederci
                </span>
                . Il mio lavoro non è solo una professione: è una
                <span>passione</span> che mi permette di
                <span>esprimere la mia creatività</span> e di
                <span>rendere felici le persone</span>. Questo è solo
                <span>l’inizio di un percorso</span> che voglio continuare a
                percorrere, con
                <span>lo stesso entusiasmo del primo giorno</span> e con il
                cuore sempre <span>pieno di gratitudine</span>.
              </CustomParragraph>
            </motion.div>
          </div>

          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid max-md:grid-cols-2 grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto text-center"
          >
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="max-md:p-2 p-3 text-center transform transition-all duration-300 hover:scale-105"
              >
                <feature.icon
                  className={cn(
                    "w-12 h-12 text-rose/40 mb-4 mx-auto animate-pulse",
                    "[filter:url(#blur-and-scale)]"
                  )}
                />
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.name}
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-64 mx-auto">
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
