"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, Lato } from "next/font/google";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function WorkInProgressPage() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Controlla il cookie per determinare la prima visita
    const hasAcceptedBanner = document.cookie.includes("bannerAccepted=true");
    if (!hasAcceptedBanner) {
      setIsFirstVisit(true);
    } else {
      router.push("/");
    }
  }, [router]);

  const handleAccept = () => {
    // Imposta il cookie quando l'utente accetta
    document.cookie = "bannerAccepted=true; path=/; max-age=31536000"; // cookie valido per un anno
    router.push("/");
  };

  if (!isFirstVisit) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9e0e0] to-[#e0c5c5] p-4">
      <div className={`text-center ${playfair.className} mb-8`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#b76e79] tracking-wider">
          "Work in Progress"
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#9e5c63]">
          Eleganza in creazione
        </p>
      </div>

      <div className={`${lato.className} max-w-md text-center mb-8`}>
        <div className="bg-[#fdf1f1] border-2 border-[#d4a5a5] rounded-lg p-4 shadow-md">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="text-[#b76e79] mr-2" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#b76e79]">
              Avviso Importante
            </h2>
          </div>
          <p className="text-[#9e5c63]">
            Questa è una versione preliminare. Alcune informazioni potrebbero
            non essere corrette e alcune funzionalità potrebbero non essere
            operative. Questa anteprima è solo per la visualizzazione, senza
            funzionalità importanti implementate.
          </p>
        </div>
      </div>

      <button
        onClick={handleAccept}
        className="bg-[#b76e79] hover:bg-[#9e5c63] text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Accetta e Vai alla Pagina Principale
      </button>
    </div>
  );
}
