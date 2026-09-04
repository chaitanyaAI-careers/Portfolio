import { ImageResponse } from "next/og";

export const alt = "Chaitanya Sai — Applied AI Engineering Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(circle at 15% 20%, #173a72 0%, transparent 30%), radial-gradient(circle at 80% 15%, #3a1d72 0%, transparent 28%), #080b12",
          color: "#f8fbff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#79b6ff", letterSpacing: 2, textTransform: "uppercase" }}>
          Applied AI Engineering Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, marginTop: 24 }}>
          Chaitanya Sai
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#d9e4f4", marginTop: 16 }}>
          Generative AI · LLMs · RAG · Agentic AI
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#8da3bd", marginTop: 28 }}>
          AI Platform · Backend Engineering · Evaluation · Governance
        </div>
      </div>
    ),
    size,
  );
}
