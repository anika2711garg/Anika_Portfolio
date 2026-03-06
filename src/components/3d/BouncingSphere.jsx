// components/3d/BouncingSphere.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BouncingSphere({ position }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
