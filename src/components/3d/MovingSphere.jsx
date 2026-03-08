import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshDistortMaterial, GradientTexture } from "@react-three/drei";

export default function MovingSphere({ isTyping }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Faster rotation and distortion while typing
    const speed = isTyping ? 4 : 1;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.015 * speed;

    // Floating motion
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color={isTyping ? "#818cf8" : "#c084fc"}
        speed={isTyping ? 5 : 2}
        distort={isTyping ? 0.6 : 0.4}
        radius={1}
      >
        <GradientTexture
          stops={[0, 1]}
          colors={[isTyping ? '#6366f1' : '#a855f7', isTyping ? '#f472b6' : '#ec4899']}
        />
      </MeshDistortMaterial>
    </mesh>
  );
}
