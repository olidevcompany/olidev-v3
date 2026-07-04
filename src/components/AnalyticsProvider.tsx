"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "olidev_cookie_consent";

function getAnalyticsConsent() {
  try {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) return false;

    const preferences = JSON.parse(savedConsent) as ConsentPreferences;

    return preferences.analytics === true;
  } catch {
    return false;
  }
}

export default function AnalyticsProvider() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setAnalyticsAllowed(getAnalyticsConsent());

    function handleConsentUpdated() {
      setAnalyticsAllowed(getAnalyticsConsent());
    }

    window.addEventListener(
      "olidev-cookie-consent-updated",
      handleConsentUpdated,
    );

    return () => {
      window.removeEventListener(
        "olidev-cookie-consent-updated",
        handleConsentUpdated,
      );
    };
  }, []);

  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  if (!analyticsAllowed) return null;

  return (
    <>
      {gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "${gaMeasurementId}", {
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}

      {clarityProjectId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      )}
    </>
  );
}
