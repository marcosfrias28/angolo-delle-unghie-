import GalleryScroll from "@/components/GalleriaImmagini/gallery-scroll";
import { FaqsSection } from "@/components/homepage/accordion-component";
import StandardHeading from "@/components/generic/standard-heading";
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
import { SectionWrapper } from "@/components/wrapper/section-wrapper";

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
      <SectionWrapper
        className={cn("w-full mx-auto p-0 m-0 max-w-full")}
        id="chi-sono"
      >
        <StandardHeading
          title="Conosciamoci meglio!"
          description="Prima di tutto, ti racconto di me."
          position="center"
        />
        <AboutMe />
      </SectionWrapper>
      <SectionWrapper id="servizi" className="lg:mb-96 max-md:my-24">
        <StandardHeading
          className="lg:-mb-28"
          title="Servizi"
          description="Scopri cosa offro per la tua cura e bellezza."
          position="center"
        />
        <BentoGridSection />
      </SectionWrapper>
      <SectionWrapper id="galleria" className="lg:mt-20 max-md:my-24">
        <StandardHeading
          title="Lavori Realizzati Recentemente"
          description="Scopri le mie creazioni uniche di nail art."
          position="center"
        />
        <GalleryScroll />
      </SectionWrapper>
      <SectionWrapper id="stili-unghie" className="relative overflow-hidden">
        <StandardHeading
          title="Stili che potrebbero piacerti"
          description="Scopri i miei stili preferiti e trova nuovi stili per le tue unghie."
          position="center"
        />
        <NailsTypes />
      </SectionWrapper>
      <SectionWrapper
        id="banner"
        className="w-full max-w-[100%] pb-0 bg-roseGold-light dark:bg-rose/40 mt-40"
      >
        <CTASection />
      </SectionWrapper>

      <section
        id="contact-reviews-footer"
        className="relative w-full h-fit min-h-screen flex flex-col gap-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <section className="flex justify-center items-center w-full mt-10">
          <ReviewsMarquee />
        </section>
        <SectionWrapper
          id="faqs"
          className="flex justify-center items-center w-full mb-32 pb-20"
        >
          <FaqsSection />
        </SectionWrapper>
      </section>
    </PageWrapper>
  );
}
