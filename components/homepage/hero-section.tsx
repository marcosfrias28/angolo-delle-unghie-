import config from "@/config";
import { cn } from "@/lib/utils";
import ScrollIcon from "./scroll-animation";
import Logo from "./logo";
import CTASection from "./cta-section";

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
          "flex items-center justify-center flex-col mt-10 lg:flex-row-reverse max-sm:mt-20 gap-10 mx-auto",
          "container"
        )}
      >
        <h1 className="sr-only">{config.websiteName}</h1>
        <Logo width={600} height={600} />
        <CTASection />
      </div>
      <ScrollIcon />
    </section>
  );
}
