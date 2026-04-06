import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — High Design ARQ.",
  description: "Como a High Design Arquitetura e Urbanismo coleta, usa e protege seus dados pessoais.",
};

export default function Privacidade() {
  const section: React.CSSProperties = { marginBottom: "2.5rem" };
  const h2: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "0.9rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
    color: "var(--color-brand-dark)",
    marginBottom: "0.75rem",
  };
  const p: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "0.83rem",
    lineHeight: 1.85,
    color: "var(--color-brand-primary)",
    opacity: 0.85,
    marginBottom: "0.75rem",
  };
  const li: React.CSSProperties = { ...p, marginBottom: "0.4rem" };

  return (
    <main
      style={{
        background: "var(--color-brand-white)",
        minHeight: "100vh",
        padding: "8rem 2rem 6rem",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Back link */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "3rem",
            opacity: 0.8,
          }}
        >
          ← Voltar ao site
        </Link>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.65rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "1rem",
          }}
        >
          Legal
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--color-brand-dark)",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
          }}
        >
          Política de Privacidade
        </h1>

        <p style={{ ...p, opacity: 0.5, marginBottom: "3rem" }}>
          Última atualização: abril de 2026
        </p>

        <div style={section}>
          <h2 style={h2}>1. Quem somos</h2>
          <p style={p}>
            High Design Arquitetura e Urbanismo, responsável: Emanoella Goulart,
            e-mail: contato@highdesign.arq.br. Este site é operado exclusivamente
            para apresentação de serviços e captação de contatos comerciais.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>2. Quais dados coletamos</h2>
          <p style={p}>Coletamos apenas os dados que você nos fornece voluntariamente pelo formulário de contato:</p>
          <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
            <li style={li}>Nome completo</li>
            <li style={li}>Endereço de e-mail</li>
            <li style={li}>Telefone (opcional)</li>
            <li style={li}>Mensagem sobre seu projeto</li>
          </ul>
          <p style={{ ...p, marginTop: "0.75rem" }}>
            Não utilizamos cookies de rastreamento, pixels de anúncio ou ferramentas
            de analytics de terceiros neste momento.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>3. Para que usamos seus dados</h2>
          <p style={p}>
            Exclusivamente para responder à sua mensagem e, se aplicável, dar
            continuidade ao atendimento comercial. Não compartilhamos seus dados
            com terceiros, não os utilizamos para envio de marketing não solicitado
            e não os vendemos.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>4. Base legal (LGPD)</h2>
          <p style={p}>
            O tratamento dos seus dados é realizado com base no legítimo interesse
            (Art. 7º, IX da Lei 13.709/2018) para resposta ao contato iniciado por
            você, e no consentimento quando aplicável.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>5. Por quanto tempo guardamos seus dados</h2>
          <p style={p}>
            Seus dados são mantidos pelo tempo necessário para o atendimento e,
            depois, por até 5 anos para fins de registro, salvo obrigação legal
            que exija prazo diferente.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>6. Seus direitos</h2>
          <p style={p}>Nos termos da LGPD, você tem direito a:</p>
          <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
            <li style={li}>Confirmar a existência de tratamento dos seus dados</li>
            <li style={li}>Acessar, corrigir ou eliminar seus dados</li>
            <li style={li}>Revogar o consentimento a qualquer momento</li>
            <li style={li}>Portabilidade dos dados, quando aplicável</li>
          </ul>
          <p style={{ ...p, marginTop: "0.75rem" }}>
            Para exercer qualquer desses direitos, envie um e-mail para{" "}
            <a
              href="mailto:contato@highdesign.arq.br"
              style={{ color: "var(--color-brand-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              contato@highdesign.arq.br
            </a>
            .
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>7. Contato</h2>
          <p style={p}>
            Dúvidas sobre esta política? Fale conosco:{" "}
            <a
              href="mailto:contato@highdesign.arq.br"
              style={{ color: "var(--color-brand-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              contato@highdesign.arq.br
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
