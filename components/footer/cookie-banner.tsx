"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    switch (consent) {
      case "accepted":
        setShowBanner(false);
        break;
      default:
        setShowBanner(true);
        break;
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleCancel = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="fixed flex flex-row justify-between items-center bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
        <p className="text-md">
          Questo sito utilizza cookie per migliorare la tua esperienza. Leggi la
          nostra{" "}
          <Link href="/privacy" className="underline text-roseGold">
            Informativa sulla Privacy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-nowrap">
          <button
            onClick={handleAccept}
            className="bg-roseGold text-white px-4 py-2 rounded"
          >
            Accetta
          </button>
          <button
            onClick={handleCancel}
            className="bg-roseGold text-white px-4 py-2 rounded"
          >
            Rifiuta
          </button>
        </div>
      </div>
    )
  );
}
