import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Cloud({ count = 520 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 14;
      a[i * 3 + 1] = (Math.random() - 0.5) * 8;
      a[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return a;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    const pts = ref.current;
    if (!pts) return;
    pts.rotation.y = clock.elapsedTime * 0.018 + pointer.x * 0.18;
    pts.rotation.x = pointer.y * 0.07;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d8d2c8"
        size={0.016}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Dust3D({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <Cloud count={dense ? 900 : 480} />
      </Canvas>
    </div>
  );
}
