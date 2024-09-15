import config from "@/config";
import HeroLogo from "@/app/(home)/_components/hero-logo";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center"
      aria-label={`${config.websiteName} Hero`}
    >
      <h1 className="sr-only">Angolo delle unghie</h1>
      <div className="w-screen flex flex-nowrap">
        <HeroLogo direction="left" imageSrc="/hero-logo.svg" />
        <HeroLogo direction="right" imageSrc="/hero-logo-rose.svg" />
      </div>
    </section>
  );
}
