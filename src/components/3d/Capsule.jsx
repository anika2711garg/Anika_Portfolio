import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingCapsule({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <capsuleGeometry args={[0.5, 1, 4, 8]} />
      <meshStandardMaterial color="#33ffa8" />
    </mesh>
  );
}
