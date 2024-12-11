"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  meteorQuantity?: number;
}
export const Meteors = ({ meteorQuantity = 7 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(meteorQuantity)].map(() => ({
      top: -5,
      right: Math.floor(Math.random() * window.innerWidth - 400) + "px",
      animationDelay: Math.random() * 1 + 1 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 3) + "s",
    }));
    setMeteorStyles(styles);
  }, [meteorQuantity]);

  return (
    <div className="absolute top-0 w-screen h-full stars overflow-hidden">
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute size-[3px] animate-meteorMobile rounded-full from-white shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[3px] w-[200px] opacity-50 -translate-y-1/2 bg-gradient-to-r from-white to-transparent shadow-[0_0_0_1px_#ffffff10]" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
