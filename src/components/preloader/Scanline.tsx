"use client";

import { motion } from "framer-motion";

export default function Scanline() {
  return (
    <motion.div
      initial={{
        x: "-220%",
        opacity: 0,
      }}
      animate={{
        x: "220%",
        opacity: [0, 1, 0.75, 0],
      }}
      transition={{
        duration: 1.65,
        delay: 0.85,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute inset-y-0 w-[180px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-xl"
    />
  );
}