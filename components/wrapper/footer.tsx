"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Marquee from "@/components/ui/marquee";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Stars from "../homepage/stars";
import Meteors from "../magicui/meteors";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    // Gestione dell'invio della newsletter
  };

  return (
    <>
      <footer className="dark:bg-black bg-roseGold w-full relative">
        <Stars />
        <Meteors meteorQuantity={12} />
        <Marquee className="title-marquee -z-0 absolute -top-40 text-center px-20">
          <h1 className="text-[150px] font-black text-roseGold dark:text-black">
            L'Angolo Delle Unghie
          </h1>
        </Marquee>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 z-20">
              <div className="mt-8 space-y-4 lg:mt-0">
                <div>
                  <h3 className="text-2xl font-medium">
                    Iscriviti alla nostra newsletter
                  </h3>
                  <p className="mt-4 max-w-lg">
                    Ricevi le ultime novità, offerte speciali e consigli di
                    bellezza direttamente nella tua casella di posta.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full"
                >
                  <Input
                    {...register("email", { required: true })}
                    placeholder="Inserisci la tua email"
                    type="email"
                  />
                  <Button className="text-black dark:text-white" type="submit">
                    Iscriviti
                  </Button>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-medium">Social</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="https://www.instagram.com/angolodelleunghie_/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="transition hover:opacity-75 flex items-center"
                      >
                        <FaInstagram className="size-5 mr-2 text-white dark:text-rose" />{" "}
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="transition hover:opacity-75 flex items-center"
                      >
                        <FaFacebook className="size-5 mr-2 text-white dark:text-rose" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="transition hover:opacity-75 flex items-center"
                      >
                        <FaTiktok className="size-5 mr-2 text-white dark:text-rose" />
                        TikTok
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">Link Utili</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="/servizi"
                        className="transition hover:opacity-75"
                      >
                        I Nostri Servizi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/prenota"
                        className="transition hover:opacity-75"
                      >
                        Prenota un Appuntamento
                      </a>
                    </li>
                    <li>
                      <a
                        href="/galleria"
                        className="transition hover:opacity-75"
                      >
                        Galleria Lavori
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="/termini-e-condizioni"
                      className="transition hover:opacity-75"
                    >
                      Termini e Condizioni
                    </a>
                  </li>

                  <li>
                    <a href="/privacy" className="transition hover:opacity-75">
                      Informativa sulla Privacy
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-white">
                  &copy; 2024. L'Angolo Delle Unghie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
