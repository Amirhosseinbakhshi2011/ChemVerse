"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Environment } from "@react-three/drei";
import Molecule from "./Molecule";
import { Molecule as MoleculeType } from "@/lib/molecules";
import { Suspense } from "react";

export default function Scene({ molecule }: { molecule: MoleculeType }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      style={{ background: "radial-gradient(ellipse at center, #0f0c29 0%, #050510 70%)" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#88aaff" />
        <pointLight position={[0, 4, 0]} intensity={0.6} color="#ff88cc" />

        <Stars radius={80} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <Molecule data={molecule} />
        </Float>

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={14}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Suspense>
    </Canvas>
  );
}