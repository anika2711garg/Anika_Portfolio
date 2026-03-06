// components/3d/WavyCone.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function WavyCone({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <coneGeometry args={[1, 2, 32]} />
      <MeshWobbleMaterial factor={0.5} speed={1.5} color="#f472b6" />
    </mesh>
  );
}
