"use client";

import { useEffect } from "react";

function loadScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

function initGA4() {
  if ((window as any).__ga4_loaded) return;
  (window as any).__ga4_loaded = true;

  loadScript("https://www.googletagmanager.com/gtag/js?id=G-2CK9LKG3HT");

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", "G-2CK9LKG3HT");
}

function initAdSense() {
  loadScript(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7284698282537450"
  );
}

export default function ConditionalScripts() {
  useEffect(() => {
    const activate = () => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        initGA4();
        initAdSense();
      }
    };

    activate();
    window.addEventListener("cookie-consent-update", activate);
    return () => window.removeEventListener("cookie-consent-update", activate);
  }, []);

  return null;
}
