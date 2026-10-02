"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PRELOADER_FINISHED_EVENT = "olidev-preloader-finished";
const VIDEO_SRC = "/videos/olidev-splash.mp4";

const START_TIMEOUT = 8000;
const TOTAL_TIMEOUT = 20000;

function notifyPreloaderFinished() {
  try {
    window.sessionStorage.setItem(
      PRELOADER_FINISHED_EVENT,
      "true"
    );
  } catch {
    // A notificação funciona mesmo sem sessionStorage.
  }

  window.dispatchEvent(
    new Event(PRELOADER_FINISHED_EVENT)
  );
}

export default function OlidevPreloader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let closing = false;

    const closeSplash = () => {
      if (cancelled || closing) return;

      closing = true;
      window.clearTimeout(startTimer);
      window.clearTimeout(totalTimer);

      video.pause();
      setIsVisible(false);
    };

    const startTimer = window.setTimeout(() => {
      console.warn("[OLIDEV splash] Tempo de início excedido.");
      closeSplash();
    }, START_TIMEOUT);

    const totalTimer = window.setTimeout(
      closeSplash,
      TOTAL_TIMEOUT
    );

    const handlePlaying = () => {
      window.clearTimeout(startTimer);
    };

    const handleError = () => {
      console.error(
        "[OLIDEV splash] Erro do vídeo:",
        video.error
      );
      closeSplash();
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("ended", closeSplash);
    video.addEventListener("error", handleError);

    // Define as propriedades antes de solicitar a reprodução.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;

    if (video.error) {
      handleError();
    } else {
      // A Promise aguarda a preparação da mídia.
      // Não é necessário aguardar canplay para chamar play().
      void video.play().then(
        () => {
          if (cancelled || closing) {
            video.pause();
          }
        },
        (error: unknown) => {
          if (cancelled || closing) return;

          console.error(
            "[OLIDEV splash] Reprodução rejeitada:",
            error
          );
          closeSplash();
        }
      );
    }

    return () => {
      cancelled = true;

      window.clearTimeout(startTimer);
      window.clearTimeout(totalTimer);

      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("ended", closeSplash);
      video.removeEventListener("error", handleError);

      video.pause();
    };
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={notifyPreloaderFinished}>
      {isVisible && (
        <motion.div
          key="olidev-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
          role="status"
          aria-label="Abrindo o site OLIDEV"
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="pointer-events-none block h-auto max-h-[75dvh] w-[92vw] max-w-[720px] select-none object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}