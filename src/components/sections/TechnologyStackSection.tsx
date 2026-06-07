"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Check,
  Cloud,
  Code2,
  Copy,
  Cpu,
  Database,
  Hexagon,
  Network,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StackTab = {
  id: string;
  label: string;
  icon: React.ElementType;
  code: string;
};

type OrbitalTool = {
  id: number;
  title: string;
  short: string;
  content: string;
  icon: React.ElementType;
  relatedIds: number[];
  energy: number;
};

const stackTabs: StackTab[] = [
  {
    id: "php",
    label: "PHP",
    icon: Code2,
    code: `<?php

final class OlidevPlatform
{
    public function deploy(): array
    {
        return [
            "architecture" => "institutional",
            "security" => "hardened",
            "automation" => true,
            "observability" => true,
            "runtime" => "enterprise"
        ];
    }
}

$core = new OlidevPlatform();
$response = $core->deploy();`,
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: Braces,
    code: `type OlidevCore = {
  architecture: "enterprise";
  intelligence: "operational";
  observability: boolean;
  automation: boolean;
};

const platform: OlidevCore = {
  architecture: "enterprise",
  intelligence: "operational",
  observability: true,
  automation: true,
};

export async function initializeCore() {
  return await Promise.resolve(platform);
}`,
  },
  {
    id: "python",
    label: "Python",
    icon: Terminal,
    code: `from dataclasses import dataclass

@dataclass
class OperationalLayer:
    ai: bool = True
    automation: bool = True
    telemetry: bool = True
    security: str = "zero-trust"

def run_diagnostics(layer: OperationalLayer):
    return {
        "status": "operational",
        "ai": layer.ai,
        "telemetry": layer.telemetry,
        "security": layer.security,
    }

print(run_diagnostics(OperationalLayer()))`,
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    code: `resource "olidev_infrastructure" "core" {
  provider      = "aws"
  availability = "high"
  scaling      = "automatic"
  monitoring   = "enabled"

  modules = [
    "api-gateway",
    "containers",
    "database",
    "observability",
    "security"
  ]
}`,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    code: `security_policy:
  identity:
    access: least-privilege
    mfa: required

  infrastructure:
    network: segmented
    secrets: encrypted
    logs: immutable

  response:
    monitoring: continuous
    alerts: realtime
    audit: enabled`,
  },
];

const orbitalTools: OrbitalTool[] = [
  {
    id: 1,
    title: "PHP",
    short: "PHP",
    content:
      "Backend institucional, APIs, integrações, painéis administrativos e sistemas de operação contínua.",
    icon: Code2,
    relatedIds: [2, 3, 6],
    energy: 92,
  },
  {
    id: 2,
    title: "TypeScript",
    short: "TS",
    content:
      "Interfaces modernas, frontends robustos, aplicações Next.js, tipagem forte e arquitetura modular.",
    icon: Braces,
    relatedIds: [1, 3, 6],
    energy: 96,
  },
  {
    id: 3,
    title: "Python",
    short: "PY",
    content:
      "IA, automação, análise técnica, pipelines, OCR, scripts operacionais e inteligência aplicada.",
    icon: Terminal,
    relatedIds: [2, 5, 10],
    energy: 95,
  },
  {
    id: 4,
    title: "Go",
    short: "GO",
    content:
      "Serviços performáticos, infraestrutura, sistemas concorrentes, APIs rápidas e componentes críticos.",
    icon: Network,
    relatedIds: [5, 6, 10],
    energy: 88,
  },
  {
    id: 5,
    title: "AWS",
    short: "AWS",
    content:
      "Cloud, escalabilidade, alta disponibilidade, deploy, storage, observabilidade e ambientes produtivos.",
    icon: Cloud,
    relatedIds: [4, 6, 10],
    energy: 94,
  },
  {
    id: 6,
    title: "Docker",
    short: "DOCKER",
    content:
      "Containerização, padronização de ambientes, deploy previsível e operação multiambiente.",
    icon: Hexagon,
    relatedIds: [1, 4, 5],
    energy: 91,
  },
  {
    id: 7,
    title: "Rust",
    short: "Rust",
    content:
      "Performance, segurança de memória, componentes críticos e engenharia de baixo nível.",
    icon: Shield,
    relatedIds: [4, 11, 12],
    energy: 86,
  },
  {
    id: 8,
    title: "Java",
    short: "Java",
    content:
      "Sistemas corporativos, backend enterprise, arquitetura orientada a domínio e aplicações de longa vida.",
    icon: Database,
    relatedIds: [1, 9, 12],
    energy: 90,
  },
  {
    id: 9,
    title: "Haskell",
    short: "Haskell",
    content:
      "Modelagem funcional, precisão lógica, composição segura e engenharia com alto rigor estrutural.",
    icon: Cpu,
    relatedIds: [7, 8, 12],
    energy: 82,
  },
  {
    id: 10,
    title: "C#",
    short: "C#",
    content:
      "Ecossistema .NET, aplicações corporativas, APIs, integrações e sistemas institucionais escaláveis.",
    icon: Code2,
    relatedIds: [5, 8, 11],
    energy: 89,
  },
  {
    id: 11,
    title: "C",
    short: "C",
    content:
      "Base computacional, sistemas embarcados, baixo nível, performance e controle operacional fino.",
    icon: Cpu,
    relatedIds: [7, 10, 12],
    energy: 84,
  },
  {
    id: 12,
    title: "C++",
    short: "C++",
    content:
      "Performance avançada, sistemas complexos, engines, processamento crítico e componentes nativos.",
    icon: Cpu,
    relatedIds: [7, 9, 11],
    energy: 87,
  },
];

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function highlightCode(code: string) {
  const placeholders: string[] = [];
  let html = escapeHtml(code);

  const store = (value: string) => {
    const key = `__TOKEN_${placeholders.length}__`;
    placeholders.push(value);
    return key;
  };

  html = html.replace(
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
    (match) => store(`<span class="text-neutral-100">${match}</span>`)
  );

  html = html.replace(
    /(\/\/.*$|#.*$|<!--.*?-->|\/\*[\s\S]*?\*\/)/gm,
    (match) => store(`<span class="text-neutral-600">${match}</span>`)
  );

  html = html.replace(
    /\b(const|async|function|await|return|import|from|class|public|private|protected|static|void|new|var|let|using|print|def|try|catch|finally|if|else|type|export|resource|provider|modules|final|true|false|array)\b/g,
    '<span class="text-white">$1</span>'
  );

  html = html.replace(
    /\b(OlidevPlatform|OlidevCore|OperationalLayer|initializeCore|run_diagnostics|deploy|Promise|dataclass)\b/g,
    '<span class="text-neutral-200">$1</span>'
  );

  html = html.replace(
    /(\$\w+|\bapi_key\b|\bpayload\b|\bresponse\b|\brequest\b|\bclient\b|\bcontent\b|\bdata\b|\bplatform\b|\bcore\b|\blayer\b)/g,
    '<span class="text-neutral-300">$1</span>'
  );

  html = html.replace(
    /__TOKEN_(\d+)__/g,
    (_, index) => placeholders[Number(index)]
  );

  return html;
}

function useTypingEffect(text: string, speed = 8, startDelay = 120) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let timeoutId: number | undefined;
    let intervalId: number | undefined;

    setDisplayed("");
    setIsTyping(true);

    timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, isTyping };
}

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isMobile;
}

function OrbitalStack() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const isMobile = useIsMobile();

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  function getRelatedItems(itemId: number): number[] {
    const currentItem = orbitalTools.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  }

  function isRelatedToActive(itemId: number): boolean {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  }

  function toggleItem(id: number) {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};

      Object.keys(prev).forEach((key) => {
        newState[Number(key)] = false;
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const pulse: Record<number, boolean> = {};

        relatedItems.forEach((relId) => {
          pulse[relId] = true;
        });

        setPulseEffect(pulse);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  }

  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  }

  function calculateNodePosition(index: number, total: number) {
    const angle = (index / total) * 360;
    const radius = isMobile ? 118 : 155;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));

    const opacity = Math.max(
      0.52,
      Math.min(1, 0.52 + 0.48 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  }

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative flex h-[440px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/[0.72] md:h-[520px]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_42%)]" />

      <div className="absolute left-6 top-6 z-20">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-neutral-400">
          Orbital Stack
        </span>
      </div>

      <div
        ref={orbitRef}
        className="relative flex h-full w-full items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_0_70px_rgba(255,255,255,0.14)]">
          <div className="absolute h-24 w-24 animate-ping rounded-full border border-white/10 opacity-40 motion-reduce:animate-none" />
          <div className="absolute h-32 w-32 rounded-full border border-white/5" />
          <span className="text-[10px] font-black tracking-[0.22em]">
            OLIDEV
          </span>
        </div>

        <div className="absolute h-[236px] w-[236px] rounded-full border border-white/10 md:h-[310px] md:w-[310px]" />
        <div className="absolute h-[188px] w-[188px] rounded-full border border-white/[0.06] md:h-[245px] md:w-[245px]" />

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center will-change-transform",
            autoRotate && "animate-[orbital-spin_42s_linear_infinite]"
          )}
        >
          {orbitalTools.map((item, index) => {
            const position = calculateNodePosition(index, orbitalTools.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute cursor-pointer transition-transform duration-500 will-change-transform"
                style={{
                  transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                  zIndex: isExpanded ? 220 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={cn(
                    "absolute -inset-2 rounded-full",
                    isPulsing && "animate-pulse motion-reduce:animate-none"
                  )}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 70%)",
                    width: `${item.energy * 0.38 + 34}px`,
                    height: `${item.energy * 0.38 + 34}px`,
                    left: `-${(item.energy * 0.38 + 34 - 34) / 2}px`,
                    top: `-${(item.energy * 0.38 + 34 - 34) / 2}px`,
                  }}
                />

                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isExpanded
                      ? "scale-150 border-white bg-white text-black shadow-lg shadow-white/20"
                      : isRelated
                        ? "border-white bg-white/60 text-black"
                        : "border-white/35 bg-black text-white"
                  )}
                >
                  <Icon size={15} />
                </div>

                <div
                  className={cn(
                    "absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold tracking-wider transition-all duration-300",
                    isExpanded ? "scale-125 text-white" : "text-white/65"
                  )}
                >
                  {item.short}
                </div>

                {isExpanded && (
                  <div className="absolute left-1/2 top-20 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-black/95 p-4 shadow-2xl shadow-black/70 backdrop-blur-md md:w-64 md:bg-black/90 md:backdrop-blur-xl">
                    <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-white/40" />

                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-neutral-300">
                        Enterprise
                      </span>

                      <span className="font-mono text-xs text-white/45">
                        {item.energy}%
                      </span>
                    </div>

                    <h4 className="mt-4 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-xl font-black tracking-[-0.05em] text-transparent">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-xs leading-6 text-neutral-300">
                      {item.content}
                    </p>

                    <div className="mt-4 border-t border-white/10 pt-4">
                      <div className="mb-2 flex items-center text-xs text-white/60">
                        <Zap size={11} className="mr-2" />
                        Operational Index
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbital-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          @keyframes orbital-spin {
            from {
              transform: rotate(0deg) scale(0.82);
            }

            to {
              transform: rotate(360deg) scale(0.82);
            }
          }
        }
      `}</style>
    </div>
  );
}

export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState("php");
  const [copied, setCopied] = useState(false);

  const { ref, inView } = useInView<HTMLElement>(0.2);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const activeCode = useMemo(() => {
    return (
      stackTabs.find((tab) => tab.id === activeTab)?.code ?? stackTabs[0].code
    );
  }, [activeTab]);

  const { displayed, isTyping } = useTypingEffect(
    inView ? activeCode : "",
    8,
    120
  );

  const highlightedHtml = useMemo(() => highlightCode(displayed), [displayed]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTop = 0;
    el.scrollLeft = 0;
  }, [activeTab]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }, [displayed]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      ref={ref}
      id="stack"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.09),transparent_38%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300"
          >
            Stack Tecnológico
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-5 max-w-4xl bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-black tracking-[-0.08em] text-transparent md:text-7xl"
          >
            Tecnologia escolhida por arquitetura.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300"
          >
            A OLIDEV não se limita a ferramentas. Seleciona linguagens,
            frameworks, infraestrutura e padrões conforme a criticidade, escala
            e natureza de cada operação.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <OrbitalStack />

          <div className="w-full min-w-0">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#08080b] p-4 shadow-2xl shadow-black/60">
              <div className="mb-4 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 md:grid-cols-5">
                {stackTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === activeTab;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex min-w-0 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300",
                        isActive
                          ? "bg-white text-black shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
                          : "text-neutral-500 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111317]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                <div className="absolute left-5 top-4 z-10 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>

                <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
                  {copied && (
                    <span className="text-xs font-medium text-neutral-300">
                      Copiado
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                    aria-label="Copiar código"
                    title="Copiar código"
                  >
                    {copied ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="p-6 pt-14 md:p-7 md:pt-14">
                  <div
                    ref={scrollRef}
                    className="h-[300px] w-full overflow-y-auto overflow-x-hidden pr-1 md:h-[325px] md:pr-3"
                  >
                    <pre className="min-h-full w-full whitespace-pre-wrap break-all font-mono text-[13px] leading-7 text-white/90 [overflow-wrap:anywhere] md:text-[14px] md:leading-8">
                      <code
                        dangerouslySetInnerHTML={{
                          __html:
                            highlightedHtml +
                            (isTyping
                              ? '<span class="ml-1 inline-block h-[1.15em] w-[9px] translate-y-[2px] rounded-sm bg-white animate-pulse"></span>'
                              : ""),
                        }}
                      />
                    </pre>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
