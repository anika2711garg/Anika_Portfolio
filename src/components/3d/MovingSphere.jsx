import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MovingSphere({ isTyping }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Animate more when typing
    if (isTyping) {
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.07;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.5;
    } else {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color={isTyping ? "#facc15" : "#ffffff"} />
    </mesh>
  );
}
