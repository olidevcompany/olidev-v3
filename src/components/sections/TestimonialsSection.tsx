"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "A OLIDEV demonstrou uma capacidade incomum de transformar necessidades operacionais complexas em uma arquitetura clara, segura e preparada para evolução. O resultado foi uma solução com visão de longo prazo, não apenas uma entrega pontual.",
    name: "Amaro Moura Filho",
    role: "CFO - Grupo Moura S/A",
    image: "/partners/amaro-filho.png",
    imageAlt: "Amaro Moura Filho",
    type: "photo" as const,
  },
  {
    text: "O trabalho da OLIDEV se destacou pela combinação entre refinamento visual, decisões técnicas sólidas e entendimento estratégico do negócio. A equipe trouxe maturidade para cada etapa da construção.",
    name: "Manuella Oliveira",
    role: "Presidente - Start Ensino LTDA",
    image: "/partners/manuella-oliveira.png",
    imageAlt: "Manuella Oliveira",
    type: "photo" as const,
  },
  {
    text: "Encontramos na OLIDEV um parceiro capaz de discutir arquitetura, operação, segurança e experiência do usuário no mesmo nível. Isso trouxe muito mais consistência para o nosso projeto digital.",
    name: "Renata Diniz",
    role: "CEO - Montti Plaza",
    image: "/partners/renata-diniz.png",
    imageAlt: "Renata Diniz",
    type: "photo" as const,
  },
  {
    text: "A condução foi precisa desde o diagnóstico. A OLIDEV não apresentou uma solução genérica: estruturou uma base tecnológica alinhada ao nosso fluxo, à nossa escala e às decisões que precisávamos tomar.",
    name: "Ester Paiva",
    role: "Diretora Executiva - Bom Sucesso LTDA",
    image: "/partners/ester-paiva.png",
    imageAlt: "Ester Paiva",
    type: "photo" as const,
  },
  {
    text: "A OLIDEV conseguiu unir tecnologia, clareza operacional e presença institucional. O projeto foi pensado com profundidade, priorizando confiabilidade, continuidade e capacidade de crescimento.",
    name: "César Vicari",
    role: "CEO - Airsell Company",
    image: "/partners/cesar-vicari.png",
    imageAlt: "César Vicari",
    type: "photo" as const,
  },
  {
    text: "A OLIDEV trouxe uma leitura muito madura do nosso cenário. Antes de propor tecnologia, a equipe compreendeu os gargalos operacionais e desenhou uma solução que realmente fazia sentido para a rotina da organização.",
    name: "Marina Albuquerque",
    role: "Diretora de Operações - CupWell",
    image: "/partners/marina-albuquerque.jpg",
    imageAlt: "Marina Albuquerque",
    type: "photo" as const,
  },
  {
    text: "O diferencial esteve na qualidade da arquitetura e no cuidado com os detalhes. A OLIDEV conseguiu equilibrar sofisticação visual, usabilidade e uma estrutura técnica robusta para sustentar o crescimento da plataforma.",
    name: "Ricardo Valença",
    role: "Head de Tecnologia - Grupo Altiva",
    image: "/partners/ricardo-valenca.jpg",
    imageAlt: "Ricardo Valença",
    type: "photo" as const,
  },
  {
    text: "A experiência com a OLIDEV foi marcada por organização, transparência e domínio técnico. A equipe traduziu uma demanda ampla em um sistema bem estruturado, com prioridade para segurança e inteligência operacional.",
    name: "Camila Torres",
    role: "Gerente de Projetos - Aurora Desenvolvimento",
    image: "/partners/camila-torres.jpg",
    imageAlt: "Camila Torres",
    type: "photo" as const,
  },
  {
    text: "A OLIDEV nos deu confiança pela forma como conduziu o projeto: visão estratégica, comunicação objetiva e preocupação genuína com a sustentabilidade técnica da solução. É uma parceria que agrega valor além do desenvolvimento.",
    name: "Felipe Menezes",
    role: "Presidente - Instituto Horizonte",
    image: "/partners/felipe-menezes.jpg",
    imageAlt: "Felipe Menezes",
    type: "photo" as const,
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
            {testimonials.map(({ text, name, role, image, imageAlt, type }, i) => (
  <div
    key={`${name}-${index}-${i}`}
    className="group w-full max-w-xs rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-white shadow-2xl shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <p className="text-sm leading-7 text-neutral-300">
      “{text}”
    </p>

    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
        <img
          src={image}
          alt={imageAlt}
          className={
          type === "photo"
          ? "h-full w-full rounded-full object-cover"
          : "h-7 w-7 object-contain"
        }
      />
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