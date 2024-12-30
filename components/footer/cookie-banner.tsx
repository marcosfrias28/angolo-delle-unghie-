"use client";

import { useEffect, useState } from "react";
import cookie from "js-cookie";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }
  return (
    <div className="fixed flex flex-row justify-between items-center bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
      <p className="text-md">
        Questo sito utilizza cookie per migliorare la tua esperienza. Leggi la
        nostra{" "}
        <Link href="/privacy" className="underline text-roseGold">
          Informativa sulla Privacy
        </Link>
      </p>
      <div className="flex gap-3 flex-nowrap">
        <button
          onClick={handleAccept}
          className="bg-roseGold text-white px-4 py-2 rounded"
        >
          Accetta
        </button>
        <button
          onClick={handleReject}
          className="bg-roseGold text-white px-4 py-2 rounded"
        >
          Rifiuta
        </button>
      </div>
    </div>
  );
}
