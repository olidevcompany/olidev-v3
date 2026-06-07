"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "A OLIDEV trouxe clareza técnica e uma visão de arquitetura que elevou completamente a forma como estruturamos nossas operações digitais.",
    name: "Diretoria Executiva",
    role: "Instituição parceira",
    initials: "DE",
  },
  {
    text: "O diferencial esteve na capacidade de entender o cenário antes de propor tecnologia. A solução nasceu com robustez, não como improviso.",
    name: "Gestão de Operações",
    role: "Cliente corporativo",
    initials: "GO",
  },
  {
    text: "A entrega demonstrou rigor técnico, refinamento visual e preocupação real com escalabilidade, segurança e continuidade operacional.",
    name: "Coordenação Técnica",
    role: "Projeto institucional",
    initials: "CT",
  },
  {
    text: "Mais do que desenvolvimento, encontramos uma equipe capaz de traduzir complexidade em uma plataforma sólida, elegante e operacional.",
    name: "Secretaria Executiva",
    role: "Ambiente público",
    initials: "SE",
  },
  {
    text: "A abordagem da OLIDEV foi precisa: diagnóstico, arquitetura, execução e acompanhamento. Um padrão de engenharia raro no mercado.",
    name: "Núcleo Estratégico",
    role: "Organização parceira",
    initials: "NE",
  },
  {
    text: "A experiência final ficou extremamente refinada, mas sem perder a profundidade técnica necessária para sustentar operações críticas.",
    name: "Liderança de Projeto",
    role: "Plataforma digital",
    initials: "LP",
  },
  {
    text: "O projeto evoluiu com previsibilidade, comunicação objetiva e decisões técnicas muito bem fundamentadas.",
    name: "Gerência Institucional",
    role: "Cliente estratégico",
    initials: "GI",
  },
  {
    text: "A OLIDEV atuou como uma extensão técnica da nossa operação, com visão de longo prazo e execução consistente.",
    name: "Direção Operacional",
    role: "Organização privada",
    initials: "DO",
  },
  {
    text: "O resultado transmitiu confiança institucional, sofisticação visual e uma base tecnológica preparada para crescimento.",
    name: "Conselho Administrativo",
    role: "Projeto corporativo",
    initials: "CA",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type Testimonial = (typeof testimonials)[number];

function TestimonialsColumn({
  className = "",
  testimonials,
  duration = 16,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role, initials }, i) => (
              <div
                key={`${name}-${index}-${i}`}
                className="group w-full max-w-xs rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-white shadow-2xl shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-sm leading-7 text-neutral-300">
                  “{text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white text-sm font-bold text-black">
                    {initials}
                  </div>

                  <div className="flex flex-col">
                    <div className="text-sm font-semibold leading-5 text-neutral-100">
                      {name}
                    </div>
                    <div className="text-xs leading-5 text-neutral-500">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="feedbacks"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.09),transparent_36%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
            Feedbacks
          </span>

          <h2 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-black tracking-[-0.08em] text-transparent md:text-7xl">
            Confiança percebida na execução.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Registros ilustrativos do tipo de percepção que buscamos construir:
            engenharia sólida, sofisticação operacional e presença institucional.
          </p>
        </motion.div>

        <div className="mx-auto flex max-h-[720px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={18}
          />
        </div>
      </div>
    </section>
  );
}