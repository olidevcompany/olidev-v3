"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AtSign,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";

type FooterLink = {
  title: string;
  href: string;
};

const capabilities: FooterLink[] = [
  { title: "Engenharia de Software", href: "#engenharia" },
  { title: "Inteligência Artificial", href: "#engenharia" },
  { title: "Infraestrutura", href: "#stack" },
  { title: "Automação", href: "#stack" },
  { title: "Observabilidade", href: "#stack" },
  { title: "Cybersecurity", href: "#stack" },
];

const navigation: FooterLink[] = [
  { title: "Capacidades", href: "#stack" },
  { title: "Engenharia", href: "#engenharia" },
  { title: "Feedbacks", href: "#feedbacks" },
  { title: "FAQ", href: "#faq" },
  { title: "Contato", href: "#contato" },
];

const contacts = [
  {
    title: "contato@olidev.com.br",
    href: "mailto:contato@olidev.com.br",
    icon: Mail,
  },
  {
    title: "WhatsApp institucional",
    href: "https://wa.me/558130493651",
    icon: Phone,
  },
  {
    title: "@olidev.br",
    href: "https://instagram.com/olidev.br/",
    icon: AtSign,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: ExternalLink,
  },
  {
    title: "GitHub",
    href: "https://github.com/olidevcompany",
    icon: ExternalLink,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-16 text-white lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.7fr_1fr]">
          <AnimatedContainer className="max-w-md">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-olidev.jpeg"
                alt="OLIDEV"
                width={170}
                height={44}
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-neutral-400">
              Engenharia de software, inteligência artificial, automação e
              infraestrutura para organizações que exigem robustez,
              continuidade operacional e excelência tecnológica.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Enterprise", "AI", "Cloud", "Security"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimatedContainer>

          <FooterColumn title="Capacidades" links={capabilities} delay={0.15} />

          <FooterColumn title="Navegação" links={navigation} delay={0.25} />

          <AnimatedContainer delay={0.35}>
            <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Contato
            </h3>

            <ul className="mt-5 space-y-3">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="group flex items-center gap-3 text-sm text-neutral-400 transition hover:text-white"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-neutral-500 transition group-hover:border-white/20 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </AnimatedContainer>
        </div>

        <AnimatedContainer delay={0.45}>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} OLIDEV LTDA. Todos os direitos
                reservados.
              </p>
              <p className="mt-1 text-xs text-neutral-700">
                Tecnologia escolhida por arquitetura.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-neutral-600">
              <Link href="/privacidade" className="transition hover:text-white">
                Privacidade
              </Link>
              <Link href="/termos" className="transition hover:text-white">
                Termos
              </Link>
              <Link href="#contato" className="transition hover:text-white">
                Avaliação estratégica
              </Link>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: FooterLink[];
  delay: number;
}) {
  return (
    <AnimatedContainer delay={delay}>
      <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </AnimatedContainer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(6px)", y: 12, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.75, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}