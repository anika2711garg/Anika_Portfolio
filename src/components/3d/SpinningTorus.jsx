// components/3d/SpinningTorus.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningTorus({ position = [0, 0, 0] }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.02;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  );
}
