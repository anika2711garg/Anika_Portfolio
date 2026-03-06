import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingTorusKnot({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color="#33fff5" />
    </mesh>
  );
}
