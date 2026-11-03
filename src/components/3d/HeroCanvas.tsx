import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { HeroCanvasFallback } from './HeroCanvasFallback';

// Artistic Red Liquid-Glass Sculptural Ribbon
function LiquidGlassRibbon() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Fluid continuous base rotation
    meshRef.current.rotation.y += delta * 0.28;
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.25;
    meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.15;

    // Smooth mouse parallax damping
    const targetX = state.pointer.y * 0.35;
    const targetY = state.pointer.x * 0.45;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x + targetX * 0.05, 0.08);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetY * 0.05, 0.08);
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow position={[0, 0, 0]}>
      {/* Complex sculptural torus knot representing intertwined liquid ribbons */}
      <torusKnotGeometry args={[1.2, 0.38, 160, 48, 2, 5]} />
      <meshPhysicalMaterial
        color="#E00000"
        emissive="#4A0000"
        emissiveIntensity={0.2}
        roughness={0.12}
        metalness={0.08}
        transmission={0.92}
        ior={1.54}
        thickness={1.4}
        specularIntensity={1.0}
        specularColor="#FFFFFF"
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transparent={true}
        opacity={0.95}
      />
    </mesh>
  );
}

// Intertwined Liquid Chrome Orbital Ring
function ChromeOrbitalRibbon() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime();

    ringRef.current.rotation.z -= delta * 0.22;
    ringRef.current.rotation.x = Math.cos(t * 0.35) * 0.4;
    ringRef.current.rotation.y += delta * 0.15;

    // Responsive position float
    ringRef.current.position.y = Math.sin(t * 0.8) * 0.08;
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
      <torusGeometry args={[1.9, 0.04, 32, 120]} />
      <meshStandardMaterial
        color="#FAFAFA"
        metalness={0.98}
        roughness={0.06}
        envMapIntensity={2.2}
      />
    </mesh>
  );
}

// Inner Geometric Core with Ruby Caustics
function GeometricCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!coreRef.current) return;
    const t = state.clock.getElapsedTime();
    coreRef.current.rotation.y -= delta * 0.5;
    coreRef.current.rotation.x += delta * 0.3;

    const s = 0.55 + Math.sin(t * 1.5) * 0.05;
    coreRef.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#FF2B2B"
        emissiveIntensity={1.2}
        wireframe={true}
        transparent={true}
        opacity={0.45}
      />
    </mesh>
  );
}

// Floating Ambient Micro-Specks
function AmbientSpecks({ count = 90 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const red = new THREE.Color('#E00000');
    const dark = new THREE.Color('#171717');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;

      const isRed = Math.random() > 0.45;
      const c = isRed ? red : dark;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
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
        size={0.035}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Root with Realistic Studio Lighting
function StudioLightingScene() {
  return (
    <>
      <ambientLight intensity={0.9} color="#FFFFFF" />
      
      {/* High-Contrast Key Light */}
      <directionalLight position={[6, 9, 7]} intensity={2.2} color="#FFFFFF" castShadow />
      
      {/* Warm Fill Light */}
      <directionalLight position={[-6, -5, -4]} intensity={1.0} color="#F6F5F2" />
      
      {/* Internal Crimson Point Light (illuminates glass from within) */}
      <pointLight position={[0, 0, 0]} intensity={3.5} color="#E00000" distance={5} />
      
      {/* Sharp Specular Rim Light */}
      <pointLight position={[2, 4, -3]} intensity={2.0} color="#FFFFFF" distance={7} />

      <LiquidGlassRibbon />
      <ChromeOrbitalRibbon />
      <GeometricCore />
      <AmbientSpecks count={90} />
    </>
  );
}

export const HeroCanvas: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

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
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      {/* Warm Red Ambient Halo */}
      <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-brand-red/10 blur-[100px] pointer-events-none" />

      <Suspense fallback={<HeroCanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 2]}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <StudioLightingScene />
        </Canvas>
      </Suspense>
    </div>
  );
};
