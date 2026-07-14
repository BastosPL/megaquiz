"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __ga4_loaded?: boolean;
    __adsense_loaded?: boolean;
  }
}

function gtag(...args: any[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function loadScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

function initGoogleTag() {
  if (window.__ga4_loaded) return;
  window.__ga4_loaded = true;

  loadScript("https://www.googletagmanager.com/gtag/js?id=G-2CK9LKG3HT");

  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;

  gtag("js", new Date());

  gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  gtag("config", "G-2CK9LKG3HT");
}

function initAdSense() {
  if (window.__adsense_loaded) return;
  window.__adsense_loaded = true;

  loadScript(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7284698282537450"
  );
}

function handleConsentUpdate() {
  const consent = localStorage.getItem("cookie-consent");

  if (consent === "accepted") {
    initGoogleTag();
    initAdSense();
  }
}

export default function ConditionalScripts() {
  useEffect(() => {
    handleConsentUpdate();

    window.addEventListener("cookie-consent-update", handleConsentUpdate);
    return () =>
      window.removeEventListener("cookie-consent-update", handleConsentUpdate);
  }, []);

  return null;
}
