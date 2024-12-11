"use client";

import { usePathname } from "next/navigation";
import Marquee from "@/components/ui/marquee";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReviewForm } from "../homepage/review-form";
import StandardHeading from "@/components/generic/standard-heading";
import SocialLinks from "../footer/social-links";
import UsefulLinks from "../footer/useful-links";
import FooterLegal from "../footer/footer-legal";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const path = usePathname();

  if (path.includes("accedi") || path.includes("profilo-utente")) {
    return null;
  }

  useGSAP(() => {
    gsap.set(".title-marquee", { y: 100, opacity: 0 });
    gsap.to(".title-marquee", {
      y: 0,
      opacity: 1,
      duration: 4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".title-marquee",
        start: "-=500 center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <footer
      id="footer"
      className="dark:bg-black bg-roseGold text-white w-full relative"
    >
      <Marquee className="pointer-events-none title-marquee absolute -top-40 text-center">
        <h1 className="text-[150px] font-black mx-20 text-roseGold dark:text-black">
          L'Angolo Delle Unghie
        </h1>
      </Marquee>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <StandardHeading
              className="text-center text-white"
              size="small"
              title="Hai provato i miei servizi?"
              description="Lascia una recensione! 😊"
              position="center"
            />
            <ReviewForm />
          </div>

          <div className="relative flex flex-col py-8 lg:py-16 justify-center lg:pe-16">
            <StandardHeading
              className="text-white m-0 p-0"
              size="small"
              title="Informazioni"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 center">
              <SocialLinks />
              <UsefulLinks />
            </div>
            <FooterLegal />
          </div>
        </div>
      </div>
    </footer>
  );
}
