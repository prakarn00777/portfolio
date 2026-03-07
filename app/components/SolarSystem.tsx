"use client";
import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import StarField from "./StarField";
import Sun from "./Sun";
import Planet, { PlanetData } from "./Planet";
import OrbitRing from "./OrbitRing";
import InfoPanel from "./InfoPanel";

const planets: PlanetData[] = [
  {
    id: "experience",
    name: "Experience",
    color: "#7c3aed",
    emissive: "#6c3ce0",
    size: 0.7,
    orbitRadius: 8,
    orbitSpeed: 0.15,
    startAngle: 0.5,
  },
  {
    id: "projects",
    name: "Projects",
    color: "#0891b2",
    emissive: "#06b6d4",
    size: 0.9,
    orbitRadius: 13,
    orbitSpeed: 0.1,
    startAngle: 2.5,
  },
  {
    id: "skills",
    name: "Skills",
    color: "#059669",
    emissive: "#10b981",
    size: 0.65,
    orbitRadius: 18,
    orbitSpeed: 0.07,
    startAngle: 4.2,
  },
  {
    id: "education",
    name: "Education",
    color: "#dc2626",
    emissive: "#ef4444",
    size: 0.5,
    orbitRadius: 23,
    orbitSpeed: 0.05,
    startAngle: 1.0,
  },
  {
    id: "contact",
    name: "Contact",
    color: "#d97706",
    emissive: "#f59e0b",
    size: 0.4,
    orbitRadius: 28,
    orbitSpeed: 0.035,
    startAngle: 3.8,
  },
];

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "th">("en");

  const handlePlanetClick = useCallback((id: string) => {
    setSelectedPlanet(id);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPlanet(null);
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [20, 15, 25], fov: 50 }}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#030108" }}
      >
        <Suspense fallback={null}>
          {/* Ambient + dim fill */}
          <ambientLight intensity={0.08} />

          {/* Starfield */}
          <StarField count={6000} />

          {/* Nebula fog-like colored lights far away */}
          <pointLight position={[-60, 30, -50]} color="#6c3ce0" intensity={5} distance={150} decay={2} />
          <pointLight position={[50, -20, 60]} color="#1e40af" intensity={3} distance={120} decay={2} />
          <pointLight position={[0, 40, -70]} color="#c026d3" intensity={2} distance={100} decay={2} />

          {/* Sun */}
          <Sun onClick={() => handlePlanetClick("core")} />

          {/* Orbit rings */}
          {planets.map((p) => (
            <OrbitRing key={p.id} radius={p.orbitRadius} />
          ))}

          {/* Planets */}
          {planets.map((p) => (
            <Planet key={p.id} data={p} onClick={handlePlanetClick} />
          ))}

          {/* Post-processing: Bloom for glow */}
          <EffectComposer>
            <Bloom
              intensity={1.8}
              luminanceThreshold={0.15}
              luminanceSmoothing={0.9}
              mipmapBlur
              radius={0.9}
              levels={8}
            />
          </EffectComposer>

          {/* Camera controls */}
          <OrbitControls
            enablePan={false}
            minDistance={8}
            maxDistance={60}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>

      {/* Language toggle */}
      <button
        onClick={() => setLang(lang === "en" ? "th" : "en")}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 100,
          background: "rgba(12,8,30,0.75)",
          border: "1px solid rgba(108,60,224,0.3)",
          color: "#ede9f6",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          fontFamily: "var(--font-space-mono), 'Space Mono', monospace",
          fontSize: "11px",
          letterSpacing: "1.5px",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(108,60,224,0.6)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(108,60,224,0.3)")}
      >
        {lang === "en" ? "TH ไทย" : "EN Eng"}
      </button>

      {/* Hint */}
      {!selectedPlanet && (
        <div className="hint">{lang === "en" ? "Click a planet to explore" : "คลิกที่ดาวเพื่อสำรวจ"}</div>
      )}

      {/* Info Panel */}
      <InfoPanel planetId={selectedPlanet} lang={lang} onClose={handleClose} />
    </>
  );
}
