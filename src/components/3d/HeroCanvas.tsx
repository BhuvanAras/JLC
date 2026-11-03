import React, { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { HeroCanvasFallback } from './HeroCanvasFallback';

// Interactive Red Sculpture Mesh
function RedSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x += delta * 0.15;

      // Mouse reactive inertia damping
      const targetX = state.pointer.y * 0.4;
      const targetY = state.pointer.x * 0.5;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x + targetX * 0.05, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetY * 0.05, 0.1);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.2;
      ringRef.current.rotation.x += delta * 0.1;
    }

    if (coreRef.current) {
      // Subtle breathing pulse
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 2) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Glowing Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#FF2E2E" wireframe={true} transparent opacity={0.3} />
      </mesh>

      {/* Main Ruby Metallic Sculpture */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.35, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#E00000"
          metalness={0.88}
          roughness={0.16}
          emissive="#500000"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Outer Floating Geometric Orbit Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Ambient Floating Micro Particles
function ParticleCloud({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const redColor = new THREE.Color('#E00000');
    const whiteColor = new THREE.Color('#FFFFFF');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const isRed = Math.random() > 0.4;
      const c = isRed ? redColor : whiteColor;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Root with Lights
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 5]} intensity={1.8} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -3]} intensity={0.6} color="#FF4D4D" />
      <pointLight position={[0, 0, 0]} intensity={3.5} color="#E00000" distance={6} />
      
      <RedSculpture />
      <ParticleCloud count={200} />
    </>
  );
}

export const HeroCanvas: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Check basic WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return <HeroCanvasFallback />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-red/15 blur-[100px] pointer-events-none" />

      <Suspense fallback={<HeroCanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

