import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Gustavo Fogliati Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top center, rgba(240,197,49,0.22), transparent 32%), linear-gradient(180deg, #0F1117 0%, #0A0C12 100%)",
          color: "#F8FAFC",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#F0C531",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#F0C531",
            }}
          />
          Gustavo Fogliati
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Software Engineering Student
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#AAB2C3",
              maxWidth: 900,
            }}
          >
            Interfaces modernas, código limpo e projetos que resolvem problemas
            reais com Next.js, React e TypeScript.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#AAB2C3",
          }}
        >
          <span>gustavo portfolio</span>
          <span style={{ color: "#3AAFEA" }}>next.js · typescript · react</span>
        </div>
      </div>
    ),
    size,
  );
}
