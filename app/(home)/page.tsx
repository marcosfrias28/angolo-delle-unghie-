import { AccordionComponent } from "@/components/homepage/accordion-component";
import BlogSample from "@/components/homepage/blog-samples";
import HeroSection from "@/components/homepage/hero-section";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import Stars from "@/components/homepage/stars";
import Meteors from "@/components/magicui/meteors";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import BentoGridSection from "@/components/homepage/bento-grid";
import FallingPetals from "@/components/homepage/unghie";
import CTASection from "@/components/CTASection/cta-section";
import GalleriaImmagini from "@/components/GalleriaImmagini/GalleriaImmagini";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <div className="w-full min-h-screen">
        <SideBySide />
      </div>
      <div className="w-full max-w-[1920px] min-h-screen lg:mt-96">
        <BentoGridSection />
      </div>
      <div className="w-full min-h-screen bg-roseGold-light dark:bg-roseGold-dark lg:mt-96">
        <CTASection />
      </div>
      <div className="w-full min-h-screen bg-transparent ">
        <GalleriaImmagini />
      </div>
      <TestimonialSection />
      <FallingPetals />
      {config.auth.enabled && config.payments.enabled && (
        <div>
          <Pricing />
        </div>
      )}
      <div className="flex justify-center items-center w-full my-[8rem]">
        <AccordionComponent />
      </div>
    </PageWrapper>
  );
}
