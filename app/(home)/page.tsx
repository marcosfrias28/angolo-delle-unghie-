import { FaqsSection } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import AboutMe from "@/components/homepage/about-me";
import PageWrapper from "@/components/wrapper/page-wrapper";
import BentoGridSection from "@/components/homepage/bento-grid";
import CTASection from "@/components/CTASection/cta-section";
import GalleryScroll from "@/components/GalleriaImmagini/gallery-scroll";
import ReviewsMarquee from "@/components/homepage/reviews";
import { cn } from "@/lib/utils";
import Meteors from "@/components/magicui/meteors";
import Stars from "@/components/homepage/stars";
import NailsTypes from "@/components/homepage/nails-types";
import { StandardHeader } from "@/components/generic/standard-header";
export default function Home() {
  return (
    <PageWrapper>
      <section
        className={cn(
          "w-full h-auto min-h-screen relative",
          "bg-gradient-to-b from-roseGold-metallic dark:from-roseGold-metallic/20 from-70% to-transparent"
        )}
      >
        <Stars />
        <Meteors meteorQuantity={12} />
        <HeroSection />
        <section id="chi-sono" className="relative max-md:px-2 px-10">
          <AboutMe />
        </section>
      </section>
      <section
        id="servizi"
        className="w-full h-fit max-w-[1920px] min-h-screen lg:my-40 max-md:px-2 px-10"
      >
        <BentoGridSection />
      </section>
      <section
        id="galleria"
        className="relative w-full max-w-[1920px] my-40 max-md:my-24"
      >
        <StandardHeader
          title="Lavori Realizzati Recentemente"
          description="Scopri le mie creazioni uniche di nail art."
        />
        <GalleryScroll />
      </section>
      <section
        id="stili-unghie"
        className="relative w-full max-w-[1920px] overflow-hidden p-2"
      >
        <StandardHeader
          title="I Miei Stili Preferiti"
          description="Le mie preferite! Unghie per tutti i gusti."
        />
        <NailsTypes />
      </section>
      <section
        id="banner"
        className="w-full bg-roseGold-light dark:bg-roseGold-dark mt-40"
      >
        <CTASection />
      </section>
      <section
        id="contact-reviews-footer"
        className="relative w-full h-fit min-h-screen flex flex-col gap-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <section className="flex justify-center items-center w-full mt-10">
          <ReviewsMarquee />
        </section>

        <section
          id="faqs"
          className="flex justify-center items-center w-full mb-32 pb-20"
        >
          <FaqsSection />
        </section>
      </section>
    </PageWrapper>
  );
}
