import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingRing({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <ringGeometry args={[1, 1.5, 32]} />
      <meshStandardMaterial color="#a833ff" side={THREE.DoubleSide} />
    </mesh>
  );
}
