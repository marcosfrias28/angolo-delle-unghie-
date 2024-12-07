"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { ChevronsDown, Eye, EyeOff } from "lucide-react";
import MurettoImage from "@/public/unghie/muretto.webp";
import FrenchBabyBoomer from "@/public/unghie/french-baby-boomer.webp";
import TrendNails from "@/public/unghie/trend-nails.webp";
import UnghieNaturali from "@/public/unghie/unghie-naturali.webp";
import { useMediaQuery } from "usehooks-ts";
import Logo from "./logo";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

interface nailType {
  name: string;
  image: StaticImageData;
  description: string;
}
const nailsTypes: nailType[] = [
  {
    name: "Unghie a muretto",
    image: TrendNails,
    description:
      "Un French che è parte della ricostruzione, e non un disegno, è una tecnica di ricostruzione delle unghie con cui la nail artist non si limita a disegnare la smile line delle unghie con il gel bianco, o di altro colore, sopra l'unghia già ricostruita ma crea la smile line direttamente in struttura.",
  },
  {
    name: "French & Babyboomer",
    image: TrendNails,
    description:
      "Il french manicure rientra tra le prime tecniche di manicure che negli ultimi tempi ha riavuto una piccola rivincita su altri più vivaci e sfiziosi mentre, il baby boomer è l’ultima tendenza del manicure, molto sobrio e naturale come il precedente, ma con una sfumatura delicata",
  },
  {
    name: "Trend Nails",
    image: TrendNails,
    description:
      "Continui aggiornamenti sui trend del momento. Inspo continui per farti sognare ed essere sempre alla moda",
  },
  {
    name: "Unghie naturali",
    image: TrendNails,
    description:
      "Svela la tua bellezza con unghie naturali, nude, semplici ed eleganti per ogni occasione. Esalta la tua femminilità con i miei servizi.",
  },
  {
    name: "Sprint Nails",
    image: TrendNails,
    description:
      "Fantasie, disegni, personalità, brillantini, animals… sono solo alcune delle parole chiave delle Sprint Nails.. sbizzarriamoci per avere le unghie dei tuoi sogni.",
  },
  {
    name: "Card Nails",
    image: TrendNails,
    description:
      "Ultimo arrivato ma ha subito rapito i cuori di tanti: tu scegli il prezzo e la fortuna sceglierà le unghie al posto tuo!",
  },
];

const NailsTypes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [viewImage, setViewImage] = useState<boolean>(false);
  const [_, setService] = useState(nailsTypes[currentSection]);

  const sectionRef = useRef<HTMLDivElement[] | null>(null);
  const isInView = useInView(containerRef, { amount: 0.95 });
  const { theme } = useTheme();

  useEffect(() => {
    setService(nailsTypes[currentSection]);
  }, [currentSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      setViewImage(false);
      const scrollPosition = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const newSection = Math.round(scrollPosition / sectionHeight);

      setCurrentSection((prevSection) => {
        if (prevSection !== newSection) {
          return newSection;
        }
        return prevSection;
      });
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "w-full h-[600px] lg:h-[900px] max-h-screen min-h-[600px] z-20 rounded-2xl mx-auto snap-y snap-mandatory scrollbar-hide",
        isInView ? "overflow-y-scroll" : "overflow-hidden",
        "bg-roseGold-light dark:bg-black/40"
      )}
    >
      {/* Pagination and Scroll */}
      <section
        className={cn(
          "absolute bottom-0 max-md:pl-2 left-5 h-full mb-14 lg:mb-82 lg:pt-10 max-md:left-3 z-20",
          "flex flex-col items-center justify-between",
          "h-[500px] lg:h-[850px]"
        )}
      >
        <AnimatePresence>
          <motion.section
            className={cn(
              "animate-bounce duration-500 transform-gpu transition-opacity",
              currentSection !== 0 ? "opacity-100" : "opacity-0",
              "flex flex-col items-center justify-center gap-10"
            )}
          >
            <ChevronsDown className="absolute text-rose rounded-full size-10 lg:size-20 max-md:ml-2 z-10 pointer-events-none rotate-180" />
          </motion.section>
        </AnimatePresence>
        {/* Pagination */}
        <div className="flex flex-col gap-4 items-center justify-center">
          {[...Array(nailsTypes.length)].map((_, index) => (
            <div
              key={index}
              className={cn(
                "flex ml-1 shrink-0 rounded-sm overflow-hidden transition-all duration-200 pointer-events-none",
                index === currentSection
                  ? "w-8 h-8 max-md:w-3 max-md:h-3 bg-rose dark:bg-softWhite-50"
                  : "w-8 h-5 max-md:w-3 max-md:h-3 bg-softWhite-50 dark:bg-rose"
              )}
            ></div>
          ))}
          {/*scollabile */}
          <motion.div
            style={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            className={cn(
              "hero-link-to-base rounded-full flex items-start justify-center max-md:w-4 w-8 h-16 ml-1",
              "border-2 border-white bg-transparent",
              "transition-all duration-200 ease-linear"
            )}
          >
            <div className="bright">
              <div className="size-4 max-md:size-2 rounded-full bg-white animate-bounce-more"></div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          <motion.section
            className={cn(
              "animate-bounce duration-500 transform-gpu transition-opacity",
              currentSection !== nailsTypes.length - 1
                ? "opacity-100"
                : "opacity-0",
              "flex flex-col items-center justify-center gap-10"
            )}
          >
            <ChevronsDown className="absolute text-rose rounded-full size-10 lg:size-20 max-md:ml-2 z-10 pointer-events-none" />
          </motion.section>
        </AnimatePresence>
      </section>

      {/* Services */}
      <section>
        {nailsTypes.map((nailType, index) => (
          <NailType
            key={index}
            style={{
              backgroundColor: theme === "dark" ? "bg-gray-200" : "bg-gray-900",
            }}
            ref={(el: HTMLDivElement | null) => {
              if (el && sectionRef.current) {
                sectionRef.current[index] = el as HTMLDivElement;
              }
            }}
            viewImage={viewImage}
            setViewImage={setViewImage}
            nailType={nailType}
            index={index}
            currentSection={currentSection}
          />
        ))}
      </section>

      {/* View Image eye button */}
      <button
        onClick={() => setViewImage(!viewImage)}
        className="hidden max-lg:flex flex-row gap-2 items-center justify-center w-fit bg-black/20 backdrop-blur-lg text-[rgb(255,228,225)] p-3 rounded-full text-lg font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-colors shadow-lg absolute bottom-8 z-10 left-1/2 -translate-x-1/2"
      >
        {viewImage ? (
          <EyeOff className="size-5 md:size-7 lg:size-10" />
        ) : (
          <Eye className="size-5 md:size-7 lg:size-10" />
        )}
      </button>

      {/* Logo */}
      <section
        className={cn(
          "absolute bottom-5 right-5 z-20 pointer-events-none",
          "flex flex-col items-center justify-center gap-10"
        )}
      >
        <Logo width={100} height={100} />
      </section>
    </section>
  );
};

const NailType: React.FC<any> = ({ nailType, viewImage, index }: any) => {
  const isDesktop = useMediaQuery("min-width: 1024px");

  return (
    <div
      className={cn(
        "relative z-10 mx-auto place-content-center",
        "lg:grid lg:grid-cols-2 lg:grid-rows-1", // Desktop styles
        "w-full snap-start overflow-hidden h-[600px] lg:h-[900px]"
      )}
    >
      <section
        className={cn(
          // Layout & Structure
          "w-full h-full grid mx-auto",

          // Spacing & Alignment
          "place-content-center space-y-2 lg:space-y-8 md:px-20 max-md:pl-9",

          // Conditional order based on index
          {
            "order-first": index % 2 === 0,
            "order-last": index % 2 !== 0,
          },

          // Visibility for specific views
          {
            "max-lg:hidden": viewImage,
          },

          // Desktop layout specific
          {
            "col-span-1": isDesktop,
          }
        )}
      >
        <h2
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold",
            "w-full mb-4",
            "text-white dark:text-roseGold-light",
            "lg:[filter:url(#blur-and-scale-more)]"
          )}
        >
          {nailType.name}
        </h2>
        <p className="w-full text-xl lg:text-3xl text-black dark:text-roseGold-accent text-pretty">
          {nailType.description}
        </p>
      </section>
      <picture className="w-full h-full hidden lg:block">
        <Image
          src={nailType.image}
          placeholder="blur"
          blurDataURL={nailType.image.blurDataURL}
          alt={nailType.name}
          loading="lazy"
          className={cn(
            "transition-all transform-gpu duration-300 ease-in-out",
            "w-full h-full"
          )}
        />
      </picture>
      <Image
        src={nailType.image}
        placeholder="blur"
        blurDataURL={nailType.image.blurDataURL}
        alt={nailType.name}
        fill
        loading="eager"
        className={cn(
          "hidden max-lg:block",
          "transition-all transform-gpu duration-300 ease-in-out",
          "w-full h-full",
          !viewImage ? "blur-3xl" : "",
          "absolute overflow-hidden -z-10"
        )}
      />
    </div>
  );
};

export default NailsTypes;
