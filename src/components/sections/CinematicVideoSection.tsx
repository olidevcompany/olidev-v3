"use client";

import { motion } from "framer-motion";

export default function CinematicVideoSection() {
  return (
    <motion.section
      id="cinematic-core"
      initial={{ opacity: 0, y: 80, scale: 0.96, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-screen min-h-[720px] overflow-hidden bg-black text-white"
    >
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/olidev-cinematic.mp4" type="video/mp4" />
      </motion.video>

      <div className="pointer-events-none absolute inset-0 bg-black/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="mx-auto w-full max-w-7xl"
        >
          <h2 className="max-w-4xl bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-black leading-[0.95] tracking-[-0.08em] text-transparent md:text-6xl">
            Tecnologia em movimento.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
            Engenharia, automação e infraestrutura aplicadas como presença
            contínua para operações que exigem precisão.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}