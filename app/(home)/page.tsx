import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import BentoGridSection from "@/components/homepage/bento-grid";
import CTASection from "@/components/CTASection/cta-section";
import GalleryScroll from "@/components/GalleriaImmagini/gallery-scroll";
import ReviewsMarquee from "@/components/homepage/reviews";
import { cn } from "@/lib/utils";
import Meteors from "@/components/magicui/meteors";
import Stars from "@/components/homepage/stars";
import BeautyServices from "@/components/homepage/beauty-services";
import { Suspense } from "react";
export default function Home() {
  return (
    <PageWrapper>
      <div
        className={cn(
          "w-full h-auto min-h-screen relative",
          "bg-gradient-to-b from-roseGold-metallic dark:from-roseGold-metallic/20 from-70% to-transparent"
        )}
      >
        <Stars />
        <Meteors meteorQuantity={12} />
        <HeroSection />
        <div className="max-md:px-5 px-10">
          <SideBySide />
        </div>
      </div>
      <div className="w-full h-fit max-w-[1920px] min-h-screen lg:mt-40 max-md:px-5 px-10 overflow-hidden">
        <BentoGridSection />
      </div>
      <div className="relative w-full max-w-[1920px] min-h-screen my-28 max-md:my-24 max-md:pl-3 max-md:px-5 px-10 overflow-hidden">
        <GalleryScroll />
      </div>
      <div className="relative w-full max-w-[1920px] max-md:px-5 px-10 overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <BeautyServices />
        </Suspense>
      </div>
      <div className="w-full bg-roseGold-light dark:bg-roseGold-dark mt-40">
        <CTASection />
      </div>
      <section
        id="contact-reviews-footer"
        className="relative w-full h-fit min-h-screen flex flex-col gap-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l z-10 from-white dark:from-black max-md:dark:from-black/50"></div>
        <div className="flex justify-center items-center w-full mt-10">
          <ReviewsMarquee />
        </div>
        <div className="flex justify-center items-center w-full mb-32 pb-20">
          <AccordionComponent />
        </div>
      </section>
    </PageWrapper>
  );
}
