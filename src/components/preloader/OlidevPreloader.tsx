"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Scanline from "./Scanline";
import { usePreloader } from "./usePreloader";

const PRELOADER_FINISHED_EVENT = "olidev-preloader-finished";
const SCENE_DURATION = 3400;

function notifyPreloaderFinished() {
  if (typeof window === "undefined") return;

  window.sessionStorage.setItem(PRELOADER_FINISHED_EVENT, "true");
  window.dispatchEvent(new Event(PRELOADER_FINISHED_EVENT));
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();

    image.onload = async () => {
      try {
        await image.decode();
      } catch {
        // Mantém o fluxo caso o decode não esteja disponível.
      }

      resolve();
    };

    image.onerror = () => resolve();
    image.src = src;
  });
}

function waitForFrames() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export default function OlidevPreloader() {
  const loading = usePreloader();

  const [assetsReady, setAssetsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function prepareExperience() {
      await Promise.all([
        preloadImage("/brand/olidev-symbol-white.png"),
        preloadImage("/brand/olidev-wordmark-white.png"),
        document.fonts?.ready ?? Promise.resolve(),
      ]);

      await waitForFrames();

      if (!cancelled) {
        setAssetsReady(true);
      }
    }

    prepareExperience();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!assetsReady || loading) return;

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, SCENE_DURATION);

    return () => window.clearTimeout(timer);
  }, [assetsReady, loading]);

  return (
    <AnimatePresence mode="wait" onExitComplete={notifyPreloaderFinished}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 1.012,
            y: -8,
          }}
          transition={{
            duration: 1.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[99999] flex transform-gpu items-center justify-center overflow-hidden bg-black [will-change:transform,opacity]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.085),transparent_42%)]" />

          {assetsReady && (
            <>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 0.36],
                  opacity: [0, 0.38, 0],
                }}
                transition={{
                  duration: 2.15,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[620px] max-w-[80vw] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-white/45 to-transparent transform-gpu"
              />

              <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.84 }}
                  animate={
                    isMobile
                      ? {
                          opacity: [0, 0.2, 0.08],
                          scale: [0.84, 1.05, 1],
                        }
                      : {
                          opacity: [0, 0.28, 0.1],
                          scale: [0.82, 1.12, 1],
                          rotate: [0, 6, 0],
                        }
                  }
                  transition={{
                    duration: 2.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pointer-events-none absolute -inset-20 rounded-full border border-white/10 transform-gpu"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.78 }}
                  animate={{
                    opacity: [0, 0.18, 0.08],
                    scale: [0.78, 1.02, 0.94],
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none absolute -inset-12 rounded-full border border-white/[0.07] transform-gpu"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.78 }}
                  animate={{
                    opacity: [0, 0.16, 0],
                    scale: [0.78, 1.3, 1.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none absolute -inset-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_62%)] transform-gpu"
                />

                <div className="relative flex flex-col items-center overflow-visible">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.72,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      scale: [0.72, 1.055, 0.84],
                      y: [18, 0, -18],
                    }}
                    transition={{
                      duration: 2.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative z-10 transform-gpu [will-change:transform,opacity]"
                  >
                    <div className="relative h-[122px] w-[122px] md:h-[154px] md:w-[154px]">
                      <Image
                        src="/brand/olidev-symbol-white.png"
                        alt="Símbolo OLIDEV"
                        width={360}
                        height={360}
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 122px, 154px"
                        className="block h-full w-full select-none object-contain [transform:translateZ(0)]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 22,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative mt-3 overflow-hidden transform-gpu [will-change:transform,opacity]"
                  >
                    <Scanline />

                    <motion.div
                      initial={{ x: "-180%", opacity: 0 }}
                      animate={{
                        x: "190%",
                        opacity: [0, 0.54, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 1.62,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 z-10 hidden w-[80px] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-md sm:block"
                    />

                    <Image
                      src="/brand/olidev-wordmark-white.png"
                      alt="OLIDEV"
                      width={620}
                      height={120}
                      priority
                      unoptimized
                      sizes="(max-width: 768px) 220px, 280px"
                      className="h-auto w-[220px] select-none md:w-[280px]"
                    />
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.65,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="mt-8 text-center text-[10px] uppercase tracking-[0.45em] text-neutral-600 transform-gpu"
                >
                  Onde a Excelência é o Ponto de Partida.
                </motion.p>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}