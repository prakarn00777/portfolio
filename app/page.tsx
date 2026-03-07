"use client";
import dynamic from "next/dynamic";

const SolarSystem = dynamic(() => import("./components/SolarSystem"), {
  ssr: false,
  loading: () => (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "#030108", display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Space Mono', monospace", color: "rgba(237,233,246,0.3)",
      fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" as const
    }}>
      Initializing star system...
    </div>
  ),
});

export default function Home() {
  return <SolarSystem />;
}
