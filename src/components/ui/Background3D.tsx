"use client";

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function MovingLight({ color, speed, radius }: { color: string; speed: number; radius: number }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time) * radius;
      lightRef.current.position.y = Math.cos(time * 0.5) * radius;
      lightRef.current.position.z = Math.sin(time * 0.3) * (radius / 2);
    }
  });

  return (
    <pointLight
      ref={lightRef}
      color={color}
      intensity={1.5}
      distance={20}
      decay={2}
    />
  );
}

function Particles({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <Suspense fallback={<div className="fixed inset-0 bg-[#0a0a0a]" />}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.1} />
          
          <MovingLight color="#fbbf24" speed={0.5} radius={8} />
          <MovingLight color="#3b82f6" speed={0.3} radius={10} />
          <MovingLight color="#8b5cf6" speed={0.4} radius={6} />
          
          <Particles count={200} />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 32, 32]} position={[5, 2, -5]}>
              <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
            </Sphere>
          </Float>

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80 pointer-events-none" />
    </div>
  );
}
