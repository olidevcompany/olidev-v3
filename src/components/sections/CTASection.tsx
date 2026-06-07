"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn("group flex flex-col overflow-hidden", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Instituições seletivas",
  "Operações críticas",
  "Sistemas sob medida",
  "IA corporativa",
  "Infraestrutura robusta",
  "Automação operacional",
  "Observabilidade",
  "Arquitetura enterprise",
];

export default function CTASection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    let frameId = 0;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.78;

        (item as HTMLElement).style.opacity = opacity.toString();
      });

      frameId = requestAnimationFrame(updateOpacity);
    };

    frameId = requestAnimationFrame(updateOpacity);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="contato"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-y border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(255,255,255,0.11),transparent_38%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300">
              Próxima etapa
            </span>

            <h2 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-black leading-[0.95] tracking-[-0.08em] text-transparent md:text-7xl">
              Inicie uma conversa estratégica.
            </h2>

            <p className="text-lg leading-8 text-neutral-300 md:text-xl">
              Avaliamos seu cenário, entendemos a operação e desenhamos o
              caminho técnico para uma solução robusta, escalável e
              institucionalmente refinada.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:contato@olidev.com.br"
                className="group relative overflow-hidden rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200"
              >
                <span className="relative z-10 flex items-center">
                  Solicitar avaliação
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
              </Link>

              <Link
                href="#faq"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.06]"
              >
                <span className="relative z-10 flex items-center">
                  Ver perguntas frequentes
                  <CalendarDays className="ml-2 h-4 w-4 opacity-70" />
                </span>

                <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
              </Link>
            </div>
          </div>

          <div
  ref={marqueeRef}
  className="relative hidden h-[560px] items-center justify-center overflow-hidden lg:flex lg:h-[680px]"
>
  <div className="relative h-full w-full">
    <VerticalMarquee speed={26} className="h-full lg:[--duration:22s]">
      {marqueeItems.map((item, idx) => (
        <div
          key={idx}
          className="
            marquee-item
            py-5
            text-center
            text-[2.55rem]
            font-light
            leading-[0.95]
            tracking-[-0.075em]
            text-white
            md:py-6
            md:text-5xl
            lg:py-7
            lg:text-left
            lg:text-6xl
            xl:text-7xl
          "
        >
          {item}
        </div>
      ))}
    </VerticalMarquee>

    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        z-10
        h-32
        bg-gradient-to-b
        from-black
        via-black/80
        to-transparent
        md:h-44
        lg:h-64
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        z-10
        h-32
        bg-gradient-to-t
        from-black
        via-black/80
        to-transparent
        md:h-44
        lg:h-64
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-1/2
        z-10
        h-24
        -translate-y-1/2
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)]
        lg:h-40
      "
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}