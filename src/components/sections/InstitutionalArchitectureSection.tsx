"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Database,
  Eye,
  GitBranch,
  Lock,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const layers = [
  {
    label: "Interface",
    value: "Premium UX",
    icon: Eye,
  },
  {
    label: "Backend",
    value: "Core APIs",
    icon: Server,
  },
  {
    label: "Dados",
    value: "PostgreSQL",
    icon: Database,
  },
  {
    label: "Automação",
    value: "Workflows",
    icon: Workflow,
  },
  {
    label: "IA",
    value: "Private AI",
    icon: Bot,
  },
  {
    label: "Segurança",
    value: "Hardening",
    icon: Lock,
  },
];

export default function InstitutionalArchitectureSection() {
  return (
    <section
      id="arquitetura"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_38%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-50 lg:block"
      >
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-72 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,.08)_0,rgba(255,255,255,.025)_50%,rgba(255,255,255,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,.06)_0,rgba(255,255,255,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
            Arquitetura institucional
          </span>

          <h2 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-black tracking-[-0.08em] text-transparent md:text-7xl">
            Camadas técnicas que sustentam operações.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A Olidev estrutura soluções como ecossistemas: interface, dados,
            backend, automação, infraestrutura, IA e segurança trabalhando como
            uma única base.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex items-center rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200"
            >
              Avaliar arquitetura
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 40, filter: "blur(18px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, delay: 0.15 }}
  className="mx-auto mt-14 max-w-7xl md:-mb-20 md:[mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
>
  <div className="md:-mr-16 md:pl-8 md:[perspective:1200px] md:[mask-image:linear-gradient(to_right,black_62%,transparent_100%)] lg:-mr-40 lg:pl-40">
    <div className="md:[transform:rotateX(20deg)]">
      <div className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] shadow-2xl shadow-black/70 md:h-[34rem] md:min-h-0 md:skew-x-[.32rad]">
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.16),transparent_35%)]" />

        <div className="relative z-10 flex min-h-[680px] flex-col p-5 md:h-full md:min-h-0 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500 md:text-xs md:tracking-[0.32em]">
                OLIDEV Architecture Core
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">
                Institutional Operating Layer
              </h3>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-neutral-300">
              <ShieldCheck className="h-4 w-4" />
              Secure Runtime
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 py-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5 md:py-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.055] md:p-5"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_70%)]" />

                  <div className="relative z-10 flex items-center gap-4 md:block">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-neutral-300 md:mb-7">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-600 md:text-xs md:tracking-[0.24em]">
                        {layer.label}
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-white md:mt-2 md:text-xl">
                        {layer.value}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-3 border-t border-white/10 pt-5 md:grid-cols-3 md:gap-5">
            {[
              ["Governança", "Fluxos auditáveis"],
              ["Escala", "Arquitetura modular"],
              ["Execução", "Operação contínua"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <div className="flex items-center gap-2 text-sm text-white">
                  <GitBranch className="h-4 w-4 text-neutral-500" />
                  {title}
                </div>

                <p className="mt-2 text-sm text-neutral-500">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}