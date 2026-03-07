"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export interface PlanetData {
  id: string;
  name: string;
  color: string;
  emissive: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  startAngle: number;
}

interface PlanetProps {
  data: PlanetData;
  onClick: (id: string) => void;
}

export default function Planet({ data, onClick }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      const angle = data.startAngle + t * data.orbitSpeed;
      groupRef.current.position.x = Math.cos(angle) * data.orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * data.orbitRadius;
      groupRef.current.position.y = Math.sin(angle * 0.5) * 0.3;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Planet sphere */}
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(data.id); }}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = "default"; }}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[data.size, 32, 32]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.emissive}
          emissiveIntensity={hovered ? 4 : 2}
          roughness={0.4}
          metalness={0.2}
          toneMapped={false}
        />
      </mesh>

      {/* Point light per planet */}
      <pointLight color={data.emissive} intensity={hovered ? 5 : 2} distance={12} decay={2} />

      {/* Label */}
      <Html
        position={[0, -data.size - 0.6, 0]}
        center
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            color: hovered ? "#ede9f6" : "rgba(237,233,246,0.35)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            textShadow: "0 0 10px rgba(0,0,0,0.9)",
            transition: "color 0.3s",
          }}
        >
          {data.name}
        </div>
      </Html>
    </group>
  );
}
