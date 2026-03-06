import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingPlane({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial color="#f5a623" side={THREE.DoubleSide} />
    </mesh>
  );
}
