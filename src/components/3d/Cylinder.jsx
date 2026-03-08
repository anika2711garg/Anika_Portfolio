import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningCylinder({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="#ff5733" />
    </mesh>
  );
}
