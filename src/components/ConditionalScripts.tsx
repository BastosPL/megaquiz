"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ConditionalScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem("cookie-consent") === "accepted");
    };
    check();
    window.addEventListener("cookie-consent-update", check);
    return () => window.removeEventListener("cookie-consent-update", check);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7284698282537450"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2CK9LKG3HT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2CK9LKG3HT');
        `}
      </Script>
    </>
  );
}
