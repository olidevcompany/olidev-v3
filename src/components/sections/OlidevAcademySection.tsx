"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MonitorPlay, Users } from "lucide-react";

const highlights = [
  { title: "Cursos práticos", icon: GraduationCap },
  { title: "Conteúdo atualizado", icon: MonitorPlay },
  { title: "Comunidade ativa", icon: Users },
];

export default function OlidevAcademySection() {
  const [einsteinActive, setEinsteinActive] = useState(false);

  return (
    <section
      id="academy"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        const isOverEinsteinFace = x >= 54 && x <= 94 && y >= 10 && y <= 76;

        setEinsteinActive(isOverEinsteinFace);
      }}
      onMouseLeave={() => setEinsteinActive(false)}
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.13),transparent_36%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-[18%] h-[480px] w-[480px] rounded-full bg-white/[0.05] blur-[160px]" />
        <div className="absolute right-[18%] bottom-[8%] h-[320px] w-[320px] rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[60%] w-[58%] opacity-[0.13] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      </div>

      <div className="absolute inset-y-0 right-0 z-0 hidden w-full lg:block">
        <div className="absolute bottom-20 right-[-10%] z-10 h-[150%] w-[75%]">
          <img
            src="/albert-einstein-cutout.png"
            alt="Albert Einstein"
            className={`pointer-events-none absolute bottom-0 right-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_40px_120px_rgba(0,0,0,.78)] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              einsteinActive
                ? "scale-[1.025] grayscale-0 opacity-100 brightness-110 contrast-110"
                : "scale-100 grayscale opacity-78 brightness-100 contrast-100"
            }`}
          />

          <div
  className={`pointer-events-none absolute bottom-[-12%] left-0 right-0 z-20 h-[42%] bg-gradient-to-t from-black via-black/85 to-transparent transition-opacity duration-[1200ms] ${
    einsteinActive ? "opacity-55" : "opacity-100"
  }`}
/>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/28 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-20"
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-md border border-white/15 bg-white/[0.035] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Lançamento
            </span>

            <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Nova extensão OLIDEV
            </span>
          </div>

          <h2 className="max-w-xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-5xl font-black uppercase tracking-[0.01em] text-transparent md:text-7xl">
            OLIDEV
            <br />
            Academy
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-300">
            Nossa plataforma de ensino criada para disseminar{" "}
            <span className="font-semibold text-white">conhecimento</span> e
            impulsionar carreiras através da{" "}
            <span className="font-semibold text-white">tecnologia.</span>
          </p>

          <div className="mt-9 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-sm">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex min-h-[104px] flex-col items-center justify-center px-3 text-center ${
                    index !== highlights.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <Icon className="mb-3 h-5 w-5 text-neutral-200" />

                  <span className="text-[10px] uppercase leading-5 tracking-[0.22em] text-neutral-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.012 }}
            whileTap={{ scale: 0.985 }}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.035] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
          >
            Em breve | OLIDEV Academy
            <ArrowRight className="ml-4 h-4 w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="pointer-events-none relative z-10 ml-auto hidden max-w-[330px] lg:mt-[27rem] lg:mr-[10rem] lg:block"
        >
          <div className="mb-4 h-px w-20 bg-white/35" />

          <p className="text-2xl font-light leading-tight text-white md:text-[2rem]">
            Uma mente que se expande jamais retorna ao seu tamanho original.
          </p>

          <div className="mt-6 h-px w-20 bg-white/30" />

          <p className="mt-5 text-[10px] uppercase tracking-[0.42em] text-neutral-400">
            Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  );
}