"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MOLECULES } from "@/lib/molecules";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState(MOLECULES[0]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* 3D Canvas */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Scene molecule={selected} />
      </div>

      {/* Top Title */}
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 28,
          left: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #00f5ff, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
            }}
          >
            ChemVerse
          </h1>
          <p style={{ fontSize: "0.85rem", opacity: 0.55, marginTop: 4 }}>
            جهان سه‌بعدی مولکول‌ها
          </p>
        </div>

        <div style={{ textAlign: "left", opacity: 0.6, fontSize: "0.8rem" }}>
          بچرخون • زوم کن
        </div>
      </div>

      {/* Molecule Info Card */}
      <div
        style={{
          position: "absolute",
          top: 110,
          right: 28,
          width: 260,
          background: "rgba(15, 12, 41, 0.75)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: "18px 20px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div style={{ fontSize: "1.35rem", fontWeight: 700 }}>{selected.name}</div>
        <div
          style={{
            fontSize: "1.1rem",
            color: "#00f5ff",
            marginTop: 4,
            fontFamily: "monospace",
          }}
        >
          {selected.formula}
        </div>
        <p style={{ fontSize: "0.82rem", opacity: 0.7, marginTop: 10, lineHeight: 1.5 }}>
          {selected.description}
        </p>
      </div>

      {/* Molecule Selector */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          padding: "0 20px",
          zIndex: 10,
        }}
      >
        {MOLECULES.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m)}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border:
                selected.id === m.id
                  ? "1px solid #a855f7"
                  : "1px solid rgba(255,255,255,0.15)",
              background:
                selected.id === m.id
                  ? "rgba(168, 85, 247, 0.25)"
                  : "rgba(255,255,255,0.06)",
              color: "white",
              cursor: "pointer",
              fontSize: "0.9rem",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Footer Credit */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          fontSize: "0.9rem",
          opacity: 0.75,
        }}
      >
        ساخته شده توسط{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #00f5ff, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          امیرحسین بخشی
        </span>
      </div>
    </div>
  );
}