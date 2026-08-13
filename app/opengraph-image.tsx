import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const formats = ["JSON", "YAML", "XML", "TOML", "ENV", "PROPERTIES"];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%)",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#ffffff",
            }}
          />
          <span
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Configuration File Converter
          </span>
        </div>

        {/* title */}
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          Configly
        </div>

        {/* tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Convert configs instantly, entirely in your browser.
        </div>

        {/* format pills */}
        <div
          style={{
            display: "flex",
            marginTop: 48,
            gap: 14,
          }}
        >
          {formats.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 22,
                letterSpacing: 1,
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}