import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export type StudioMode = "mark" | "bone" | "clay" | "light";

function Form({ mode }: { mode: StudioMode }) {
  const detail = mode === "bone" ? 0 : 1;

  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh>
        <icosahedronGeometry args={[1.22, detail]} />
        {mode === "mark" ? (
          <meshStandardMaterial color="#cfc8bc" roughness={1} metalness={0} />
        ) : null}
        {mode === "bone" ? <meshBasicMaterial color="#ece8e0" wireframe /> : null}
        {mode === "clay" ? (
          <meshStandardMaterial color="#9c968c" roughness={0.92} metalness={0.05} />
        ) : null}
        {mode === "light" ? (
          <MeshDistortMaterial
            color="#e4dfd6"
            roughness={0.18}
            metalness={0.72}
            distort={0.32}
            speed={1.4}
          />
        ) : null}
      </mesh>
      {mode === "mark" ? (
        <mesh>
          <icosahedronGeometry args={[1.22, 0]} />
          <meshBasicMaterial color="#2c2a26" wireframe />
        </mesh>
      ) : null}
    </Float>
  );
}

export default function Studio3D({ mode }: { mode: StudioMode }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.28} />
      <directionalLight position={[3.2, 4, 2]} intensity={1.35} color="#f3eee6" />
      <directionalLight position={[-4, -1, -2]} intensity={0.4} color="#8aa0b4" />
      <Form mode={mode} />
      <ContactShadows position={[0, -1.55, 0]} opacity={0.38} blur={2.6} far={4} color="#000000" />
      <OrbitControls
        enablePan={false}
        minDistance={2.6}
        maxDistance={6.5}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
      />
    </Canvas>
  );
}
