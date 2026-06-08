import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const logoUrl = "https://olidev.com.br/logo-olidev.jpeg";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFormattedDate() {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Recife",
  }).format(new Date());
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, need, message } = body;

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeCompany = escapeHtml(String(company || "Não informado"));
    const safeNeed = escapeHtml(String(need || "Não informado"));
    const safeMessage = escapeHtml(String(message));
    const submittedAt = getFormattedDate();

    const baseFooter = `
      <div style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.08);background:#070707;">
        <div style="font-size:13px;color:#ffffff;font-weight:700;margin-bottom:8px;">
          OLIDEV LTDA
        </div>

        <div style="font-size:12px;color:#8a8a8a;line-height:1.8;">
          contato@olidev.com.br<br />
          +55 81 3049-3651<br />
          olidev.com.br
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "OLIDEV Site <contato@olidev.com.br>",
      to: [process.env.CONTACT_EMAIL || "contato@olidev.com.br"],
      replyTo: safeEmail,
      subject: `Nova solicitação institucional — ${safeName}`,
      html: `
        <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:780px;margin:0 auto;padding:44px 20px;">
            <div style="overflow:hidden;border:1px solid rgba(255,255,255,0.10);border-radius:30px;background:#0a0a0a;box-shadow:0 28px 90px rgba(0,0,0,0.55);">

              <div style="padding:38px 42px;border-bottom:1px solid rgba(255,255,255,0.08);background:linear-gradient(180deg,#171717 0%,#0a0a0a 100%);">
                <img src="${logoUrl}" alt="OLIDEV" width="180" style="display:block;height:auto;border:0;margin-bottom:26px;" />

                <div style="display:inline-block;margin-bottom:18px;padding:8px 14px;border:1px solid rgba(255,255,255,0.10);border-radius:999px;background:rgba(255,255,255,0.035);color:#d4d4d4;font-size:12px;letter-spacing:1.4px;text-transform:uppercase;">
                  Contato Institucional
                </div>

                <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.15;font-weight:800;letter-spacing:-0.9px;">
                  Nova solicitação recebida
                </h1>

                <p style="margin:14px 0 0;color:#a3a3a3;font-size:15px;line-height:1.8;">
                  Um novo contato foi registrado através do portal institucional da OLIDEV.
                </p>

                <div style="margin-top:26px;">
                  <div style="display:inline-block;margin-right:10px;margin-bottom:10px;padding:12px 16px;border:1px solid rgba(255,255,255,0.08);border-radius:16px;background:rgba(255,255,255,0.03);">
                    <div style="font-size:11px;color:#737373;text-transform:uppercase;letter-spacing:1px;">Registrado em</div>
                    <div style="margin-top:5px;color:#ffffff;font-size:14px;">${submittedAt}</div>
                  </div>

                  <div style="display:inline-block;margin-bottom:10px;padding:12px 16px;border:1px solid rgba(255,255,255,0.08);border-radius:16px;background:rgba(255,255,255,0.03);">
                    <div style="font-size:11px;color:#737373;text-transform:uppercase;letter-spacing:1px;">Origem</div>
                    <div style="margin-top:5px;color:#ffffff;font-size:14px;">Portal OLIDEV</div>
                  </div>
                </div>
              </div>

              <div style="padding:38px 42px;">
                <div style="margin-bottom:26px;padding:20px 22px;border:1px solid rgba(255,255,255,0.08);border-radius:20px;background:rgba(255,255,255,0.025);">
                  <div style="font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">
                    Tipo de necessidade
                  </div>
                  <div style="font-size:19px;color:#ffffff;font-weight:800;line-height:1.4;">
                    ${safeNeed}
                  </div>
                </div>

                <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Nome</td>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;font-weight:700;">${safeName}</td>
                  </tr>

                  <tr>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">E-mail</td>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;">${safeEmail}</td>
                  </tr>

                  <tr>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Telefone / WhatsApp</td>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;">${safePhone}</td>
                  </tr>

                  <tr>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Empresa / Instituição</td>
                    <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;">${safeCompany}</td>
                  </tr>
                </table>

                <div style="margin-top:34px;">
                  <div style="margin-bottom:12px;color:#737373;font-size:13px;letter-spacing:1.2px;text-transform:uppercase;">
                    Mensagem enviada
                  </div>

                  <div style="padding:26px;border:1px solid rgba(255,255,255,0.10);border-radius:22px;background:#050505;color:#d4d4d4;font-size:15px;line-height:1.9;white-space:pre-line;">
                    ${safeMessage}
                  </div>
                </div>

                <div style="margin-top:32px;padding:18px 20px;border-radius:18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                  <div style="font-size:13px;color:#a3a3a3;line-height:1.8;">
                    Responda diretamente este e-mail para iniciar contato com <strong style="color:#ffffff;">${safeName}</strong>.
                  </div>
                </div>
              </div>

              ${baseFooter}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("ERRO RESEND:", error);
      return Response.json({ error: "Erro ao enviar e-mail." }, { status: 500 });
    }

    const { error: confirmationError } = await resend.emails.send({
      from: "OLIDEV <contato@olidev.com.br>",
      to: [safeEmail],
      subject: "Recebemos sua solicitação — OLIDEV",
      html: `
        <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:780px;margin:0 auto;padding:44px 20px;">
            <div style="overflow:hidden;border:1px solid rgba(255,255,255,0.10);border-radius:30px;background:#0a0a0a;box-shadow:0 28px 90px rgba(0,0,0,0.55);">

              <div style="padding:38px 42px;border-bottom:1px solid rgba(255,255,255,0.08);background:linear-gradient(180deg,#171717 0%,#0a0a0a 100%);">
                <img src="${logoUrl}" alt="OLIDEV" width="180" style="display:block;height:auto;border:0;margin-bottom:26px;" />

                <div style="display:inline-block;margin-bottom:18px;padding:8px 14px;border:1px solid rgba(255,255,255,0.10);border-radius:999px;background:rgba(255,255,255,0.035);color:#d4d4d4;font-size:12px;letter-spacing:1.4px;text-transform:uppercase;">
                  Confirmação Institucional
                </div>

                <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.15;font-weight:800;letter-spacing:-0.9px;">
                  Solicitação recebida
                </h1>

                <p style="margin:14px 0 0;color:#a3a3a3;font-size:15px;line-height:1.8;">
                  Olá, ${safeName}. Recebemos sua mensagem e nossa equipe realizará uma avaliação inicial do cenário apresentado.
                </p>
              </div>

              <div style="padding:38px 42px;">
                <div style="padding:26px;border:1px solid rgba(255,255,255,0.10);border-radius:22px;background:#050505;">
                  <div style="font-size:13px;color:#737373;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:10px;">
                    Próximo passo
                  </div>

                  <div style="color:#ffffff;font-size:20px;font-weight:800;line-height:1.4;">
                    Avaliação inicial pela equipe OLIDEV
                  </div>

                  <p style="margin:14px 0 0;color:#b5b5b5;font-size:15px;line-height:1.9;">
                    Entraremos em contato pelo e-mail ou telefone informado para alinhar contexto, prioridade, viabilidade técnica e próximos movimentos.
                  </p>
                </div>

                <div style="margin-top:30px;">
                  <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Nome</td>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;font-weight:700;">${safeName}</td>
                    </tr>

                    <tr>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Tipo de necessidade</td>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;">${safeNeed}</td>
                    </tr>

                    <tr>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Empresa / Instituição</td>
                      <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;text-align:right;">${safeCompany}</td>
                    </tr>

                    <tr>
                      <td style="padding:16px 0;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Registrado em</td>
                      <td style="padding:16px 0;color:#ffffff;font-size:15px;text-align:right;">${submittedAt}</td>
                    </tr>
                  </table>
                </div>

                <div style="margin-top:34px;">
                  <div style="margin-bottom:12px;color:#737373;font-size:13px;letter-spacing:1.2px;text-transform:uppercase;">
                    Mensagem registrada
                  </div>

                  <div style="padding:26px;border:1px solid rgba(255,255,255,0.10);border-radius:22px;background:#050505;color:#d4d4d4;font-size:15px;line-height:1.9;white-space:pre-line;">
                    ${safeMessage}
                  </div>
                </div>

                <div style="margin-top:32px;padding:18px 20px;border-radius:18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                  <div style="font-size:13px;color:#a3a3a3;line-height:1.8;">
                    Esta confirmação foi enviada automaticamente pelo portal institucional da OLIDEV. Não é necessário responder este e-mail neste momento.
                  </div>
                </div>
              </div>

              ${baseFooter}
            </div>
          </div>
        </div>
      `,
    });

    if (confirmationError) {
      console.error("ERRO CONFIRMAÇÃO CLIENTE:", confirmationError);
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("ERRO API CONTACT:", error);

    return Response.json(
      { error: "Erro ao processar solicitação." },
      { status: 500 }
    );
  }
}