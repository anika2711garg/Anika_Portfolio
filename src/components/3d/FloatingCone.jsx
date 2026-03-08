// components/3d/FloatingCone.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingCone({ position = [0, 0, 0] }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <coneGeometry args={[0.5, 1, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
