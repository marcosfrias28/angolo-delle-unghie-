/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TestimonialCard, { TestimonialCardProps } from "./testimonial-card";

const testimonials: TestimonialCardProps[] = [
  {
    rating: 5,
    quote: "Servizio impeccabile e risultati straordinari!",
    name: "Giulia Rossi",
    position: "Manager, Beauty Spa",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/140cd7fe2fedf46172904ae8dd818c03aec37ca289946d23d98b72307c0957e5?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc5c54814b17bc15253cec7c71af2e8094d3e100aff39c793d9ff08c309bcbf8?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
  },
  {
    rating: 4,
    quote: "Non posso che raccomandarlo a tutti!",
    name: "Marco Bianchi",
    position: "Direttore, Nail Art",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/140cd7fe2fedf46172904ae8dd818c03aec37ca289946d23d98b72307c0957e5?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/63534a5ef60d8021f36b224e86e5a5526224ab63d0eebee8f7cf200a2f356407?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
  },
  {
    rating: 5,
    quote: "Un'esperienza che superato le mie aspettative!",
    name: "Elena Verdi",
    position: "Fondatrice, Nail Studio",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/140cd7fe2fedf46172904ae8dd818c03aec37ca289946d23d98b72307c0957e5?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/199693945f9c5ea42c3c4dc0d91ff16fb9b2ab2cbbe15ca8967129ccc202e9f1?placeholderIfAbsent=true&apiKey=d61f4ae53a074f4cb6bf4f3af87d0234",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <header className="flex flex-col max-w-full text-black w-[560px]">
        <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          Testimonianze Clienti
        </h2>
        <p className="mt-6 text-lg max-md:max-w-full">
          La mia esperienza è stata semplicemente fantastica!
        </p>
      </header>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;