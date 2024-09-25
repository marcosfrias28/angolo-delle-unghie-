"use client";

import React from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GiNails } from "react-icons/gi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lamizaione from "@/public/9beb8f114e8d8f7613bab34100cfd4d9.jpg";
import { GiEyelashes } from "react-icons/gi";
import { Icons } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const imageCustomClass =
  "absolute -right-20 -top-20 opacity-70 group-hover:opacity-30 dark:group-hover:opacity-30 transition-all duration-500 mask-gradient group-hover:grayscale object-cover min-w-full h-full object-center";

const features = [
  {
    Icon: GiNails,
    name: "Uknown",
    description:
      "La laminazione è un trattamento che migliora ciglia e sopracciglia naturali, rendendole più folte e definite. In particolare, nel caso delle ciglia, la laminazione le rende più scure e folte, dando loro una curvatura che in genere si ottiene con il mascara.",
    href: "/",
    cta: "Scopri di più",
    background: (
      <div className="relative group">
        <Image
          src="/smalto-cadente.webp"
          className={cn(imageCustomClass)}
          width={400}
          height={400}
        />
        <div
          className="hidden lg:block h-[800px] w-1 bg-gradient-to-b from-roseGold-dark to-roseGold-light/10
         right-[118px] top-[300px] absolute group-hover:grayscale opacity-70 group-hover:opacity-30 dark:group-hover:opacity-90 transition-all duration-500"
        ></div>
      </div>
    ),
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Icons.NailIcon,
    name: "Nails",
    description:
      "Manicure, pedicure e ricostruzione unghie per mani e piedi sempre impeccabili.",
    href: "/",
    cta: "Scopri di più",
    background: (
      <Image src="/nail-bg.jpg" className={cn(imageCustomClass)} fill />
    ),
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Icons.EsteticaIcon,
    name: "Estetica Base",
    description:
      "Cerette, massaggi e trattamenti viso e corpo per il tuo benessere e bellezza.",
    href: "/",
    cta: "Scopri di più",
    background: (
      <Image src="/estetica-bg.jpg" className={cn(imageCustomClass)} fill />
    ),
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GiNails,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Scopri di più",
    background: (
      <Image
        src="/smalti-blob.webp"
        className={cn(imageCustomClass)}
        sizes="(max-width: 768px) 100vw, 33vw"
        width={1000}
        height={1000}
      />
    ),
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GiEyelashes,
    name: "Laminazione ciglia e sopracciglia",
    description:
      "La laminazione è un trattamento che migliora ciglia e sopracciglia naturali, rendendole più folte e definite. In particolare, nel caso delle ciglia, la laminazione le rende più scure e folte, dando loro una curvatura che in genere si ottiene con il mascara.",
    href: "/",
    cta: "Scopri di più",
    background: (
      <Image
        placeholder="blur"
        src={lamizaione}
        className={cn(imageCustomClass)}
        fill
      />
    ),
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoGridSection = () => {
  useGSAP(() => {
    features.map((_, i) => {
      gsap.fromTo(
        `.feature${i}`,
        { y: 300, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 1,
          scrollTrigger: {
            trigger: `.feature${i}`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <BentoGrid className="p-5">
      {features.map((feature, i) => (
        <BentoCard
          key={i}
          className={cn(feature.class, `feature${i} group`)}
          {...feature}
        />
      ))}
    </BentoGrid>
  );
};

export default BentoGridSection;
