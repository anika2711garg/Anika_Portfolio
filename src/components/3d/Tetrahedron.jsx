import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingTetrahedron({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <tetrahedronGeometry args={[1]} />
      <meshStandardMaterial color="#ff33a8" />
    </mesh>
  );
}
