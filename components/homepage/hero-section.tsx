import config from "@/config";
import { cn } from "@/lib/utils";
import ScrollIcon from "./scroll-animation";
import Logo from "./logo";
import CTASection from "./cta-section";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className={cn(
        "h-auto w-screen relative min-h-screen flex flex-col items-center justify-center",
      )}
      aria-label={`${config.websiteName} Hero`}
    >
      <Image
        id="hero-nail"
        src="/hand-nail-red.webp"
        alt="Mani con Unghie French"
        width={1000}
        height={1400}
        className="smax-md:hidden absolute bottom-10 -right-28 mask-gradient opacity-40"
      />
      <div
        className={cn(
          "flex items-center justify-between flex-col lg:flex-row-reverse max-w-[1640px]",
        )}
      >
        <h1 className="sr-only">{config.websiteName}</h1>
        <Logo width={1200} height={1200} className="mask-gradient" />
        <CTASection />
      </div>
      <ScrollIcon />
    </section>
  );
}
