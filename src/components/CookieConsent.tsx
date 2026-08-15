"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }

    function handleReopen() {
      setVisible(true);
    }

    window.addEventListener("cookie-consent-reopen", handleReopen);
    return () =>
      window.removeEventListener("cookie-consent-reopen", handleReopen);
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
      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-ink px-6 py-5 shadow-2xl sm:flex sm:items-center sm:gap-6">
          <p className="flex flex-1 items-start gap-3 text-small leading-relaxed text-white/80">
            <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-bright" aria-hidden="true" />
            <span>
              Este site utiliza cookies para melhorar sua experiência e exibir
              anúncios personalizados. Ao continuar navegando, você concorda com
              nossa{" "}
              <Link
                href="/privacidade"
                className="text-brand-bright underline transition-colors hover:text-brand-bright/80"
              >
                Política de Privacidade
              </Link>
              .
            </span>
          </p>

          <div className="mt-4 flex gap-3 sm:mt-0 sm:shrink-0">
            <button
              onClick={handleDecline}
              className="flex-1 cursor-pointer rounded-xl border border-white/20 px-5 py-2.5 text-small font-medium text-white/80 transition-colors hover:bg-white/10 sm:flex-none"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 cursor-pointer rounded-xl bg-brand-bright px-5 py-2.5 text-small font-semibold text-ink transition-colors hover:brightness-95 sm:flex-none"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
