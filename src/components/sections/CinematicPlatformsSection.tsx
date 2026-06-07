import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function CinematicPlatformsSection() {
  return (
    <section id="plataformas" className="bg-black">
      <CinematicHero
        brandName="OLIDEV"
        tagline1="Uma arquitetura."
        tagline2="Múltiplas plataformas."
        cardHeading="Multiplataforma."
        cardDescription={
          <>
            <span className="font-semibold text-white">Olidev</span> projeta
            ecossistemas digitais para web, mobile, dashboards, APIs,
            automações e operações institucionais com consistência técnica,
            segurança e escala.
          </>
        }
        metricValue={360}
        metricLabel="Passos"
        ctaHeading="Pronto para operar em escala."
        ctaDescription="Da interface pública ao painel decisório, cada camada é desenhada para continuidade, interoperabilidade e execução tecnológica refinada."
      />
    </section>
  );
}