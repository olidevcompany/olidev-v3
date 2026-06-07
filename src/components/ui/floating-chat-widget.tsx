"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Mail, MessageSquare, Phone, Send, X } from "lucide-react";

type ChatMessage = {
  from: "bot" | "user";
  text: string;
};

const CONTACTS = {
  email: "contato@olidev.com.br",
  whatsapp: "https://wa.me/558130493651",
  whatsappLabel: "+55 (81) 3049-3651",
  instagram: "https://instagram.com/olidev.br/",
  instagramLabel: "@olidev.br",
};

const defaultMessage = `Olá, tudo bem?

Sou o assistente virtual da OLIDEV. Para facilitar seu contato conosco, seguem nossos canais institucionais:

E-mail: ${CONTACTS.email}
WhatsApp: ${CONTACTS.whatsappLabel}
Instagram: ${CONTACTS.instagramLabel}

Será uma honra lhe atender.`;

const replyMessage = `Olá, tudo bem? Fico feliz por estar interagindo comigo!

Para facilitar seu contato conosco, acesse os seguintes meios de comunicação:

E-mail: ${CONTACTS.email}
WhatsApp: ${CONTACTS.whatsappLabel}
Instagram: ${CONTACTS.instagramLabel}

Será uma honra lhe atender!`;

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "bot",
      text: defaultMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const replyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanInput = input.trim();
    if (!cleanInput || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: cleanInput,
      },
    ]);

    setInput("");
    setIsTyping(true);

    replyTimeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: replyMessage,
        },
      ]);

      setIsTyping(false);
    }, 1400);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.96,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            role="dialog"
            aria-modal="false"
            aria-labelledby="olidev-chat-title"
            className="w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-black/80 text-white shadow-2xl shadow-black/70 backdrop-blur-2xl"
          >
            <div className="relative border-b border-white/10 bg-white/[0.035] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3
                    id="olidev-chat-title"
                    className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-sm font-bold text-transparent"
                  >
                    Assistente OLIDEV
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    Atendimento institucional
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar conversa institucional da OLIDEV"
                  title="Fechar conversa"
                  className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-neutral-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              ref={scrollAreaRef}
              className="scrollbar-thin flex h-[340px] flex-col gap-4 overflow-y-auto p-4"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.from}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={
                    message.from === "user"
                      ? "ml-auto max-w-[82%]"
                      : "mr-auto max-w-[88%]"
                  }
                >
                  <div
                    className={
                      message.from === "user"
                        ? "rounded-2xl rounded-tr-none bg-white px-4 py-3 text-sm leading-6 text-black"
                        : "rounded-2xl rounded-tl-none border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-neutral-300"
                    }
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="mr-auto max-w-[88%]"
                  >
                    <div className="rounded-2xl rounded-tl-none border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-neutral-300">
                      <div className="mb-2 text-xs text-neutral-500">
                        Assistente OLIDEV está digitando
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-2 grid grid-cols-3 gap-2">
                <a
                  href={`mailto:${CONTACTS.email}`}
                  aria-label="Enviar e-mail para a OLIDEV"
                  title="Enviar e-mail"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3 text-neutral-300 transition hover:bg-white/[0.07]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir WhatsApp institucional da OLIDEV"
                  title="Abrir WhatsApp"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3 text-neutral-300 transition hover:bg-white/[0.07]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={CONTACTS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Instagram institucional da OLIDEV"
                  title="Abrir Instagram"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3 text-neutral-300 transition hover:bg-white/[0.07]"
                >
                  <AtSign className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 bg-white/[0.025] p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  aria-label="Digite sua mensagem para a OLIDEV"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  placeholder={
                    isTyping ? "Aguarde a resposta..." : "Digite sua mensagem..."
                  }
                  className="h-11 flex-1 rounded-full border border-white/10 bg-black/50 px-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Enviar mensagem para a OLIDEV"
                  title="Enviar mensagem"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen
            ? "Fechar conversa institucional da OLIDEV"
            : "Abrir conversa institucional com a OLIDEV"
        }
        title={isOpen ? "Fechar conversa" : "Abrir conversa institucional"}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-black shadow-2xl shadow-black/70"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-white/30 blur-xl transition group-hover:bg-white/50" />
        {isOpen ? (
          <X className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
}