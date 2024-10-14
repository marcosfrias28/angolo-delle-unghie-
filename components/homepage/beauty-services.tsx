"use client";

import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll } from "framer-motion";
import { ScrollToPlugin } from "gsap/all";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useTheme } from "next-themes";
import ScrollIcon from "./scroll-animation";

gsap.registerPlugin(ScrollToPlugin);

interface Service {
  name: string;
  image: string;
  icon: string;
  note: string;
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

const accent = {
  light: "bg-[rgb(201,138,147)]",
  dark: "bg-[rgb(157,108,115)]",
};

const services: Service[] = [
  {
    name: "Manicure",
    image: "/materials.jpg",
    icon: "💅",
    note: "Cura delle mani di lusso",
  },
  {
    name: "Pedicure",
    image: "/materials.jpg",
    icon: "👣",
    note: "Relax per i tuoi piedi",
  },
  {
    name: "Ceretta",
    image: "/materials.jpg",
    icon: "✨",
    note: "Pelle liscia e setosa",
  },
  {
    name: "Laminazione",
    image: "/materials.jpg",
    icon: "🌟",
    note: "Ciglia e sopracciglia perfette",
  },
  {
    name: "Unghie",
    image: "/materials.jpg",
    icon: "💅",
    note: "Nail art straordinaria",
  },
  {
    name: "Massaggi",
    image: "/materials.jpg",
    icon: "💆‍♀️",
    note: "Rilassamento profondo",
  },
  {
    name: "Trattamenti",
    image: "/materials.jpg",
    icon: "🧖‍♀️",
    note: "Ringiovanimento della pelle",
  },
];

const BeautyServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLElement[] | null>(null);
  const isInView = useInView(containerRef, { amount: 0.95 });

  useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setCurrentSection(currentSection + 1);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "max-w-[1800px] h-[600px] lg:h-[1000px] min-h-[600px] z-20 rounded-2xl mx-auto bg-white dark:bg-gray-900 snap-y snap-mandatory scrollbar-hide",
        isInView ? "overflow-y-scroll" : "overflow-hidden"
      )}
    >
      {/* Pagination */}
      <div className="absolute z-20 right-0 bottom-auto flex flex-col gap-4 p-4">
        {[...Array(services.length)].map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentSection(index)}
            className={cn(
              "flex shrink-0 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer",
              index === currentSection
                ? "w-10 h-4 bg-white dark:bg-softWhite-50"
                : "w-4 h-4 bg-white/30 dark:bg-gray-700/30"
            )}
          ></motion.div>
        ))}
      </div>

      {/* Services */}
      <div id="services-scroll">
        {services.map((service, index) => (
          <section
            key={index}
            className="relative"
            ref={(el) => {
              if (el && sectionRef.current) {
                sectionRef.current[index] = el;
              }
            }}
          >
            <Section service={service} index={index} />
          </section>
        ))}
      </div>
      {/*scollabile */}
      <ScrollIcon animationOff={true} />
    </section>
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
        "h-[600px] lg:h-[1000px] min-h-[600px] w-full flex items-center justify-center p-8 snap-start relative overflow-hidden",
        accent.light,
        accent.dark
      )}
      style={{
        backgroundColor: theme === "dark" ? accent.dark : accent.light,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 md:flex md:flex-row items-center justify-between w-full max-w-7xl mx-auto h-fit">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white dark:text-white drop-shadow-md shadow-black">
            {service.name}
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-md text-pretty">
            Concediti i nostri lussuosi servizi di {service.name.toLowerCase()}.
            Vivi il massimo del relax e del comfort con i nostri esperti tecnici
            che utilizzano prodotti di prima qualità.
          </p>
          <button className="bg-white dark:bg-gray-800 max-md:w-full text-[rgb(183,110,121)] dark:text-[rgb(255,228,225)] py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-colors shadow-lg">
            Prenota Ora
          </button>
        </motion.div>

        <motion.div
          className="max-md:hidden w-full md:w-1/2 relative h-[300px] md:h-400px]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            loading="lazy"
            blurDataURL={service.image}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {service.note}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          key={`icon-${index}`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="absolute top-10 right-10 text-9xl text-white dark:text-gray-200"
        >
          {service.icon}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="max-md:hidden absolute bottom-8 left-8 p-4 rounded-full shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unghie-title-K5gQypXLUbSa6GsMnWVnIZ78pRg5Et.svg"
          alt="Unghie Logo"
          width={100}
          height={100}
          className="w-16 h-16"
        />
      </motion.div>
    </motion.div>
  );
};

export default BeautyServices;
