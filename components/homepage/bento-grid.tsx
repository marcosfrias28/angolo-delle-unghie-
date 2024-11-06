"use client";

import React from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import unghie from "@/public/grid/nails.webp";
import laminazione from "@/public/grid/2.webp";
import visoecorpo from "@/public/grid/visoecorpo.webp";
import massaggi from "@/public/grid/massaggi.webp";
import esteticabase from "@/public/grid/esteticabase.webp";
import { TbMassage } from "react-icons/tb";
import { GiEyelashes, GiFemaleLegs } from "react-icons/gi";
import { Icons } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: Icons.NailIcon,
    name: "Nails",
    description:
      "Esprimi la tua personalità con unghie eleganti e originali! Dai forma alla bellezza con i nostri trattamenti di onicotecnica avanzata, per mani che catturano ogni sguardo. Clicca e scopri come rendere uniche le tue unghie!",
    href: "/servizi/nails",
    cta: "Scopri di più",
    src: unghie,
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:mt-32",
  },
  {
    Icon: Icons.EsteticaIcon,
    name: "Trattamenti viso e corpo",
    description:
      "Ritrova la tua bellezza naturale con i nostri esclusivi trattamenti viso e corpo. Dalla luminosità della pelle alla tonicità dei tuoi tessuti, regala alla tua pelle il lusso che merita. Clicca e scopri la tua nuova routine di bellezza!",
    href: "/servizi/viso-e-corpo",
    cta: "Scopri di più",
    src: visoecorpo,
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:-mt-10",
  },
  {
    Icon: GiFemaleLegs,
    name: "Estetica Base",
    description:
      "Scopri l’essenza della bellezza con il servizio di estetica base! Trattamenti semplici ma efficaci per valorizzare il tuo aspetto naturale, lasciandoti fresca e radiosa. Clicca e inizia il tuo viaggio verso un benessere autentico!",
    href: "/servizi/estetica-base",
    cta: "Scopri di più",
    src: esteticabase,
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:-mt-10",
  },
  {
    Icon: TbMassage,
    name: "Massaggi",
    description:
      "Rilassa mente e corpo con massaggi professionali, pensati per sciogliere tensioni e stress. Scopri il piacere del benessere su misura e rigenerati con un’esperienza unica. Coccola la tua anima. Clicca qui per scoprire che tipo di massaggio fa per te.",
    href: "/servizi/massaggi",
    cta: "Scopri di più",
    src: massaggi,
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mt-80",
  },
  {
    Icon: GiEyelashes,
    name: "Laminazione ciglia e sopracciglia",
    description:
      "La laminazione è un trattamento che migliora ciglia e sopracciglia naturali, rendendole più folte e definite. In particolare, nel caso delle ciglia, la laminazione le rende più scure e folte, dando loro una curvatura che in genere si ottiene con il mascara.",
    href: "/servizi/laminazione",
    cta: "Scopri di più",
    src: laminazione,
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 lg:mt-80",
  },
];

const BentoGridSection = () => {
  useGSAP(() => {
    features.map((_, i) => {
      const tl = gsap.timeline();
      gsap.set(".feature" + i, { y: 300, x: 0, opacity: 0 });
      tl.to(`.feature${i}`, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.feature${i}`,
          start: "-30% bottom",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <BentoGrid className="mx-auto">
      {features.map((feature, i) => (
        <BentoCard
          key={i}
          className={cn(feature.class, `feature${i} group`, "h-full")}
          {...feature}
        />
      ))}
    </BentoGrid>
  );
};

export default BentoGridSection;
