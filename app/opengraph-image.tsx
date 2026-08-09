import { ImageResponse } from "next/og";
import { DEFAULT_OG_ALT } from "@/lib/seo";

/**
 * Generated 1200×630 share card.
 *
 * The previous OG image pointed at an editorial photo that is actually 696×928
 * — a portrait image declared as landscape. Facebook, LinkedIn, WhatsApp and
 * X all letterbox or centre-crop that badly, and Google Discover skips images
 * below its aspect threshold entirely. Generating the card guarantees the
 * declared dimensions match the bytes.
 */

export const alt = DEFAULT_OG_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f2ee",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Architectural hairline frame */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px solid #cec6bc",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 1, background: "#ba9e84", display: "flex" }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ba9e84",
              display: "flex",
            }}
          >
            Arquitetura e Urbanismo
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#3d3035",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Arquitetura que guia,</span>
            <span style={{ color: "#786169" }}>do primeiro traço à obra.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.5,
              color: "#786169",
              maxWidth: 780,
              display: "flex",
            }}
          >
            Projetos residenciais e comerciais de médio a alto padrão — do terreno à entrega
            das chaves.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid #cec6bc",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 30, color: "#3d3035", letterSpacing: 2, display: "flex" }}>
              HIGH DESIGN ARQ.
            </div>
            <div style={{ fontSize: 20, color: "#786169", display: "flex" }}>
              Emanoella Goulart · Arquiteta e Urbanista
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#ba9e84", letterSpacing: 3, display: "flex" }}>
            highdesign.arq.br
          </div>
        </div>
      </div>
    ),
    size
  );
}
