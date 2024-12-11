"use client";

import { usePathname } from "next/navigation";
import Marquee from "@/components/ui/marquee";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Stars from "../homepage/stars";
import Meteors from "../magicui/meteors";
import { ReviewForm } from "../homepage/review-form";
import { StandardHeader } from "../generic/standard-header";
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
      <Stars />
      <Meteors meteorQuantity={12} />
      <Marquee className="title-marquee -z-0 absolute -top-40 text-center">
        <h1 className="text-[150px] font-black text-roseGold dark:text-black">
          L'Angolo Delle Unghie
        </h1>
      </Marquee>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 z-20">
            <div className="w-full mx-auto">
              <StandardHeader
                className="p-0"
                size="small"
                title="Vuoi lasciare una recensione?"
                position="center"
              />
              <ReviewForm />
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <StandardHeader
              className="p-0"
              size="small"
              title="Informazioni"
              position="center"
            />
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
