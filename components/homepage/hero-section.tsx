"use client";

import config from "@/config";
import HeroLogo from "@/app/(home)/_components/hero-logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import ScrollIcon from "./scroll-animation";
import { motion } from "framer-motion";
import FallingPetalsBackground from "../NailsSection/petals-falling";

const homepageText = {
  cta: {
    title: "Riscopri la bellezza delle tue unghie",
    subtitle: "Prenota un trattamento su misura per mani perfette.",
    button: "Prenota Ora",
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className={cn(
        "h-screen w-screen relative min-h-fit flex flex-col items-center justify-center"
      )}
      aria-label={`${config.websiteName} Hero`}
    >
      <div
        className={cn(
          "flex items-center justify-center flex-col mt-20 lg:flex-row-reverse max-sm:mt-20 gap-10 mx-auto",
          "container"
        )}
      >
        <h1 className="sr-only">{config.websiteName}</h1>

        {[...Array(2)].map((_, i) => (
          <HeroLogo
            key={crypto.randomUUID()}
            className={cn(i === 0 ? "hidden dark:block" : "block dark:hidden")}
            imageSrc={
              i === 0 ? "/hero-logo-new-rose.svg" : "/hero-logo-new.svg"
            }
          />
        ))}
        <CTASection />
      </div>
      <ScrollIcon />
    </section>
  );
}

const CTASection = () => {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className={cn("flex flex-col items-center justify-center", "opacity-0")}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white dark:text-white mb-6 text-center">
        {homepageText.cta.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        {homepageText.cta.subtitle}
      </p>
      <Link
        href="/prenota"
        className="px-8 py-4 bg-[rgb(244,183,180)] dark:bg-roseGold text-black dark:text-white rounded-full font-bold text-lg hover:bg-[rgb(234,173,170)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
      >
        {homepageText.cta.button}
        <BorderBeam
          size={100}
          duration={3}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
      </Link>
    </motion.section>
  );
};
