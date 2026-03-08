import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingDodecahedron({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial color="#33ff57" wireframe />
    </mesh>
  );
}
