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

export default function Home() {
  return (
    <PageWrapper>
      <div>
        <HeroSection />
      </div>
      <div>
        <SideBySide />
      </div>
      <div className="w-full max-w-[1920px] lg:mt-96">
        <BentoGridSection />
      </div>
      <div className="max-w-[1200px] p-8 mt-[2rem] lg:mt-[6rem] lg:mb-[5rem]">
        <BlogSample />
      </div>
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
