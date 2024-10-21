"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useTheme } from "next-themes";
import FallingPetalsBackground from "../NailsSection/petals-falling";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

interface Service {
  name: string;
  image: string;
  note: string;
  description: string;
}

interface PaginationProps {
  length: number;
  currentPosition: number;
  setCurrentPosition: Dispatch<SetStateAction<number>>;
}

interface SectionProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    name: "Unghie muretto",
    image: "/unghie/muretto.webp",
    note: "Distinguiti con le unghie muretto, un’arte unica che unisce stile e originalità!",
    description:
      "I nostri esperti onicotecnici creano design straordinari che catturano l’attenzione e riflettono la tua personalità. Clicca per scoprire come dare vita a unghie che raccontano la tua storia!",
  },
  {
    name: "French & Babyboomer",
    image: "/unghie/french-baby-boomer.webp",
    note: "Eleganza e raffinatezza per le tue unghie",
    description:
      "Rinnova il tuo look con French o Babyboomer! Questi stili classici esaltano la bellezza delle tue unghie con eleganza. Clicca per scoprire come ottenere un finish impeccabile!",
  },
  {
    name: "Trend Nails",
    image: "/unghie/trend-nails.webp",
    note: "Unghie all’avanguardia che esprimono la tua personalità",
    description:
      "Scopri le unghie in trend e fai brillare il tuo stile! Colori vibranti e forme audaci per un look che esprime chi sei. Clicca e trasforma le tue unghie in vere opere d’arte!",
  },
  {
    name: "Unghie naturali",
    image: "/unghie/unghie-naturali.webp",
    note: "Eleganza e versatilità con tonalità nude",
    description:
      "Svela la tua bellezza autentica con unghie naturali e nude, perfette per ogni occasione. Clicca per scoprire come un look minimalista possa esaltare la tua femminilità!",
  },
  {
    name: "Sprint Nails",
    image: "/materials.jpg",
    note: "Energia e vitalità per le tue unghie",
    description:
      "Dai un tocco di energia alle tue unghie con lo stile Sprint! Colori audaci e design dinamici che esprimono movimento e creatività. Clicca e rendi le tue unghie un inno alla vivacità!",
  },
  {
    name: "Acrygel e gel",
    image: "/materials.jpg",
    note: "Durata e versatilità per unghie sempre alla moda",
    description:
      "Sperimenta la forza delle unghie in Acrigel e gel! Questi trattamenti offrono resistenza e un look impeccabile che dura nel tempo. Clicca e scopri il look perfetto per te!",
  },
];

const NailsTypes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement[] | null>(null);
  const isInView = useInView(containerRef, { amount: 0.95 });

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
    <>
      <section
        ref={containerRef}
        className={cn(
          "w-full h-[600px] lg:h-[1000px] max-h-screen min-h-[600px] z-20 rounded-2xl mx-auto snap-y snap-mandatory scrollbar-hide",
          isInView ? "overflow-y-scroll" : "overflow-hidden"
        )}
      >
        <Image
          src="/hand-nail-red-2.webp"
          alt="hand flowers"
          width={800}
          height={600}
          className={cn(
            "absolute max-lg:-top-10 -top-36 mx-auto z-0 mask-gradient"
          )}
        />

        <section
          className={cn(
            "absolute bottom-5 left-5 z-10",
            "flex flex-col items-center justify-center gap-10"
          )}
        >
          {/* Pagination */}
          <div className="flex flex-col gap-4">
            {[...Array(services.length)].map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSection(index)}
                className={cn(
                  "flex shrink-0 rounded-sm overflow-hidden transition-all duration-200 cursor-pointer",
                  index === currentSection
                    ? "w-8 h-8 bg-white dark:bg-softWhite-50"
                    : "w-8 h-4 bg-white/30 dark:bg-gray-700/30"
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
              "hero-link-to-base rounded-full flex items-start justify-center w-[30px] h-[60px]",
              "border-2 border-white bg-transparent",
              "transition-all duration-200 ease-linear"
            )}
          >
            <div className="bright">
              <div className="size-3 rounded-full bg-white animate-bounce-more"></div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <>
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el && sectionRef.current) {
                  sectionRef.current[index] = el as HTMLDivElement;
                }
              }}
            >
              <Section service={service} index={index} />
            </div>
          </>
        ))}
      </section>
    </>
  );
};

const Section: React.FC<SectionProps> = ({ service, index }: SectionProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className={cn(
        "h-[600px] lg:h-[1000px] w-full flex items-center justify-center snap-start overflow-hidden",
        "bg-gray-300 dark:bg-black/20 backdrop-blur-lg bg-opacity-70"
      )}
      style={{
        backgroundColor: theme === "dark" ? "bg-gray-200" : "bg-gray-900",
      }}
    >
      <div className="z-10 md:flex md:flex-row w-full h-full mx-auto">
        <div
          className={cn(
            "w-1/2 h-full mb-8 md:mb-0 flex flex-col items-center justify-center "
            // index % 2 !== 0 && "order-1"
          )}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white dark:text-white drop-shadow-md shadow-black">
            {service.name}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-md text-pretty">
            {service.description}
          </p>
          <button className="bg-white dark:bg-gray-800 max-md:w-full text-[rgb(183,110,121)] dark:text-[rgb(255,228,225)] py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-colors shadow-lg">
            Prenota Ora
          </button>
        </div>

        <motion.picture
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          animate={{ y: 300, opacity: 0 }}
          className={cn(
            "max-md:hidden w-1/2 h-screen relative"
            // index % 2 === 0 && "order-1"
          )}
        >
          <Image
            src={service.image}
            alt={service.name}
            loading="lazy"
            blurDataURL={service.image}
            fill
            className="aspect-auto"
          />
          <caption className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {service.note}
          </caption>
        </motion.picture>
      </div>
    </motion.div>
  );
};

export default NailsTypes;
