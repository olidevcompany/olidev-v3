import LegalLayout from "@/components/legal/LegalLayout";

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Transparência, segurança e responsabilidade no tratamento de informações."
    >
      <Section
        title="1. Introdução"
        text="A OLIDEV LTDA respeita a privacidade dos visitantes, clientes e parceiros, comprometendo-se com a proteção dos dados pessoais tratados por meio deste site."
      />

      <Section
        title="2. Dados coletados"
        text="Podemos coletar informações fornecidas voluntariamente através de formulários de contato, incluindo nome, e-mail, telefone, organização e demais informações necessárias para comunicação."
      />

      <Section
        title="3. Finalidade"
        text="Os dados são utilizados exclusivamente para atendimento, comunicação institucional, análise de demandas, elaboração de propostas e melhoria dos serviços prestados."
      />

      <Section
        title="4. Compartilhamento"
        text="A OLIDEV não comercializa dados pessoais. Informações poderão ser compartilhadas apenas quando necessário para execução de serviços ou cumprimento de obrigações legais."
      />

      <Section
        title="5. Segurança"
        text="Adotamos medidas técnicas e organizacionais compatíveis com boas práticas de mercado para proteger informações contra acesso não autorizado, alteração, perda ou divulgação indevida."
      />

      <Section
        title="6. Direitos do titular"
        text="O titular poderá solicitar acesso, correção, atualização ou exclusão de seus dados, observadas as disposições legais aplicáveis."
      />

      <Section
        title="7. Contato"
        text="Solicitações relacionadas à privacidade poderão ser encaminhadas para contato@olidev.com.br."
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