// components/3d/RotatingCube.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingCube({ position = [0, 0, 0] }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}
