"use client";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

export default function OrbitRing({ radius }: { radius: number }) {
  const lineRef = useRef<THREE.Line>(null);
  const geometry = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  const material = useMemo(() => new THREE.LineBasicMaterial({ color: "#6c3ce0", transparent: true, opacity: 0.07 }), []);

  const line = useMemo(() => new THREE.Line(geometry, material), [geometry, material]);

  return <primitive ref={lineRef} object={line} />;
}
