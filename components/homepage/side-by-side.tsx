"use client";

import { Computer, Network } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";
import config from "@/config";
import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
  useGSAP(() => {
    gsap.fromTo(
      "#hero-nail-2",
      { scale: 0.8, opacity: 0.2 },
      {
        scale: 1.2,
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#cta",
          start: "top 300px",
          end: "200px top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#dialog-1",
      { x: -1000 },
      {
        x: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#cta",
          start: "top 400px",
          end: "200px top",
          scrub: true,
          markers: true,
        },
      }
    );
    gsap.fromTo(
      "#dialog-2",
      { x: 1000 },
      {
        x: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#dialog-1",
          start: "top -200px",
          end: "200px top",
          scrub: true,
        },
      }
    );
  });

  return (
    <section className="relative container mx-auto flex flex-row justify-center lg:justify-end items-center p-4 w-screen h-screen">
      <div
        id="dialog-1"
        className="absolute top-0 left-0 z-10 lg:max-w-lg p-5 rounded-2xl shadow-2xl lg:ml-20 bg-white/60 dark:bg-black/50 backdrop-blur-lg hover:shadow-2xl hover:shadow-black/20 transition-all hover:scale-105 duration-500"
      >
        <BorderBeam
          size={600}
          duration={5}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
        <p
          className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}
        >
          {config.websiteName}: Specializzata
        </p>

        <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5"
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
      </div>
      <Image
        id="hero-nail-2"
        src="/hero-nail-2.webp"
        alt="Hands with nails french style"
        width={1200}
        height={1200}
        className="absolute left-0 mask-gradient -z-10"
      />
      <div
        id="dialog-2"
        className="absolute bottom-0 right-0 lg:max-w-lg p-5 rounded-2xl shadow-2xl lg:mr-20 bg-white/60 dark:bg-black/50 backdrop-blur-lg hover:shadow-2xl hover:shadow-black/20 transition-all hover:scale-105 duration-500"
      >
        <BorderBeam
          size={600}
          duration={5}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
        <p
          className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}
        >
          {config.websiteName}: Specializzata
        </p>

        <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5"
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
      </div>
    </section>
  );
}
