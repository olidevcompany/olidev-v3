import Image from "next/image";

const links = [
  {
    label: "Capacidades",
    href: "#stack",
  },
  {
    label: "Engenharia",
    href: "#engenharia",
  },
  {
    label: "Projetos",
    href: "#arquitetura",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="w-full max-w-7xl">
        <div className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 backdrop-blur-xl">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo-olidev.jpeg"
              alt="OLIDEV"
              width={170}
              height={40}
              priority
            />
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="rounded-xl bg-white px-7 py-3 font-medium text-black transition-transform hover:scale-105"
          >
            Iniciar conversa
          </a>
        </div>
      </nav>
    </header>
  );
}