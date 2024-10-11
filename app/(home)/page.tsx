import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import BentoGridSection from "@/components/homepage/bento-grid";
import CTASection from "@/components/CTASection/cta-section";
import Gallery from "@/components/GalleriaImmagini/galleria-immagini";
import BeautyServices from "@/components/homepage/beauty-services";
import ReviewsMarquee from "@/components/homepage/reviews";
export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <div className="w-full md:min-h-screen">
        <SideBySide />
      </div>
      <div className="w-full h-fit max-w-[1920px] min-h-screen lg:mt-40 overflow-hidden">
        <BentoGridSection />
      </div>
      <div className="w-full max-w-[1920px] min-h-screen py-28 max-md:py-24 max-md:pl-3 mb-20 md:mb-24 lg:mb-28 overflow-hidden">
        <Gallery />
      </div>
      <div className="relative w-full max-md:min-h-full min-h-screen max-w-[1920px] max-md:px-5 px-10 mb-20 lg:mt-40 overflow-hidden">
        <BeautyServices />
      </div>
      <div className="w-full min-h-screen bg-roseGold-light dark:bg-roseGold-dark lg:mt-40">
        <CTASection />
      </div>
      <section
        id="contact-reviews-footer"
        className="relative w-full h-fit min-h-screen"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="flex justify-center items-center w-full">
          <ReviewsMarquee />
        </div>
        <div className="flex justify-center items-center w-full mb-32 pb-20">
          <AccordionComponent />
        </div>
      </section>
    </PageWrapper>
  );
}
