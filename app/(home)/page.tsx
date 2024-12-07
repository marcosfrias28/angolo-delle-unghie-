import GalleryScroll from "@/components/GalleriaImmagini/gallery-scroll";
import { FaqsSection } from "@/components/homepage/accordion-component";
import { StandardHeader } from "@/components/generic/standard-header";
import BentoGridSection from "@/components/homepage/bento-grid";
import HeroSection from "@/components/homepage/hero-section";
import CTASection from "@/components/CTASection/cta-section";
import PageWrapper from "@/components/wrapper/page-wrapper";
import ReviewsMarquee from "@/components/homepage/reviews";
import NailsTypes from "@/components/homepage/nails-types";
import AboutMe from "@/components/homepage/about-me";
import Meteors from "@/components/magicui/meteors";
import Stars from "@/components/homepage/stars";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <PageWrapper>
      <section
        className={cn(
          "w-full h-auto min-h-screen relative",
          "bg-gradient-to-b from-roseGold-light dark:from-roseGold-metallic/20 from-70% to-transparent"
        )}
      >
        <Stars />
        <Meteors meteorQuantity={12} />
        <HeroSection />
      </section>
      <section
        id="chi-sono"
        className="w-full h-fit max-w-[1920px] min-h-screen lg:my-40 max-md:px-4 px-10"
      >
        <StandardHeader
          title="Conosciamoci meglio!"
          description="Prima di tutto, ti racconto di me. E poi scopriamo come ti posso aiutare."
          position="center"
        />
        <AboutMe />
      </section>
      <section
        id="servizi"
        className="w-full h-fit max-w-[1920px] min-h-screen lg:my-40 max-md:px-4 px-10"
      >
        <StandardHeader
          className="-mb-36"
          title="Servizi"
          description="Scopri cosa offro per la tua cura e bellezza."
          position="center"
        />
        <BentoGridSection />
      </section>
      <section
        id="galleria"
        className="relative w-full max-w-[1920px] my-40 max-md:my-24 max-md:px-4"
      >
        <StandardHeader
          title="Lavori Realizzati Recentemente"
          description="Scopri le mie creazioni uniche di nail art."
        />
        <GalleryScroll />
      </section>
      <section
        id="stili-unghie"
        className="relative w-full max-w-[1920px] overflow-hidden p-2 max-md:px-4"
      >
        <StandardHeader
          className="mt-20 mb-10"
          title="Stili che potrebbero piacerti"
          description="Scopri i miei stili preferiti e trova nuovi stili per le tue unghie."
          position="center"
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
