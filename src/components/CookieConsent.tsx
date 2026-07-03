"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
        <div className="rounded-t-2xl bg-gray-900 px-6 py-5 shadow-2xl sm:flex sm:items-center sm:gap-6">
          <p className="flex-1 text-sm leading-relaxed text-gray-100">
            Este site utiliza cookies para melhorar sua experiência e exibir
            anúncios personalizados. Ao continuar navegando, você concorda com
            nossa{" "}
            <Link
              href="/privacidade"
              className="underline text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Política de Privacidade
            </Link>
            .
          </p>

          <div className="mt-4 flex gap-3 sm:mt-0 sm:shrink-0">
            <button
              onClick={handleDecline}
              className="flex-1 cursor-pointer rounded-lg border border-gray-500 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800 sm:flex-none"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 cursor-pointer rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-500 sm:flex-none"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
