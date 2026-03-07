"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SunProps {
  onClick: () => void;
}

export default function Sun({ onClick }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Point light from sun */}
      <pointLight color="#f59e0b" intensity={80} distance={100} decay={2} />
      <pointLight color="#fde68a" intensity={20} distance={200} decay={1.5} />

      {/* Sun sphere */}
      <mesh ref={meshRef} onClick={onClick}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          emissive="#f59e0b"
          emissiveIntensity={5}
          color="#fbbf24"
          roughness={0.3}
          toneMapped={false}
        />
      </mesh>

    </group>
  );
}
