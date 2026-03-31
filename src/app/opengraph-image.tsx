import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoBuffer = readFileSync(
    join(process.cwd(), "public/maquette/logo_CanDirathon.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
        padding: "60px",
      }}
    >
      {/* Logo */}
      <img
        src={logoSrc}
        width={150}
        height={150}
        style={{ borderRadius: "24px", objectFit: "contain" }}
      />

      {/* Nom */}
      <div
        style={{
          fontSize: 80,
          fontWeight: "900",
          color: "#be185d",
          marginTop: 28,
          letterSpacing: "-2px",
        }}
      >
        CanDirathon
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 30,
          color: "#7e22ce",
          marginTop: 16,
          textAlign: "center",
          maxWidth: 880,
          lineHeight: 1.4,
        }}
      >
        Defis a velo solidaires contre le cancer et le diabete
      </div>

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 36,
          background: "rgba(190, 24, 93, 0.1)",
          border: "2px solid rgba(190, 24, 93, 0.3)",
          borderRadius: "999px",
          padding: "10px 28px",
          fontSize: 22,
          color: "#9d174d",
          fontWeight: "600",
        }}
      >
        Association loi 1901 – Toulouse, Occitanie
      </div>
    </div>,
    { ...size },
  );
}
