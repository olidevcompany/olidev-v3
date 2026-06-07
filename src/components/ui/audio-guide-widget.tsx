"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AUDIO_SRC = "/audio/olidev-intro.mp3";

export default function AudioGuideWidget() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration > 0 ? (time / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTime = () => setTime(audio.currentTime);
    const handleLoaded = () => setDuration(audio.duration || 0);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  async function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    setOpen(true);

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  function closeWidget() {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setPlaying(false);
    setTime(0);
    setOpen(false);
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

      <div className="fixed bottom-22 right-6 z-[80] flex flex-col items-end gap-2">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-5 text-white shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                    Audio Guide
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Apresentação OLIDEV
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-400">
                    Ouça uma introdução institucional sobre nossa atuação.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeWidget}
                  className="rounded-full border border-white/10 bg-white/[0.035] p-2 text-neutral-400 transition hover:text-white"
                  aria-label="Fechar guia de áudio"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleAudio}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-[1.03]"
                  aria-label={playing ? "Pausar áudio" : "Reproduzir áudio"}
                >
                  {playing ? (
                    <Pause className="h-5 w-5 fill-black" />
                  ) : (
                    <Play className="h-5 w-5 fill-black" />
                  )}
                </button>

                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>{formatTime(time)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.15 }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex h-8 items-center justify-center gap-1">
                {Array.from({ length: 34 }).map((_, index) => (
                  <span
                    key={index}
                    className={cn(
                      "w-0.5 rounded-full bg-white/20 transition-all duration-300",
                      playing ? "animate-audio-wave bg-white/60" : "h-1"
                    )}
                    style={
                      playing
                        ? {
                            height: `${8 + ((index * 13) % 22)}px`,
                            animationDelay: `${index * 0.045}s`,
                          }
                        : undefined
                    }
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={toggleAudio}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={cn(
            "group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white text-black shadow-2xl shadow-black/50 transition",
            playing && "ring-4 ring-white/10"
          )}
          aria-label="Ouvir apresentação institucional da OLIDEV"
        >
          <Volume2 className="h-5 w-5 md:h-6 md:w-6" />
        </motion.button>
      </div>
    </>
  );
}

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "00:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}