import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingOctahedron({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial color="#5733ff" />
    </mesh>
  );
}
