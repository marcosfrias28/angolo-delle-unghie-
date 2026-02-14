"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactModal } from "../ui/contact-modal";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 px-6">
        <div className="flex-1 text-center md:text-left space-y-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-widest">
              Benvenuta nel tuo rifugio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            Riscopri la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200 italic">
              Bellezza
            </span>{" "}
            <br />
            delle tue unghie
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light max-w-xl mx-auto md:mx-0 leading-relaxed">
            Prenota un trattamento su misura per mani perfette. L&apos;eleganza
            incontra la cura in ogni dettaglio, per un risultato che parla di
            te.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <ContactModal
              className="rounded-full px-8 py-6 text-lg font-medium shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
              buttonText="Prenota Ora"
            >
              Prenota il tuo appuntamento
            </ContactModal>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 py-6 text-lg border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <Link href="#services">Scopri i Servizi</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
