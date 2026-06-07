import type { Metadata } from "next";
import "./globals.css";
import OlidevPreloader from "@/components/preloader/OlidevPreloader";

export const metadata: Metadata = {
  title: "Olidev — Tecnologia para Instituições Seletas",
  description:
    "Soluções tecnológicas robustas para instituições que exigem arquitetura, segurança, escala e continuidade operacional.",
  creator: "OLIDEV LTDA",
  publisher: "OLIDEV LTDA",
  metadataBase: new URL("https://olidev.com.br"),
  openGraph: {
    title: "Olidev — Tecnologia para Instituições Seletas",
    description:
      "Soluções tecnológicas robustas para instituições que exigem arquitetura, segurança, escala e continuidade operacional.",
    url: "https://olidev.com.br",
    siteName: "Olidev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OLIDEV — Tecnologia para Instituições Seletas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olidev — Tecnologia para Instituições Seletas",
    description:
      "Engenharia tecnológica avançada para operações corporativas e institucionais.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <OlidevPreloader />
        {children}
      </body>
    </html>
  );
}