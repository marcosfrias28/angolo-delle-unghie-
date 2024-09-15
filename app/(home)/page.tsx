import { AccordionComponent } from "@/components/homepage/accordion-component";
import BlogSample from "@/components/homepage/blog-samples";
import HeroSection from "@/components/homepage/hero-section";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import Meteors from "@/components/magicui/meteors";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full">
        <HeroSection />
        <Meteors number={7} />
      </div>
      <div className="relative flex flex-col justify-center items-center w-screen mt-[1rem] p-3">
        <SideBySide />
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
