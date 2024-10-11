"use client";

import { useEffect, useRef } from "react";
import { Computer, Network } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";
import config from "@/config";
import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { TITLE_TAILWIND_CLASS } from "@/lib/constants";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Build faster.",
    description:
      "Get up and running in no time with pre-configured settings and best practices. Say goodbye to setup and focus on what truly matters - building your application.",
    icon: Computer,
  },
  {
    name: "Focus on business logic.",
    description:
      "Concentrate on solving business problems instead of dealing with the repetitive setup.",
    icon: FaBusinessTime,
  },
  {
    name: "Ready for scale.",
    description:
      "Prepare for growth from day one. With built-in optimizations and scalable architecture, your application will be ready to handle increased traffic and complexity.",
    icon: Network,
  },
];

export default function SideBySide() {
  const sectionRef = useRef(null);
  const dialogRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useMediaQuery("max-width:550px");
  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline();

    gsap.set(image, { y: 300, opacity: 0 });

    tl.to(image, {
      opacity: 1,
      y: 0,
      scale: isMobile ? 1.8 : 1.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row justify-center items-center min-h-[800px] p-4"
    >
      <Image
        ref={imageRef}
        id="hero-nail-2"
        src="/hand-nail-red-2.webp"
        alt="Hands with nails french style"
        width={1000}
        height={1000}
        className="absolute bottom left-1/2 -translate-x-1/2 mask-gradient opacity-0 w-auto h-auto max-md:mb-40"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        ref={dialogRef}
        className="opacity-0 w-full lg:w-1/2 p-6 lg:p-8 rounded-2xl shadow-xl bg-white/60 dark:bg-black/50 backdrop-blur-lg transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:scale-105"
      >
        <h2
          className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900 text-center`}
        >
          {config.websiteName}: Specializzata
        </h2>
        <BorderBeam
          size={400}
          duration={5}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />

        <dl className="mt-8 space-y-6 text-sm sm:text-base">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              id={`feature-${index}`}
              className="relative pl-9"
            >
              <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                <feature.icon
                  className="absolute left-0 top-1 h-5 w-5"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline dark:text-gray-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
