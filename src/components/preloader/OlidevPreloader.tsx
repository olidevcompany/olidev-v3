"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PRELOADER_FINISHED_EVENT = "olidev-preloader-finished";
const VIDEO_SRC = "/videos/olidev-splash.mp4";

const START_TIMEOUT = 4000;
const TOTAL_TIMEOUT = 15000;

function notifyPreloaderFinished() {
  try {
    window.sessionStorage.setItem(PRELOADER_FINISHED_EVENT, "true");
  } catch {
    // Mantém a notificação se o armazenamento estiver indisponível.
  }

  window.dispatchEvent(new Event(PRELOADER_FINISHED_EVENT));
}

export default function OlidevPreloader() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Libera o site se houver demora excessiva ou travamento.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      videoRef.current?.pause();
      setIsVisible(false);
    }, TOTAL_TIMEOUT);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let attempted = false;
    let closing = false;

    const closeSplash = () => {
      if (cancelled || closing) return;

      closing = true;
      window.clearTimeout(startTimer);
      video.pause();
      setIsVisible(false);
    };

    const startTimer = window.setTimeout(
      closeSplash,
      START_TIMEOUT
    );

    const handlePlaying = () => {
      if (cancelled || closing) return;

      window.clearTimeout(startTimer);
      setIsPlaying(true);
    };

    const startPlayback = async () => {
      if (cancelled || attempted || closing) return;

      attempted = true;
      video.muted = true;
      video.defaultMuted = true;

      try {
        await video.play();

        if (cancelled || closing) {
          video.pause();
        }
      } catch {
        closeSplash();
      }
    };

    video.addEventListener("canplay", startPlayback);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("ended", closeSplash);
    video.addEventListener("error", closeSplash);

    if (video.error) {
      closeSplash();
    } else if (
      video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA
    ) {
      void startPlayback();
    }

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);

      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("ended", closeSplash);
      video.removeEventListener("error", closeSplash);

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
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="pointer-events-none block h-auto max-h-[75dvh] w-[92vw] max-w-[720px] select-none object-contain"
            style={{
              opacity: isPlaying ? 1 : 0,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}