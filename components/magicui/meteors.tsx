"use client";

import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  const properties = useCallback(calcolateStarsPosition, []);

  function calcolateStarsPosition() {
    const size = Math.round(Math.random() * 10 + 1);
    const [left, bottom, top, right] = [
      Math.floor(Math.random() * window.innerWidth - size),
      Math.floor(Math.random() * window.innerHeight - size),
      Math.floor(Math.random() * window.innerHeight - size),
      Math.ceil(Math.random() * window.innerWidth + size),
    ];

    return { left, bottom, top, right, size };
  }

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: 5,
      right: Math.floor(Math.random() * window.innerWidth - 300) + "px",
      animationDelay: Math.random() * 1 + 1 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 1) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className={cn("absolute top-0 w-screen h-screen stars")}>
      {[...Array(100)].map((_, i) => {
        const { left, bottom, top, right, size } = properties();

        return (
          <span
            key={i}
            style={{
              display: "absolute",
              left,
              bottom,
              top,
              right,
              width: size,
              height: size,
              borderRadius: "50%",
              boxShadow: "0 0 0 1px #fff",
            }}
          />
        );
      })}
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute size-[2px] opacity-50 animate-meteorMobile md:animate-meteorMobile rounded-full bg-roseGold shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[3px] w-[200px] opacity-50 -translate-y-1/2 bg-gradient-to-r from-roseGold to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
