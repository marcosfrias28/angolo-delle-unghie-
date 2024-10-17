/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import ServiceCard from "./ServiceCard";
import ActionButtons from "./ActionButtons";
import Image from "next/image";

interface CTASectionProps {}

const CTASection: React.FC<CTASectionProps> = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/948451c9cd8add0c7dc0bef71b0473d97863fd278817d8c452b8ceeb18b02e5b?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
      title: "Competenza Assicurata",
      description:
        "Scopri tecniche innovative per la cura delle unghie e tendenze all'avanguardia.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/948451c9cd8add0c7dc0bef71b0473d97863fd278817d8c452b8ceeb18b02e5b?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
      title: "Servizi Personalizzati",
      description:
        "Ogni trattamento è personalizzato per soddisfare le tue esigenze uniche.",
    },
  ];

  return (
    <section className="flex overflow-hidden max-lg:flex-col flex-row justify-center w-screen h-[50vh] min-h-fit">
      <Image
        loading="lazy"
        blurDataURL="/materials.jpg"
        placeholder="blur"
        src="/materials.jpg"
        width={1000}
        height={1000}
        alt="Nail expert at work"
        className="object-contain w-1/2 flex-1 h-auto"
      />

      <section className="flex flex-col flex-1 self-stretch my-auto basis-0 w-1/2 px-16 max-lg:px-5 py-28 max-lg:py-24">
        <Header />
        <div className="flex flex-col mt-8 w-full max-lg:max-w-full">
          <div className="flex flex-wrap gap-6 items-start py-2 w-full max-lg:max-w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <ActionButtons />
      </section>
    </section>
  );
};

export default CTASection;
