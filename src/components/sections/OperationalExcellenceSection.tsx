"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { SignaturePad } from "@ark-ui/react/signature-pad";
import { IoMdCheckmark } from "react-icons/io";
import { AiFillSpotify } from "react-icons/ai";
import { FaHeadphones, FaPinterest, FaPhoneAlt, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMarkunread } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

const SCRAMBLED_STRINGS = [
  "6*7A0^!OLIDEV@6XS749%2$4L4RO$SH*8W#6OPLLF%WSKVI^PTT1PJUOS60EQL$*K53*Y#AK5GDM6XIWX79XR^DQOMEJF$F1ZNL",
  "Y4#!I*SEGURANCA07QJFDVW#6$17$WW^#7MR5Q50I^2FFKJQW1&1%94ABU&$TX$RRTXT3P!4JPK3^A12&DQ15",
  "4HM5$8&PROCESSOS0G$2ZE7OAZHBUDZXDJW81WD7YDH7##HO7VM84J&@&PV^7YACYLRBWI2HDUW9@!I#H",
  "IZE$@OPERACAO&9OEB%@LLRX%IJ!VILBQ$%K#XALOTXTQD1%J82QSFUS512FRQHSO@#R#MK0C0@686S",
];

function InfiniteScrambler() {
  const [text, setText] = useState(SCRAMBLED_STRINGS[0]);
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % SCRAMBLED_STRINGS.length;
      setText(SCRAMBLED_STRINGS[index.current]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[15%] max-w-[322px]">
      <p className="break-words font-mono text-[13px] leading-[0.9rem] text-neutral-500 opacity-35">
        {text}
      </p>
    </div>
  );
}

function ContainerMask() {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-[80px] bg-[linear-gradient(to_right,rgb(10,10,10)_20%,transparent_100%)]" />
      <div className="absolute right-0 top-0 h-full w-[80px] bg-[linear-gradient(to_left,rgb(10,10,10)_20%,transparent_100%)]" />
    </>
  );
}

function CheckCircle() {
  return (
    <div className="relative flex h-[18px] w-[18px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.45 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="absolute h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.45 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22, delay: 0.08, ease: "easeOut" }}
        className="relative z-10 text-black"
      >
        <IoMdCheckmark className="size-2.5" />
      </motion.div>
    </div>
  );
}

function FaceCard() {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      className="absolute inset-0 h-full w-full"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        className="stroke-neutral-700"
      />
      <path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        className="stroke-neutral-700"
      />

      <motion.path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        stroke="white"
        className="[filter:drop-shadow(0_0_7px_rgba(255,255,255,0.65))]"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        stroke="white"
        className="[filter:drop-shadow(0_0_7px_rgba(255,255,255,0.65))]"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3.8, delay: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

function SecurityCard() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return <SecurityCardInner key={cycle} />;
}

function SecurityCardInner() {
  const steps = [
    "Verificando identidade",
    "Autenticando credenciais",
    "Acesso autorizado",
  ];

  const [step, setStep] = useState(0);

useEffect(() => {
  const timers = [
    setTimeout(() => setStep(1), 3000),
    setTimeout(() => setStep(2), 5200),
  ];

  return () => timers.forEach(clearTimeout);
}, []);

  return (
    <div className="relative flex h-[27rem] w-full items-center justify-center overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
      <ContainerMask />

      <motion.div
        animate={{ opacity: [0.12, 0.26, 0.12] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_62%)]"
      />

      <div className="absolute bottom-0 h-1/2 w-[150%] rounded-t-[60%] bg-gradient-to-b from-neutral-900 to-black shadow-[0_0_900px_rgba(10,10,10,0.9)]" />

      <div className="absolute left-0 top-0 z-20 h-[200px] w-full bg-[linear-gradient(to_bottom,rgb(10,10,10)_30%,transparent_100%)]" />

      <div className="absolute left-0 top-4 z-30 w-full px-3">
        <h3 className="text-sm font-semibold text-white">
          Controle Inteligente de Acesso
        </h3>
        <p className="mt-2 text-xs text-neutral-400">
          Validação de identidade, contexto, dispositivo e permissão antes de
          liberar operações em ambientes sensíveis.
        </p>
      </div>

      <div className="relative z-20 mt-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative rounded-[2px] bg-neutral-950/50 px-[3px] py-[3.2px]"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(255,255,255,0)",
                "0 0 28px rgba(255,255,255,0.14)",
                "0 0 0 rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-32 w-24 rounded-[2px] bg-gradient-to-br from-neutral-700 to-neutral-900"
          >
            <FaceCard />
          </motion.div>
        </motion.div>

        <div className="mt-4 flex min-h-[42px] flex-col items-center justify-center gap-1">
  {step < 2 ? (
  <motion.div
    key={steps[step]}
    initial={{ opacity: 0, y: 6, filter: "blur(5px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.65, ease: "easeOut" }}
    className="flex items-center gap-2 text-xs font-medium text-neutral-300"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
    {steps[step]}
  </motion.div>
) : (
  <motion.div
    key="olidev-authorized"
    initial={{ opacity: 0, y: 6, filter: "blur(5px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.65, ease: "easeOut" }}
    className="flex flex-col items-center gap-1"
  >
    <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-white">
      <span>OLIDEV LTDA</span>
      <CheckCircle />
    </div>

    <span className="text-[10px] text-neutral-500">
      security@olidev.com.br
    </span>
  </motion.div>
  )}
</div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 h-12 overflow-hidden opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_70%,transparent)]">
        <InfiniteScrambler />
      </div>
    </div>
  );
}

function BasicSignaturePad() {
  return (
    <div className="flex h-[27rem] w-full items-center justify-center rounded-md border border-white/10 bg-neutral-950 px-4 py-12">
      <div className="w-full max-w-md">
        <SignaturePad.Root>
          <div className="mb-4 flex items-start justify-between">
            <div>
              <SignaturePad.Label className="block text-sm font-semibold text-white">
                Aprovação por Assinatura Digital
              </SignaturePad.Label>

              <p className="mt-1 text-xs text-neutral-500">
                Processo #2026-0184
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-black">
              <IoMdCheckmark className="size-3" />
              Autenticação
            </div>
          </div>

          <SignaturePad.Control className="relative h-32 w-full rounded-lg border border-white/10 bg-black">
            <SignaturePad.Segment className="h-full w-full stroke-white fill-white" />

            <SignaturePad.ClearTrigger className="absolute right-2 top-2 text-sm text-neutral-500 transition-colors hover:text-white">
              Limpar
            </SignaturePad.ClearTrigger>

            <SignaturePad.Guide className="absolute bottom-4 left-2 right-2 border-b border-dashed border-white/20" />
          </SignaturePad.Control>

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <IoMdCheckmark className="size-3" />
              </span>
              Documento aprovado eletronicamente.
            </div>

            <p className="text-xs leading-6 text-neutral-500">
              Registro validado com rastreabilidade operacional.
            </p>
          </div>
        </SignaturePad.Root>
      </div>
    </div>
  );
}

function IconWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-950">
      {children}
    </div>
  );
}

function NotificationCenter() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneVariant: Variants = {
    open: {
      transform: "translateY(-36px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    close: {
      transform: "translateY(0px)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const notificationVariant: Variants = {
    open: {
      transform: "translateY(48px) scale(1)",
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
    },
    close: {
      transform: "translateY(-72px) scale(0.75)",
      filter: "blur(10px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const lockVariant: Variants = {
  open: {
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(255,255,255,0.12)",
    scale: 1.08,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
  close: {
    backgroundColor: "#262626",
    boxShadow: "0 0 0px rgba(255,255,255,0)",
    scale: 1,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

  const parentvariant: Variants = {
    open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
    close: { transition: { staggerChildren: 0.075, delayChildren: 0.15 } },
  };

  return (
    <motion.div
      onClick={() => setIsHovered((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="close"
      animate={isHovered ? "open" : "close"}
      variants={parentvariant}
      className="relative flex h-[27rem] w-full items-center justify-center rounded-md border border-white/10 bg-neutral-950 p-6"
    >
      <motion.div
        variants={phoneVariant}
        className="relative mx-auto h-[270px] w-[264px] rounded-[44px] bg-neutral-800 p-1.5"
      >
        <div className="relative h-[258px] overflow-hidden rounded-[38px] bg-neutral-950/70">
          <div className="absolute left-8 top-3.5 text-[9px] text-neutral-500">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>

          <motion.div
            variants={lockVariant}
            className="absolute left-[112px] top-2 flex h-6 w-6 items-center justify-center rounded-full"
          >
            <AnimatedLockIcon />
          </motion.div>

          <motion.div
            variants={notificationVariant}
            className="absolute left-3.5 z-10 h-12 w-[90%] overflow-hidden rounded-md bg-neutral-800 shadow-lg"
          >
            <div className="flex h-full items-center gap-3 px-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-700 shadow-lg">
                <BellIcon />
              </div>

              <div className="min-w-0">
                <div className="flex w-full items-center justify-between">
                  <p className="truncate text-xs font-medium text-neutral-100">
                    OLIDEV
                  </p>
                  <span className="pr-6 text-[9px] text-neutral-500 sm:pr-2">
                    agora
                  </span>
                </div>
                <p className="w-[95%] truncate text-start text-[10px] text-neutral-400">
                  Evento operacional sincronizado em tempo real.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-10 flex h-full w-full flex-col items-center gap-3 px-4 pt-4">
            <div className="flex w-full items-center gap-5">
              <IconWrapper><FaPhoneAlt className="size-5 text-neutral-500" /></IconWrapper>
              <IconWrapper><FaPinterest className="size-5 text-neutral-500" /></IconWrapper>
              <IconWrapper><AiFillSpotify className="size-5 text-neutral-500" /></IconWrapper>
              <IconWrapper><FaHeadphones className="size-5 text-neutral-500" /></IconWrapper>
            </div>

            <div className="flex w-full items-center gap-5">
              <IconWrapper><RiNetflixFill className="size-5 text-neutral-500" /></IconWrapper>
              <IconWrapper>
                <MdMarkunread className="size-5 text-neutral-500" />
                <motion.div
                  variants={lockVariant}
                  className="absolute -left-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] text-neutral-900"
                >
                  1
                </motion.div>
              </IconWrapper>
              <IconWrapper><FaXTwitter className="size-5 text-neutral-500" /></IconWrapper>
              <IconWrapper><FaSnapchatGhost className="size-5 text-neutral-500" /></IconWrapper>
            </div>

            <div className="flex w-full items-center gap-5">
              <IconWrapper />
              <IconWrapper />
              <IconWrapper />
              <IconWrapper />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 h-[190px] w-full rounded-b-lg bg-[linear-gradient(to_top,#0a0a0a_60%,transparent_100%)]" />

      <div className="absolute bottom-4 left-0 w-full px-6">
        <h3 className="text-sm font-semibold text-white">
          Sincronização em Tempo Real
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          Eventos, alertas e operações conectadas com resposta imediata.
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedLockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 overflow-visible"
      aria-hidden="true"
    >
      {/* Corpo do cadeado */}
      <path
        fill="#0a0a0a"
        fillRule="evenodd"
        d="M7 10.2h10c.8 0 1.45.65 1.45 1.45v6.9c0 .8-.65 1.45-1.45 1.45H7c-.8 0-1.45-.65-1.45-1.45v-6.9c0-.8.65-1.45 1.45-1.45Zm5 3.1c-.75 0-1.35.6-1.35 1.35 0 .45.22.85.56 1.1v1.45c0 .44.35.8.79.8s.79-.36.79-.8v-1.45c.34-.25.56-.65.56-1.1 0-.75-.6-1.35-1.35-1.35Z"
      />

      {/* Arco animado */}
      <motion.path
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        variants={{
          close: {
            d: "M7.9 10.2V7.8C7.9 5.35 9.55 3.8 12 3.8C14.45 3.8 16.1 5.35 16.1 7.8V10.2",
          },
          open: {
            d: "M7.9 10.2V7.8C7.9 5.35 9.55 3.8 12 3.8C14.2 3.8 15.65 5.1 15.85 7.15",
          },
        }}
        transition={{ duration: 0.36, ease: "easeInOut" }}
      />

      {/* Micro sinal de liberação */}
      <motion.path
        d="M17.6 5.6L19.1 4.7"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        initial={false}
        variants={{
          close: { opacity: 0, pathLength: 0 },
          open: { opacity: 1, pathLength: 1 },
        }}
        transition={{ duration: 0.22, delay: 0.16, ease: "easeOut" }}
      />

      <motion.path
        d="M18.1 7.8H19.75"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        initial={false}
        variants={{
          close: { opacity: 0, pathLength: 0 },
          open: { opacity: 1, pathLength: 1 },
        }}
        transition={{ duration: 0.22, delay: 0.22, ease: "easeOut" }}
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22ZM18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2Z"
        fill="white"
      />
    </svg>
  );
}

export default function OperationalExcellenceSection() {
  return (
    <section
      id="excelencia-operacional"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Card className="relative overflow-hidden border-white/10 bg-black/[0.96]">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm">
                Excelência em Toda Camada
              </span>

              <h2 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-black tracking-[-0.08em] text-transparent md:text-6xl">
                Da segurança digital às tarefas diárias.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                A excelência aplicada pela OLIDEV não muda conforme a escala da
                demanda. Proteção, processos, automações e rotinas internas
                recebem o mesmo rigor de engenharia, precisão operacional e
                cuidado institucional.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              <SecurityCard />
              <BasicSignaturePad />
              <NotificationCenter />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}