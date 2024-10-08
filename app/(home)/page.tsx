import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import BentoGridSection from "@/components/homepage/bento-grid";
import CTASection from "@/components/CTASection/cta-section";
import Gallery from "@/components/GalleriaImmagini/galleria-immagini";
import BeautyServices from "@/components/homepage/beauty-services";
import ReviewsMarquee from "@/components/homepage/reviews";
export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <div className="w-full min-h-screen">
        <SideBySide />
      </div>
      <div className="w-full h-fit max-w-[1920px] min-h-screen lg:mt-40 overflow-hidden">
        <BentoGridSection />
      </div>
      <div className="w-full max-w-[1920px] min-h-screen py-28 max-md:py-24 max-md:pl-5 mb-20 md:mb-24 lg:mb-28 overflow-hidden">
        <Gallery />
      </div>
      <div className="relative w-full min-h-screen max-w-[1920px] max-md:px-7 px-10 mb-20 lg:mt-40 overflow-hidden">
        <BeautyServices />
      </div>
      <div className="w-full min-h-screen bg-roseGold-light dark:bg-roseGold-dark lg:mt-40">
        <CTASection />
      </div>
      <div className="flex justify-center items-center w-full my-[3rem] lg:my-[10rem]">
        <ReviewsMarquee />
      </div>
      <div className="flex justify-center items-center w-full my-[8rem]">
        <AccordionComponent />
      </div>
    </PageWrapper>
  );
}
