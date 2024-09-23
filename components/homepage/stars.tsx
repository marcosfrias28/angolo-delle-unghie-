"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null; // Se non è il browser, non eseguire il rendering

  const stars = [...Array(100)].map((_, i) => {
    let size = Math.random() * 2 + 3; // Dimensione random delle stelle (in px) (6 - 12)
    let opacity = Math.random() * 0.6 + 0.1; // Varie intensità di luminosità (0.2 - 0.8)
    let duration = Math.random() * 5 + 2; // Durata casuale tra 2 e 7 secondi (2 - 7)
    const leftPosition = Math.random() * 100; // Posizione orizzontale della stella (in vw)
    let backgroundColor = `white`; // Bianco a sinistra, rosa a destra
    let boxShadow = `0 0 ${Math.random() * 6 + 2}px rgba(255, 255, 255, 0.8)`;

    let styles = {
      top: Math.random() * 100 + "vh",
      left: leftPosition + "vw",
      height: size + "px",
      width: size + "px",
      opacity: opacity,
      backgroundColor, // Colore basato sulla posizione
      position: "absolute",
      borderRadius: "50%",
      boxShadow, // Effetto aura luminosa
    } as React.CSSProperties;

    return (
      <motion.span
        key={i}
        animate={{
          opacity: [0.2, 0.5, 0.8, 0.4, 1, 0.3, 0.6],
          scale: [0.8, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration,
          repeat: Infinity, // Animazione infinita
          ease: "easeInOut",
          delay: Math.random() * 5, // Ritardo casuale
        }}
        className={cn("star")}
        style={styles}
      />
    );
  });
  return stars;
};
export default Stars;
