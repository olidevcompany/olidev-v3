"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Archive,
  ArrowRight,
  Bell,
  ChevronDown,
  Clock,
  FileText,
  Inbox,
  Menu,
  Search,
  Send,
  ShieldCheck,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PRELOADER_FINISHED_EVENT = "olidev-preloader-finished";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:w-[84%]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>

      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
        </filter>
      </defs>
    </svg>
  );
};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const delayedRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.22,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dashboardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.985,
    filter: "blur(16px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      delay: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const menuItems = [
  { name: "Capacidades", href: "#stack" },
  { name: "Engenharia", href: "#engenharia" },
  { name: "Projetos", href: "#arquitetura" },
  { name: "Contato", href: "#contato" },
];

function useHeroAnimationReady() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: number | undefined;

    const startHero = () => {
      timeoutId = window.setTimeout(() => {
        setReady(true);
      }, 120);
    };

    const alreadyFinished =
      window.sessionStorage.getItem(PRELOADER_FINISHED_EVENT) === "true";

    if (alreadyFinished) {
      startHero();

      return () => {
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }

    window.addEventListener(PRELOADER_FINISHED_EVENT, startHero);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener(PRELOADER_FINISHED_EVENT, startHero);
    };
  }, []);

  return ready;
}

export default function HeroSection() {
  const heroAnimationReady = useHeroAnimationReady();

  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden bg-black text-white">
        <section className="relative min-h-screen overflow-hidden pt-28 antialiased md:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroAnimationReady ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
          >
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="white"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 -z-10 bg-black" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.105),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate={heroAnimationReady ? "visible" : "hidden"}
            >
              <Link
                href="#engenharia"
                className="group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/[0.035] p-1 pl-4 shadow-[0_0_34px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-medium text-transparent">
                  Tecnologia Corporativa
                </span>

                <span className="block h-4 w-px bg-white/10" />

                <div className="size-6 overflow-hidden rounded-full bg-white text-black">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>

              <h1 className="mx-auto mt-9 max-w-5xl text-balance text-6xl font-bold tracking-[-0.075em] md:text-7xl xl:text-[5.35rem]">
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                  Tecnologia Para Instituições Seletas.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-8 text-neutral-300">
                O comum nunca foi uma opção. Olidev, além das expectativas.
              </p>
            </motion.div>

            <motion.div
              variants={delayedRevealVariants}
              initial="hidden"
              animate={heroAnimationReady ? "visible" : "hidden"}
              className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row"
            >
              <div className="rounded-[14px] border border-white/10 bg-white/10 p-0.5">
                <Button asChild size="lg" className="rounded-xl px-6 text-base">
                  <Link href="#contato">
                    <span className="text-nowrap">
                      Solicitar reunião estratégica
                    </span>
                  </Link>
                </Button>
              </div>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 rounded-xl border border-white/10 px-6"
              >
                <Link href="#stack">
                  <span className="text-nowrap">Ver capacidades</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={dashboardRevealVariants}
            initial="hidden"
            animate={heroAnimationReady ? "visible" : "hidden"}
            className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24"
          >
            <div
              aria-hidden
              className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-black"
            />

            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/[0.96] p-4 shadow-2xl shadow-black/60 ring-1 ring-white/10">
              <OlidevDashboard />
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="group fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-6 max-w-6xl rounded-2xl border border-white/10 bg-black/35 px-6 backdrop-blur-xl transition-all duration-300 lg:px-8",
            isScrolled && "max-w-5xl bg-black/60"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center">
                <Image
                  src="/logo-olidev.jpeg"
                  alt="OLIDEV"
                  width={170}
                  height={42}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fechar menu" : "Abrir menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-white lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-10 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-neutral-400 duration-150 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <Button asChild size="sm" className="h-12 rounded-xl px-6">
                <Link href="#contato">Iniciar conversa</Link>
              </Button>
            </div>

            <AnimatePresence initial={false}>
  {menuState && (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.96,
      }}
      transition={{
        duration: 0.24,
        ease: "easeOut",
      }}
      className="
        absolute
        left-0
        right-0
        top-[calc(100%+0.75rem)]
        z-50
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black/90
        p-6
        shadow-2xl
        shadow-black/70
        backdrop-blur-xl
        lg:hidden
      "
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.035,
            },
          },
        }}
        className="space-y-6 text-base"
      >
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            variants={{
              hidden: {
                opacity: 0,
                x: -14,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.24,
              ease: "easeOut",
            }}
          >
            <Link
              href={item.href}
              onClick={() => setMenuState(false)}
              className="block text-neutral-400 transition-colors duration-150 hover:text-white"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 8,
        }}
        transition={{
          duration: 0.22,
          delay: 0.08,
          ease: "easeOut",
        }}
      >
        <Button asChild size="lg" className="mt-6 w-full">
          <Link href="#contato" onClick={() => setMenuState(false)}>
            Iniciar conversa
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}

function OlidevDashboard() {
  const messages = [
    {
      title: "Infraestrutura",
      subtitle: "Disponibilidade, ambientes e recursos críticos",
      tag: "infra",
      active: true,
    },
    {
      title: "Monitoramento",
      subtitle: "Métricas, alertas e leitura operacional",
      tag: "obs",
    },
    {
      title: "Data Center",
      subtitle: "Continuidade, rede e sustentação técnica",
      tag: "core",
    },
  ];

  return (
    <div className="aspect-[15/8] min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black/[0.96] text-left">
      <div className="grid h-full grid-cols-[250px_390px_1fr]">
        <aside className="border-r border-white/10 bg-white/[0.018] p-5">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-neutral-100">
              <ShieldCheck className="size-4 text-neutral-300" />
              OLIDEV Core
            </div>
            <ChevronDown className="size-4 text-neutral-500" />
          </div>

          <nav className="mt-5 space-y-1 text-sm">
            {[
              [Inbox, "Operações", "128"],
              [FileText, "Sistemas", "24"],
              [Send, "Integrações", "36"],
              [Archive, "Infraestrutura", "18"],
              [Trash2, "Alertas", "07"],
            ].map(([Icon, label, count]) => {
              const LucideIcon = Icon as typeof Inbox;

              return (
                <div
                  key={label as string}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-neutral-500",
                    label === "Operações" && "bg-white/10 text-neutral-100"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <LucideIcon className="size-4" />
                    {label as string}
                  </span>
                  <span>{count as string}</span>
                </div>
              );
            })}
          </nav>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-700">
              Camadas
            </p>

            {["Infraestrutura", "Monitoramento", "Segurança", "DevOps"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-600"
                >
                  {item}
                  <span className="size-1.5 rounded-full bg-white/45" />
                </div>
              )
            )}
          </div>
        </aside>

        <section className="border-r border-white/10 p-5">
          <h3 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl font-bold text-transparent">
            Operations Center
          </h3>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
            <Search className="size-4 text-neutral-600" />
            <span className="text-sm text-neutral-600">
              Buscar serviço, sistema ou métrica
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {messages.map((message) => (
              <div
                key={message.title}
                className={cn(
                  "rounded-xl border border-white/10 bg-white/[0.03] p-4",
                  message.active && "bg-white/[0.085]"
                )}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-neutral-100">
                    {message.title}
                  </h4>
                  <span className="text-xs text-neutral-600">online</span>
                </div>

                <p className="mt-1 text-sm text-neutral-500">
                  {message.subtitle}
                </p>

                <div className="mt-4 flex gap-2">
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-medium text-black">
                    {message.tag}
                  </span>

                  <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-neutral-300">
                    crítico
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                OC
              </div>

              <div>
                <h3 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-bold text-transparent">
                  Operational Infrastructure
                </h3>

                <p className="text-sm text-neutral-600">
                  Systems • Infrastructure • Monitoring
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-600">
              <Clock className="size-4" />
              <Bell className="size-4" />
              <Menu className="size-4" />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm leading-7 text-neutral-300">
              Ambiente técnico para acompanhamento de sistemas, infraestrutura,
              disponibilidade, indicadores operacionais e continuidade de
              serviços institucionais.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["99%", "Uptime"],
                ["87%", "Infra"],
                ["96%", "Obs"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-2xl font-semibold text-neutral-100">
                    {value}
                  </div>

                  <div className="mt-1 text-sm text-neutral-600">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-mono text-xs leading-6 text-neutral-400">
              <p>{">"} initializing operational.core</p>
              <p>{">"} infrastructure telemetry online</p>
              <p>{">"} monitoring layer synchronized</p>
              <p>{">"} institutional systems ready</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}