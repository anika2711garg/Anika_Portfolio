// components/3d/FloatingIcosahedron.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingIcosahedron({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = Math.sin(t) * 0.8;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial color={"#eab308"} wireframe />
    </mesh>
  );
}
