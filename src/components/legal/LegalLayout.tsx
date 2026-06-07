import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-neutral-500 transition hover:text-white"
        >
          ← Voltar para o site
        </Link>

        <div className="mt-10">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-neutral-400">
            {subtitle}
          </p>
        </div>

        <div className="mt-16 space-y-10 text-neutral-300 leading-8">
          {children}
        </div>
      </div>
    </main>
  );
}