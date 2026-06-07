"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.10),transparent_38%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
            Contato institucional
          </span>

          <h2 className="max-w-2xl bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-black tracking-[-0.08em] text-transparent md:text-5xl">
            Vamos avaliar seu próximo movimento tecnológico.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Envie uma mensagem para iniciarmos uma conversa estratégica sobre
            arquitetura, sistemas, IA, infraestrutura, automação ou presença
            institucional.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:contato@olidev.com.br"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.055]"
            >
              <Mail className="h-5 w-5" />
              contato@olidev.com.br
            </a>

            <a
              href="https://wa.me/558130493651"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.055]"
            >
              <Phone className="h-5 w-5" />
              WhatsApp institucional
            </a>

            <a
              href="https://instagram.com/olidev.br/"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.055]"
            >
              <MessageSquare className="h-5 w-5" />
              Instagram institucional
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-neutral-400">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="h-12 w-full rounded-xl border border-white/10 bg-black/50 px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-400">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@empresa.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-black/50 px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-neutral-400">Empresa / Instituição</label>
            <input
              type="text"
              placeholder="Nome da organização"
              className="h-12 w-full rounded-xl border border-white/10 bg-black/50 px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/25"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-neutral-400">Tipo de necessidade</label>
            <select className="h-12 w-full rounded-xl border border-white/10 bg-black/50 px-4 text-sm text-white outline-none focus:border-white/25">
              <option>Engenharia de software</option>
              <option>IA corporativa</option>
              <option>Infraestrutura / DevOps</option>
              <option>Automação operacional</option>
              <option>Observabilidade / Segurança</option>
              <option>Projeto institucional sob medida</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-neutral-400">Mensagem</label>
            <textarea
              rows={6}
              placeholder="Descreva brevemente o cenário, objetivo ou desafio técnico."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/25"
            />
          </div>

          <button
            type="submit"
            className="group mt-6 flex h-11 w-full items-center justify-center rounded-xl bg-white px-6 font-medium text-black transition hover:scale-[1.01] hover:bg-neutral-200"
          >
            Enviar mensagem
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-center text-xs leading-6 text-neutral-600">
            Em breve estaremos entrando em contato com você. Parabéns por escolher a Olidev!
          </p>
        </motion.form>
      </div>
    </section>
  );
}