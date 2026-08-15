"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __consent_initialized?: boolean;
    __ga4_loaded?: boolean;
    __adsense_loaded?: boolean;
  }
}

function ensureGtagBase() {
  if (window.__consent_initialized) return;
  window.__consent_initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

function activateGranted() {
  ensureGtagBase();

  window.gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  if (!window.__ga4_loaded) {
    window.__ga4_loaded = true;
    loadScript(
      "https://www.googletagmanager.com/gtag/js?id=G-2CK9LKG3HT"
    );
    window.gtag("js", new Date());
    window.gtag("config", "G-2CK9LKG3HT");
  }

  if (!window.__adsense_loaded) {
    window.__adsense_loaded = true;
    loadScript(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7284698282537450"
    );
  }
}

function activateDenied() {
  ensureGtagBase();

  window.gtag("consent", "update", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function handleConsentUpdate() {
  const consent = localStorage.getItem("cookie-consent");

  if (consent === "accepted") {
    activateGranted();
  } else if (consent === "declined") {
    activateDenied();
  }
}

export default function ConditionalScripts() {
  useEffect(() => {
    ensureGtagBase();
    handleConsentUpdate();

    window.addEventListener("cookie-consent-update", handleConsentUpdate);
    return () =>
      window.removeEventListener("cookie-consent-update", handleConsentUpdate);
  }, []);

  return null;
}
