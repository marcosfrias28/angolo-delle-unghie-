"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

// Componente para un pétalo individual
const Petal = ({ index }: { index: number }) => {
  const [key, setKey] = useState(0);

  // Reinicia la animación cuando termina
  useEffect(() => {
    const timer = setTimeout(
      () => setKey((prev) => prev + 1),
      (index + 1) * 1000 + 15000
    );
    return () => clearTimeout(timer);
  }, [key, index]);

  return (
    <motion.img
      key={key}
      src={`/petali/p${index}.webp`}
      alt={`Pétalo ${index + 1}`}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${200 + Math.random() * 20}px`,
        height: "auto",
      }}
      initial={{ top: "-10%", rotate: 0, opacity: 0.7 }}
      animate={{
        top: "110%",
        rotate: 360,
        opacity: 0,
      }}
      transition={{
        duration: 15,
        ease: "linear",
        delay: index * 0.5,
        repeat: Infinity,
      }}
    />
  );
};

// Componente principal de fondo de pétalos cayendo
export default function FallingPetalsBackground({
  className,
}: {
  className?: ClassValue;
}) {
  const petalCount = 12;

  return (
    <div className={cn("inset-0 pointer-events-none -mt-20", className)}>
      {[...Array(petalCount)].map((_, index) => (
        <Petal key={index} index={index + 1} />
      ))}
    </div>
  );
}
