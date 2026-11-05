"use client";

import { useMemo } from "react";
import { Molecule as MoleculeType, ELEMENT_COLORS, ELEMENT_RADIUS } from "@/lib/molecules";
import * as THREE from "three";

function Bond({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const { position, quaternion, length } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const direction = new THREE.Vector3().subVectors(endVec, startVec);
    const length = direction.length();
    const position = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);

    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    quaternion.setFromUnitVectors(up, direction.clone().normalize());

    return { position: position.toArray() as [number, number, number], quaternion, length };
  }, [start, end]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.08, 0.08, length, 12]} />
      <meshStandardMaterial color="#aaaaaa" metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function Molecule({ data }: { data: MoleculeType }) {
  return (
    <group>
      {/* Atoms */}
      {data.atoms.map((atom, i) => (
        <mesh key={`atom-${i}`} position={atom.position}>
          <sphereGeometry args={[ELEMENT_RADIUS[atom.element], 32, 32]} />
          <meshStandardMaterial
            color={ELEMENT_COLORS[atom.element]}
            metalness={0.2}
            roughness={0.3}
            emissive={ELEMENT_COLORS[atom.element]}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}

      {/* Bonds */}
      {data.bonds.map((bond, i) => (
        <Bond
          key={`bond-${i}`}
          start={data.atoms[bond.from].position}
          end={data.atoms[bond.to].position}
        />
      ))}
    </group>
  );
}