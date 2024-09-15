import { Computer, Network } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";
import { OrbitingCirclesComponent } from "./orbiting-circles";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";
import config from "@/config";
import { BorderBeam } from "../magicui/border-beam";

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
  return (
    <div className="mx-auto flex flex-col md:flex-row gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 justify-center items-center p-4 w-screen h-screen">
      <div className="relative lg:max-w-lg col p-5 rounded-2xl shadow-xl bg-white hover:shadow-2xl hover:shadow-black/20 transition-all hover:scale-105 duration-500">
        <BorderBeam
          size={300}
          duration={5}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
        <p
          className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}
        >
          {config.websiteName}: A faster way to production
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
    </div>
  );
}
