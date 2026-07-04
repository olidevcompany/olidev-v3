"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Cookie, Settings2 } from "lucide-react";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "olidev_cookie_consent";

function saveConsent(analytics: boolean) {
  const preferences: ConsentPreferences = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

  window.dispatchEvent(
    new CustomEvent("olidev-cookie-consent-updated", {
      detail: preferences,
    }),
  );
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = window.setTimeout(() => {
      const savedConsent = localStorage.getItem(STORAGE_KEY);

      if (!savedConsent) {
        setIsVisible(true);
      }
    }, 2400);

    return () => window.clearTimeout(timer);
  }, []);

  function handleAcceptAll() {
    saveConsent(true);
    setIsVisible(false);
  }

  function handleSavePreferences() {
    saveConsent(analyticsEnabled);
    setIsVisible(false);
  }

  if (!isMounted || !isVisible) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-[100] w-[calc(100%-2.5rem)] max-w-[430px] overflow-hidden rounded-2xl border border-white/15 bg-black/90 p-5 text-white shadow-[0_24px_90px_rgba(0,0,0,0.58)] backdrop-blur-2xl md:bottom-7 md:right-[104px] md:w-[min(430px,calc(100%-8rem))]"
      role="dialog"
      aria-label="Preferências de cookies"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_34%)]" />

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05]">
            <Cookie className="h-4 w-4 text-white" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Privacidade e cookies
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Utilizamos cookies necessários e analíticos para aprimorar a
              navegação, compreender interações e evoluir a experiência digital
              da OLIDEV.
            </p>
          </div>
        </div>

        {isCustomizing && (
          <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Cookies necessários
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-400">
                    Essenciais para segurança, funcionamento e registro das suas
                    preferências.
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-300">
                  <Check className="h-3 w-3" />
                  Ativo
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAnalyticsEnabled((current) => !current)}
              className="flex w-full items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-sm font-medium text-white">
                  Cookies analíticos
                </p>

                <p className="mt-1 text-xs leading-5 text-neutral-400">
                  Ajudam a entender acessos, cliques, scroll, navegação e
                  desempenho do site.
                </p>
              </div>

              <span
                className={`relative mt-1 inline-flex h-6 w-11 shrink-0 rounded-full border transition ${
                  analyticsEnabled
                    ? "border-white bg-white"
                    : "border-white/20 bg-white/[0.08]"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full transition ${
                    analyticsEnabled
                      ? "right-1 bg-black"
                      : "left-1 bg-neutral-400"
                  }`}
                />
              </span>
            </button>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          {isCustomizing ? (
            <button
              type="button"
              onClick={handleSavePreferences}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-white px-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.01] hover:bg-neutral-200 active:scale-[0.98]"
            >
              Salvar preferências
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsCustomizing(true)}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Personalizar
              <Settings2 className="h-3.5 w-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.01] hover:bg-neutral-200 active:scale-[0.98]"
          >
            Aceitar todos
            <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
          </button>
        </div>

        <p className="mt-4 text-[11px] leading-5 text-neutral-500">
          Você pode alterar suas preferências posteriormente na Política de
          Cookies.
        </p>
      </div>
    </div>
  );
}