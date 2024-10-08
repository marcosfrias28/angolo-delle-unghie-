"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollToPlugin } from "gsap/all";
import { cn } from "@/lib/utils";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

interface Service {
  name: string;
  image: string;
  icon: string;
  accent: {
    light: string;
    dark: string;
  };
  note: string;
}

interface SectionProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    name: "Manicure",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "💅",
    accent: { light: "rgb(183,110,121)", dark: "rgb(143,86,95)" },
    note: "Cura delle mani di lusso",
  },
  {
    name: "Pedicure",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "👣",
    accent: { light: "rgb(201,138,147)", dark: "rgb(157,108,115)" },
    note: "Relax per i tuoi piedi",
  },
  {
    name: "Ceretta",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "✨",
    accent: { light: "rgb(219,166,173)", dark: "rgb(171,130,135)" },
    note: "Pelle liscia e setosa",
  },
  {
    name: "Laminazione",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "🌟",
    accent: { light: "rgb(237,194,199)", dark: "rgb(185,151,155)" },
    note: "Ciglia e sopracciglia perfette",
  },
  {
    name: "Unghie",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "💅",
    accent: { light: "rgb(246,211,215)", dark: "rgb(192,165,168)" },
    note: "Nail art straordinaria",
  },
  {
    name: "Massaggi",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "💆‍♀️",
    accent: { light: "rgb(251,220,223)", dark: "rgb(196,172,174)" },
    note: "Rilassamento profondo",
  },
  {
    name: "Trattamenti",
    image: "/placeholder.svg?height=1080&width=1920",
    icon: "🧖‍♀️",
    accent: { light: "rgb(255,228,225)", dark: "rgb(199,178,176)" },
    note: "Ringiovanimento della pelle",
  },
];

const BeautyServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const sectionHeight = container.clientHeight;
    const newSection = Math.round(scrollPosition / sectionHeight);
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
    }

    container.addEventListener("scroll", () =>
      setCurrentSection(currentSection + 1)
    );
    return () =>
      container.removeEventListener("scroll", () =>
        setCurrentSection(currentSection + 1)
      );
  }, [currentSection]);

  return (
    <section
      ref={containerRef}
      className="max-w-[1800px] h-[1000px] overflow-y-scroll rounded-2xl mx-auto bg-white dark:bg-gray-900 snap-y snap-mandatory scrollbar-hide"
    >
      <Pagination
        length={services.length}
        currentPosition={currentSection}
        setCurrentPosition={setCurrentSection}
      />
      <div className="relative w-full h-full">
        {services.map((service, index) => (
          <Section key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const Section: React.FC<SectionProps> = ({ service, index }) => {
  return (
    <motion.section
      className="h-[1000px] w-full flex items-center justify-center p-8 snap-start relative overflow-hidden"
      style={{
        backgroundColor: `var(--accent-color, ${service.accent.light})`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-gray-800/20 dark:to-transparent" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-6xl font-extrabold mb-4 text-white dark:text-gray-200 drop-shadow-lg">
            {service.name}
          </h2>
          <p className="text-xl text-white dark:text-gray-300 mb-6 max-w-md text-pretty">
            Concediti i nostri lussuosi servizi di {service.name.toLowerCase()}.
            Vivi il massimo del relax e del comfort con i nostri esperti tecnici
            che utilizzano prodotti di prima qualità.
          </p>
          <button className="bg-white dark:bg-gray-800 max-md:w-full text-[rgb(183,110,121)] dark:text-[rgb(255,228,225)] py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-colors shadow-lg">
            Prenota Ora
          </button>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative h-[400px] md:h-[600px]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            loading="lazy"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
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
        className="absolute bottom-8 left-8 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg"
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
    </motion.section>
  );
};

interface PaginationProps {
  length: number;
  currentPosition: number;
  setCurrentPosition: Dispatch<SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  length,
  currentPosition,
  setCurrentPosition,
}) => {
  if (!length) return null;

  return (
    <div className="absolute z-20 my-auto right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4">
      {Array.from({ length }).map((_, index) => (
        <motion.div
          key={index}
          onClick={() => setCurrentPosition(index)}
          className={cn(
            "flex shrink-0 h-6 w-8 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer",
            "bg-white/30 dark:bg-gray-700/30"
          )}
        >
          <motion.div
            initial={{ height: 0 }}
            animate={
              index === currentPosition ? { height: "100%" } : { height: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            <div className="w-full bg-white dark:bg-gray-200" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default BeautyServices;
