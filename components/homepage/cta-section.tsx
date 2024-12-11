"use client";

import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContactModal } from "../ui/contact-modal";

const CTAtext = {
  cta: {
    title: "Riscopri la bellezza delle tue unghie",
    subtitle: "Prenota un trattamento su misura per mani perfette.",
    button: "Prenota Ora",
  },
};

const CTASection = () => {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className={cn(
        // Layout
        "flex flex-col items-center justify-center",
        // Initial state
        "opacity-0"
      )}
    >
      <h2
        className={cn(
          // Typography
          "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold",
          // Text colors
          "text-white dark:text-white",
          // Spacing
          "mb-6 text-center"
        )}
      >
        {CTAtext.cta.title}
      </h2>
      <p
        className={cn(
          // Typography
          "text-lg",
          // Text colors
          "text-gray-600 dark:text-gray-300",
          // Spacing
          "mb-8 text-center"
        )}
      >
        {CTAtext.cta.subtitle}
      </p>
      <ContactModal
        className={cn(
          // Padding
          "px-8 py-7",
          // Background colors
          "bg-rose dark:bg-roseGold hover:bg-[rgb(234,173,170)]",
          // Text colors
          "text-softWhite-50 hover:text-black dark:text-white",
          // Borders and rounded corners
          "rounded-full",
          // Typography
          "font-extrabold text-lg text-center",
          // Effects
          "hover:shadow-xl shadow-lg",
          // Animations
          "hover:-translate-y-1 transform transition-all duration-300"
        )}
      >
        {CTAtext.cta.button}
        <BorderBeam
          size={100}
          duration={3}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
      </ContactModal>
    </motion.section>
  );
};

export default CTASection;
