"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineSceneProps = {
  scene: string;
  className?: string;
};

function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-8 w-8 animate-spin rounded-full border border-white/20 border-t-white" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default function SplineCoreSection() {
  return (
    <section
      id="engenharia"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Card className="relative min-h-[760px] overflow-hidden bg-black/[0.96] md:h-[560px] md:min-h-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex h-full min-h-[760px] flex-col md:min-h-0 md:flex-row">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="
                relative
                z-20
                flex
                flex-none
                flex-col
                justify-start
                p-8
                pb-0
                md:flex-1
                md:justify-center
                md:p-12
              "
            >
              <span className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm">
                Engenharia de Ponta
              </span>

              <h2 className="max-w-xl bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-black tracking-[-0.08em] text-transparent md:text-6xl">
                Núcleo OLIDEV.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-neutral-300 md:text-lg">
                Uma camada visual para representar engenharia, inteligência
                artificial, automação e infraestrutura atuando como um sistema
                único de execução tecnológica.
              </p>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                {[
                  "IA Corporativa",
                  "Infraestrutura",
                  "Automação",
                  "Observabilidade",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.015,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className={cn(
                      "group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
                    )}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />

                    <span className="relative z-10">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.94,
                filter: "blur(16px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                mt-4
                h-[340px]
                flex-none
                overflow-hidden
                md:mt-0
                md:h-auto
                md:min-h-full
                md:flex-1
              "
            >
              <div
                className="
                  absolute
                  inset-x-[-26%]
                  bottom-[-6%]
                  top-[-10%]
                  md:inset-0
                "
              >
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/45 to-transparent md:hidden" />
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}