"use client";

import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      className={cn("flex flex-col items-center justify-center", "opacity-0")}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white dark:text-white mb-6 text-center">
        {CTAtext.cta.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        {CTAtext.cta.subtitle}
      </p>
      <Link
        href="/prenota"
        className="px-8 py-4 bg-[rgb(244,183,180)] dark:bg-roseGold text-black dark:text-white rounded-full font-bold text-lg hover:bg-[rgb(234,173,170)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
      >
        {CTAtext.cta.button}
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

export default CTASection;
