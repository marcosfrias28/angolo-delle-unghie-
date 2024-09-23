import config from "@/config";
import HeroLogo from "@/app/(home)/_components/hero-logo";
import Meteors from "../magicui/meteors";
import Stars from "./stars";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import ScrollIcon from "./scroll-animation";

const homepageText = {
  cta: {
    title: "Riscopri la bellezza delle tue unghie",
    subtitle: "Prenota ora un trattamento su misura per mani perfette.",
    button: "Prenota Ora",
  },
  services: {
    title: "Servizi",
    description:
      "Offriamo una gamma completa di trattamenti professionali per la cura e la bellezza delle unghie, utilizzando solo i migliori prodotti sul mercato.",
    list: [
      {
        name: "Ricostruzione Unghie",
        description:
          "Unghie forti e impeccabili grazie alle nostre tecniche avanzate di ricostruzione.",
      },
      {
        name: "Manicure e Pedicure",
        description:
          "Cura completa per mani e piedi, con attenzione ai dettagli e prodotti di alta qualità.",
      },
      {
        name: "Nail Art Personalizzata",
        description:
          "Esprimi la tua personalità con design unici e creativi realizzati su misura.",
      },
      {
        name: "Trattamenti SPA",
        description:
          "Rilassati con i nostri esclusivi trattamenti SPA per mani e piedi.",
      },
    ],
  },
  about: {
    title: "Chi Siamo",
    description:
      "All'Angolo delle Unghie, l'eccellenza è la nostra priorità. Con anni di esperienza nel settore, offriamo trattamenti personalizzati per la cura delle unghie, garantendo risultati impeccabili. La nostra missione è far sentire ogni cliente speciale, con un'attenzione meticolosa a ogni dettaglio.",
  },
  reviews: {
    title: "Recensioni",
    description:
      "Scopri cosa dicono i nostri clienti dei nostri servizi e del nostro impegno per la perfezione.",
    testimonials: [
      {
        name: "Giulia R.",
        review:
          "Ho adorato la mia esperienza all'Angolo delle Unghie! Le mie unghie non sono mai state così belle.",
      },
      {
        name: "Maria S.",
        review:
          "Professionalità e creatività allo stato puro. Non vedo l'ora di tornare!",
      },
    ],
  },
  contact: {
    title: "Contattaci",
    description:
      "Per informazioni o per prenotare un appuntamento, compila il form o chiamaci al numero seguente.",
    phoneLabel: "Telefono",
    phone: "+39 123 456 789",
    emailLabel: "Email",
    email: "info@angolodelleunghie.it",
    form: {
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "La tua email",
      messagePlaceholder: "Il tuo messaggio",
      submitButton: "Invia",
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className={cn(
        "h-screen w-screen min-h-fit flex flex-col items-center justify-center",
        "bg-gradient-to-b from-roseGold-metallic dark:from-roseGold-metallic/20 from-70% to-transparent"
      )}
      aria-label={`${config.websiteName} Hero`}
    >
      <div id="stars">
        <Stars />
      </div>
      <Meteors meteorQuantity={7} />
      <div
        className={cn(
          "flex items-center justify-center flex-col lg:flex-row-reverse max-sm:mt-20 gap-10",
          "container"
        )}
      >
        <h1 className="sr-only">{config.websiteName}</h1>
        {[...Array(2)].map((_, i) => (
          <HeroLogo
            className={cn(i === 0 ? "hidden dark:block" : "block dark:hidden")}
            imageSrc={i === 0 ? "/hero-logo-rose.svg" : "/hero-logo.svg"}
          />
        ))}
        <CTASection />
      </div>
      <ScrollIcon />
    </section>
  );
}

const CTASection = () => {
  return (
    <section
      id="cta"
      className={cn("flex flex-col items-center justify-center", "opacity-0")}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white dark:text-white mb-6 text-center">
        {homepageText.cta.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        {homepageText.cta.subtitle}
      </p>
      <Link
        href="/prenota"
        className="px-8 py-4 bg-[rgb(244,183,180)] dark:bg-roseGold text-black dark:text-white rounded-full font-bold text-lg hover:bg-[rgb(234,173,170)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
      >
        {homepageText.cta.button}
        <BorderBeam
          size={100}
          duration={3}
          borderWidth={3}
          colorFrom="rgb(183, 110, 121)"
          colorTo="rgb(255, 228, 225)"
        />
      </Link>
    </section>
  );
};
