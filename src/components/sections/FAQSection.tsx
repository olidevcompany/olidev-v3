"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "A OLIDEV desenvolve apenas sites ou sistemas simples?",
    answer:
      "Não. A OLIDEV atua como núcleo de engenharia tecnológica avançada, desenvolvendo sistemas institucionais, plataformas corporativas, automações, infraestrutura, observabilidade, IA aplicada e soluções sob medida para operações críticas.",
  },
  {
    question: "A OLIDEV atende projetos públicos e privados?",
    answer:
      "Sim. Atuamos em projetos corporativos, institucionais e governamentais, sempre com arquitetura personalizada, visão de longo prazo, segurança, escalabilidade e refinamento de experiência.",
  },
  {
    question: "Vocês trabalham com tecnologias específicas?",
    answer:
      "A stack é definida conforme o contexto técnico do projeto. Trabalhamos com PHP, TypeScript, Python, Java, C#, Go, Rust, Next.js, React, PostgreSQL, Docker, Kubernetes, AWS, automação, observabilidade, cybersecurity e IA multimodal.",
  },
  {
    question: "Como funciona o início de um projeto com a OLIDEV?",
    answer:
      "O processo começa com uma avaliação estratégica do cenário, entendimento das necessidades operacionais, definição de arquitetura, escopo técnico e proposta de execução. O objetivo é evitar improviso e estruturar uma base sólida desde o início.",
  },
  {
    question: "A OLIDEV entrega soluções sob medida?",
    answer:
      "Sim. Cada projeto é desenhado conforme a maturidade, operação, riscos, integrações e objetivos da organização. Não trabalhamos com abordagem genérica ou empacotada quando o contexto exige engenharia específica.",
  },
  {
    question: "A OLIDEV também atua com IA corporativa?",
    answer:
      "Sim. Desenvolvemos camadas privadas de inteligência artificial para análise, automação, suporte operacional, leitura de dados, integração com sistemas e apoio à tomada de decisão em ambientes institucionais.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.09),transparent_36%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </span>

          <h2 className="mx-auto max-w-4xl bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-black tracking-[-0.08em] text-transparent md:text-7xl">
            Perguntas estratégicas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Respostas objetivas sobre atuação, tecnologia, projetos e modelo de
            execução da OLIDEV.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-white shadow-2xl shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]">
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between p-5 text-left md:p-6"
                  >
                    <span className="pr-6 text-base font-semibold text-neutral-100 md:text-lg">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-400 transition group-hover:text-white",
                        isOpen && "bg-white text-black"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-6">
                          <motion.p
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            className="text-sm leading-7 text-neutral-300 md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="mt-12"
        >
          <Card className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 text-center shadow-2xl shadow-black/40 backdrop-blur-sm md:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]" />

            <div className="relative z-10">
              <MessageCircle className="mx-auto mb-5 h-10 w-10 text-neutral-300" />

              <h3 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-2xl font-black tracking-[-0.05em] text-transparent md:text-3xl">
                Precisa avaliar um cenário específico?
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
                Nossa equipe pode realizar uma avaliação inicial para entender
                escopo, prioridade, arquitetura e viabilidade técnica.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl px-6">
                  <a href="#contato">Solicitar avaliação</a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-xl border border-white/10 px-6"
                >
                  <a href="#stack">Ver stack técnico</a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}