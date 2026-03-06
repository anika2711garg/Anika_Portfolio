// components/3d/Scene.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Scene({ children }) {
  return (
    <div className="h-[500px] w-full mt-6">
      <Canvas camera={{ position: [0, 0, 12], fov: 55 }} shadows>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[2, 2, 2]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
