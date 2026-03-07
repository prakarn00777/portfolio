"use client";
import * as THREE from "three";

export default function OrbitRing({ radius }: { radius: number }) {
  const points = [];
  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#6c3ce0" transparent opacity={0.07} />
    </line>
  );
}
