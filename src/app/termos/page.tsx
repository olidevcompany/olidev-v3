import LegalLayout from "@/components/legal/LegalLayout";

export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Condições aplicáveis à utilização do site institucional da OLIDEV."
    >
      <Section
        title="1. Aceitação"
        text="Ao acessar este site, o usuário declara estar ciente e concordar com os presentes Termos de Uso."
      />

      <Section
        title="2. Finalidade do site"
        text="O site possui caráter institucional e informativo, apresentando informações sobre a OLIDEV, suas áreas de atuação, projetos, serviços e formas de contato."
      />

      <Section
        title="3. Propriedade intelectual"
        text="Todo conteúdo disponibilizado neste site, incluindo textos, marcas, logotipos, elementos visuais, interfaces, códigos e materiais institucionais, pertence à OLIDEV ou é utilizado mediante autorização."
      />

      <Section
        title="4. Uso permitido"
        text="É vedada a utilização do conteúdo para fins ilícitos, fraudulentos ou que possam prejudicar a imagem, reputação ou operações da OLIDEV."
      />

      <Section
        title="5. Limitação de responsabilidade"
        text="Embora sejam adotadas boas práticas de segurança e disponibilidade, a OLIDEV não garante funcionamento ininterrupto do site nem se responsabiliza por indisponibilidades ocasionais decorrentes de fatores externos."
      />

      <Section
        title="6. Alterações"
        text="A OLIDEV poderá atualizar estes Termos de Uso a qualquer momento, sem aviso prévio."
      />

      <Section
        title="7. Legislação aplicável"
        text="Estes termos são regidos pelas leis da República Federativa do Brasil."
      />

      <Section
        title="8. Contato"
        text="Dúvidas relacionadas aos presentes termos poderão ser encaminhadas para contato@olidev.com.br."
      />
    </LegalLayout>
  );
}

function Section({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold text-white">
        {title}
      </h2>
      <p>{text}</p>
    </section>
  );
}