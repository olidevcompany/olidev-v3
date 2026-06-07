"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Scanline from "./Scanline";
import { usePreloader } from "./usePreloader";

const PRELOADER_FINISHED_EVENT = "olidev-preloader-finished";

function notifyPreloaderFinished() {
  if (typeof window === "undefined") return;

  window.sessionStorage.setItem(PRELOADER_FINISHED_EVENT, "true");
  window.dispatchEvent(new Event(PRELOADER_FINISHED_EVENT));
}

export default function OlidevPreloader() {
  const loading = usePreloader();

  return (
    <AnimatePresence mode="wait" onExitComplete={notifyPreloaderFinished}>
      {loading && (
        <motion.div
          initial={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            opacity: 0,
            clipPath: "inset(0% 0% 100% 0%)",
          }}
          transition={{
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.085),transparent_42%)]" />

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 0.36],
              opacity: [0, 0.38, 0],
            }}
            transition={{
              duration: 2.3,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[620px] max-w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent"
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, rotate: 0 }}
              animate={{
                opacity: [0, 0.28, 0.1],
                scale: [0.82, 1.12, 1],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 2.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute -inset-20 rounded-full border border-white/10"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{
                opacity: [0, 0.18, 0.08],
                scale: [0.75, 1.02, 0.94],
              }}
              transition={{
                duration: 2.4,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-12 rounded-full border border-white/[0.07]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 0.18, 0],
                scale: [0.7, 1.35, 1.6],
              }}
              transition={{
                duration: 2.2,
                delay: 1.15,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_62%)]"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                filter: "blur(16px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden"
            >
              <Scanline />

              <motion.div
                initial={{ x: "-220%", opacity: 0 }}
                animate={{
                  x: "220%",
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 1.85,
                  delay: 1.12,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-[70px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
              />

              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255,255,255,0))",
                    "drop-shadow(0 0 30px rgba(255,255,255,0.22))",
                    "drop-shadow(0 0 10px rgba(255,255,255,0.08))",
                    "drop-shadow(0 0 0px rgba(255,255,255,0))",
                  ],
                }}
                transition={{
                  duration: 2.35,
                  delay: 1.35,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo-olidev.jpeg"
                  alt="OLIDEV"
                  width={300}
                  height={76}
                  priority
                  className="h-auto w-[240px] md:w-[300px]"
                />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 1.7,
                duration: 0.95,
                ease: "easeOut",
              }}
              className="mt-8 text-center text-[10px] uppercase tracking-[0.45em] text-neutral-600"
            >
              Onde a Excelência é o Ponto de Partida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0, 1, 0.45], y: 0 }}
              transition={{
                delay: 2.45,
                duration: 1,
                ease: "easeOut",
              }}
              className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-neutral-700"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}