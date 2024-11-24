"use client";

import { useState, useEffect, useRef, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import { Eye, EyeOff } from "lucide-react";
import MurettoImage from "@/public/unghie/muretto.webp";
import FrenchBabyBoomer from "@/public/unghie/french-baby-boomer.webp";
import TrendNails from "@/public/unghie/trend-nails.webp";
import UnghieNaturali from "@/public/unghie/unghie-naturali.webp";
import { useMediaQuery } from "usehooks-ts";

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
    image: MurettoImage,
    description:
      "Un French che è parte della ricostruzione, e non un disegno, è una tecnica di ricostruzione delle unghie con cui la nail artist non si limita a disegnare la smile line delle unghie con il gel bianco, o di altro colore, sopra l'unghia già ricostruita ma crea la smile line direttamente in struttura.",
  },
  {
    name: "French & Babyboomer",
    image: FrenchBabyBoomer,
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
    image: UnghieNaturali,
    description:
      "Svela la tua bellezza con unghie naturali, nude, semplici ed eleganti per ogni occasione. Esalta la tua femminilità con i miei servizi.",
  },
  {
    name: "Sprint Nails",
    image: UnghieNaturali,
    description:
      "Fantasie, disegni, personalità, brillantini, animals… sono solo alcune delle parole chiave delle Sprint Nails.. sbizzarriamoci per avere le unghie dei tuoi sogni.",
  },
  {
    name: "Card Nails",
    image: UnghieNaturali,
    description:
      "Ultimo arrivato ma ha subito rapito i cuori di tanti: tu scegli il prezzo e la fortuna sceglierà le unghie al posto tuo!",
  },
];

const NailsTypes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement[] | null>(null);
  const isInView = useInView(containerRef, { amount: 0.95 });
  const [nailType, setService] = useState(nailsTypes[currentSection]);
  const { theme } = useTheme();

  useEffect(() => {
    setService(nailsTypes[currentSection]);
  }, [currentSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
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

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.to(containerRef, {
      duration: 2,
      ease: "power2",
      scrollTo: sectionRef.current[currentSection],
    });
  }, [currentSection]);

  return (
    <section
      ref={containerRef}
      className={cn(
        "w-full h-[600px] lg:h-[1000px] max-h-screen min-h-[600px] z-20 rounded-2xl mx-auto snap-y snap-mandatory scrollbar-hide",
        isInView ? "overflow-y-scroll" : "overflow-hidden",
        "bg-gray-300 dark:bg-black/40"
      )}
      style={{
        backgroundImage: `url(${nailType.image})`,
      }}
    >
      <section
        className={cn(
          "absolute bottom-8 left-8 z-20",
          "flex flex-col items-center justify-center gap-10",
          // queries
          "max-md:px-1 max-md:bottom-32"
        )}
      >
        {/* Pagination */}
        <div className="flex flex-col gap-4">
          {[...Array(nailsTypes.length)].map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSection(index)}
              className={cn(
                "flex shrink-0 rounded-sm overflow-hidden transition-all duration-200 cursor-pointer",
                index === currentSection
                  ? "w-8 h-8 max-md:w-3 max-md:h-3 bg-rose dark:bg-softWhite-50"
                  : "w-8 h-4 max-md:w-3 max-md:h-3 bg-softWhite-50 dark:bg-rose"
              )}
            ></div>
          ))}
        </div>
        {/*scollabile */}
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          className={cn(
            "hero-link-to-base rounded-full flex items-start justify-center max-md:w-4 w-8 h-16",
            "border-2 border-white bg-transparent",
            "transition-all duration-200 ease-linear"
          )}
        >
          <div className="bright">
            <div className="size-4 max-md:size-2 rounded-full bg-white animate-bounce-more"></div>
          </div>
        </motion.div>
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
            nailType={nailType}
            index={index}
            currentSection={currentSection}
          />
        ))}
      </section>
    </section>
  );
};

const NailType: React.FC<any> = ({ nailType, currentSection, index }: any) => {
  const [viewImage, setViewImage] = useState<boolean>(false);
  const isDesktop = useMediaQuery("min-width: 1024px");

  useEffect(() => {
    if (currentSection !== index) {
      setViewImage(false);
    }
  }, [currentSection, index]);

  return (
    <div
      className={cn(
        "relative z-10 mx-auto max-md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20",
        "h-[600px] lg:h-[1000px] w-full snap-start overflow-hidden"
      )}
    >
      <Image
        src={nailType.image}
        placeholder="blur"
        blurDataURL={nailType.image.blurDataURL}
        alt={nailType.name}
        loading={isDesktop ? "lazy" : "eager"}
        width={isDesktop ? 500 : 1280}
        height={isDesktop ? 500 : 720}
        className={cn(
          "transition-all transform-gpu duration-300 ease-in-out",
          viewImage ? "" : "blur-2xl",
          isDesktop
            ? "w-1/2 min-w-[50%] h-screen hidden lg:block" // Desktop styles
            : "absolute h-[600px] w-full overflow-hidden -z-10 lg:hidden" // Mobile styles
        )}
      />

      <section
        className={cn(
          "w-full lg:w-1/2 h-full place-content-center grid space-y-2 lg:space-y-8",
          viewImage ? "hidden" : ""
        )}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-roseGold-light dark:text-roseGold-accent">
          {nailType.name}
        </h2>
        <p className="text-md lg:text-xl text-softWhite-50 mb-6 text-pretty">
          {nailType.description}
        </p>
      </section>

      <button
        onClick={() => setViewImage(!viewImage)}
        className="lg:hidden flex flex-row gap-2 items-center justify-center w-fit bg-black/20 backdrop-blur-lg text-[rgb(255,228,225)] p-3 rounded-full text-lg font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-colors shadow-lg absolute bottom-8 z-10 left-1/2 -translate-x-1/2"
      >
        {viewImage ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </button>
    </div>
  );
};

export default NailsTypes;
