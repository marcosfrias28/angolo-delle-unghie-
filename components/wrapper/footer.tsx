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
import { User } from "@/lib/db/schema";

gsap.registerPlugin(ScrollTrigger);

interface Footer {
  user: User | null;
}

export default function Footer({ user }: Footer) {
  const path = usePathname();

  if (
    path.includes("login") ||
    path.includes("dashboard") ||
    path.includes("privacy")
  ) {
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
      <Marquee className="w-full pointer-events-none title-marquee absolute -top-40 text-center z-10">
        <h1 className="text-[150px] font-black mx-20 text-roseGold dark:text-black">
          L'Angolo Delle Unghie
        </h1>
      </Marquee>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 py-8 lg:order-last lg:py-16 lg:ps-16 z-20">
            <StandardHeading
              className="text-center mx-0 mb-10 p-0 text-white dark:text-white"
              position="center"
              size="small"
              title="Hai provato i miei servizi?"
              description="Lascia una recensione! 😊"
            />
            <ReviewForm user={user} />
          </div>

          <div className="max-lg:w-full max-lg:h-[2px] w-[2px] my-10 h-auto dark:bg-rose bg-white z-20"></div>

          <div className="relative lg:order-first flex flex-col lg:py-16 mx-10 lg:w-1/2 z-20">
            <StandardHeading
              className="text-white mx-0 mb-10 p-0"
              position="center"
              size="small"
              title="Informazioni"
            />
            <div className="flex flex-row justify-around">
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
