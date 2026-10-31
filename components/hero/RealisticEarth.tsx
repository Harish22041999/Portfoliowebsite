'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Atmospheric Rim Scattering Shader (Simulating Rayleigh Blue Glow on the Horizon)
const AtmosphereShader = {
  uniforms: {
    color: { value: new THREE.Color('#4ea8de') },
    lightDirection: { value: new THREE.Vector3(5, 3, 5).normalize() },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    uniform vec3 lightDirection;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vec3 viewDir = normalize(-vPosition);
      float rim = 1.0 - max(0.0, dot(vNormal, viewDir));
      rim = pow(rim, 2.8);
      
      // Atmospheric glow is illuminated by the sunlight vector
      float sunFacing = dot(vNormal, normalize(lightDirection));
      float dayFactor = clamp(sunFacing * 0.7 + 0.4, 0.05, 1.0);
      
      gl_FragColor = vec4(color, rim * dayFactor * 0.75);
    }
  `,
};

// 3D Satellite Model with central bus chassis, dual solar panel arrays, sensor dish, and beacon LED
function SatelliteModel({ color }: { color: string }) {
  return (
    <group>
      {/* 1. Central Satellite Bus Chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.055, 0.048, 0.08]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.88}
          roughness={0.22}
        />
      </mesh>

      {/* Gold thermal insulation foil top shield */}
      <mesh position={[0, 0.026, 0]}>
        <boxGeometry args={[0.048, 0.004, 0.072]} />
        <meshStandardMaterial
          color="#eab308"
          metalness={0.92}
          roughness={0.16}
        />
      </mesh>

      {/* 2. Solar Panel Array - Left Wing */}
      <group position={[-0.135, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.16, 0.004, 0.065]} />
          <meshStandardMaterial
            color="#1d4ed8"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
        {/* Connection strut to bus */}
        <mesh position={[0.09, 0, 0]}>
          <boxGeometry args={[0.025, 0.005, 0.008]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* 3. Solar Panel Array - Right Wing */}
      <group position={[0.135, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.16, 0.004, 0.065]} />
          <meshStandardMaterial
            color="#1d4ed8"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
        {/* Connection strut to bus */}
        <mesh position={[-0.09, 0, 0]}>
          <boxGeometry args={[0.025, 0.005, 0.008]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* 4. Earth Observation Optical Payload / Downlink Dish pointing toward Earth */}
      <mesh position={[0, -0.028, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.022, 0.02, 12]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* 5. Luminous Telemetry Beacon LED */}
      <mesh position={[0, 0.03, 0.035]}>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

// Delicate orbit path with an orbiting 3D satellite model oriented tangentially along the velocity vector
function DelicateOrbit({
  radius,
  inclinationDeg,
  rotationY,
  speed,
  color,
  initialAngle = 0,
}: {
  radius: number;
  inclinationDeg: number;
  rotationY: number;
  speed: number;
  color: string;
  initialAngle?: number;
}) {
  const satGroupRef = useRef<THREE.Group>(null);
  const angleRef = useRef(initialAngle);
  const inclination = THREE.MathUtils.degToRad(inclinationDeg);

  const lineMesh = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta) * Math.sin(inclination);
      const z = radius * Math.sin(theta) * Math.cos(inclination);
      pts.push(new THREE.Vector3(x, y, z));
    }
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Line(geom, mat);
  }, [radius, inclination, color]);

  useFrame((_, delta) => {
    angleRef.current += delta * speed;
    if (satGroupRef.current) {
      const theta = angleRef.current;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta) * Math.sin(inclination);
      const z = radius * Math.sin(theta) * Math.cos(inclination);
      satGroupRef.current.position.set(x, y, z);

      // Calculate tangent velocity vector for realistic flight orientation
      const dx = -radius * Math.sin(theta);
      const dy = radius * Math.cos(theta) * Math.sin(inclination);
      const dz = radius * Math.cos(theta) * Math.cos(inclination);
      const forward = new THREE.Vector3(dx, dy, dz).normalize();

      // Up vector points radially outwards from Earth
      const up = new THREE.Vector3(x, y, z).normalize();
      const right = new THREE.Vector3().crossVectors(forward, up).normalize();
      const trueUp = new THREE.Vector3().crossVectors(right, forward).normalize();

      const rotMatrix = new THREE.Matrix4().makeBasis(right, trueUp, forward);
      satGroupRef.current.quaternion.setFromRotationMatrix(rotMatrix);
    }
  });

  return (
    <group rotation={[0, rotationY, 0]}>
      <primitive object={lineMesh} />
      <group ref={satGroupRef}>
        <SatelliteModel color={color} />
      </group>
    </group>
  );
}

// Deep Space Starfield with variable stellar magnitudes and authentic astronomical colors
function DeepSpaceStars() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#f8fafc'), // pure white
      new THREE.Color('#e0f2fe'), // blue-white
      new THREE.Color('#bfdbfe'), // soft azure
      new THREE.Color('#fef3c7'), // warm amber star
      new THREE.Color('#fae8ff'), // soft violet star
    ];

    for (let i = 0; i < count; i++) {
      // Uniform spherical shell distribution between radius 32 and 68
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 32 + Math.random() * 36;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      // Slight brightness variation
      const brightness = 0.5 + Math.random() * 0.5;
      col[i * 3] = color.r * brightness;
      col[i * 3 + 1] = color.g * brightness;
      col[i * 3 + 2] = color.b * brightness;
    }

    return [pos, col];
  }, []);

  const starTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.0012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.88}
        map={starTexture || undefined}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Distant Cosmic Galaxy Particle Cluster in the Deep Background
function DistantGalaxy({
  position,
  scale = 1,
  rotation = [0.4, 0.8, -0.2],
  coreColor = '#c084fc',
  armColor = '#38bdf8',
}: {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  coreColor?: string;
  armColor?: string;
}) {
  const galaxyRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const particleCount = 750;
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(coreColor);
    const c2 = new THREE.Color(armColor);

    for (let i = 0; i < particleCount; i++) {
      // 2 spiral arms
      const armIndex = i % 2;
      const angleOffset = armIndex * Math.PI;
      const r = Math.pow(Math.random(), 2.2) * 4.2;
      const spiralAngle = r * 1.8 + angleOffset;

      const spreadX = (Math.random() - 0.5) * (0.35 + r * 0.15);
      const spreadY = (Math.random() - 0.5) * 0.22;
      const spreadZ = (Math.random() - 0.5) * (0.35 + r * 0.15);

      pos[i * 3] = Math.cos(spiralAngle) * r + spreadX;
      pos[i * 3 + 1] = spreadY;
      pos[i * 3 + 2] = Math.sin(spiralAngle) * r + spreadZ;

      // Color interpolation: core to arm tips
      const factor = Math.min(1, r / 4.0);
      const mixed = c1.clone().lerp(c2, factor);
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [coreColor, armColor]);

  useFrame((_, delta) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += delta * 0.006;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Galaxy Core Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshBasicMaterial
          color={coreColor}
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Spiral Star Dust */}
      <points ref={galaxyRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.048}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// Photorealistic Globe Model using NASA Blue Marble textures with continuous natural spin
function PhotorealisticGlobe({ reducedMotion }: { reducedMotion: boolean }) {
  const earthGroupRef = useRef<THREE.Group>(null);
  const earthMeshRef = useRef<THREE.Mesh>(null);
  const cloudsMeshRef = useRef<THREE.Mesh>(null);

  // Load NASA textures
  const textures = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const loader = new THREE.TextureLoader();

    const dayMap = loader.load('/textures/earth/earth_atmos_2048.jpg');
    dayMap.colorSpace = THREE.SRGBColorSpace;

    const specularMap = loader.load('/textures/earth/earth_specular_2048.jpg');
    const normalMap = loader.load('/textures/earth/earth_normal_2048.jpg');

    const cloudsMap = loader.load('/textures/earth/earth_clouds_1024.png');
    cloudsMap.colorSpace = THREE.SRGBColorSpace;

    return { dayMap, specularMap, normalMap, cloudsMap };
  }, []);

  // Continuous, natural spin on Earth's axial tilt (clouds drift slightly faster)
  useFrame((_, delta) => {
    if (reducedMotion) return;

    if (earthMeshRef.current) {
      earthMeshRef.current.rotation.y += delta * 0.032;
    }
    if (cloudsMeshRef.current) {
      cloudsMeshRef.current.rotation.y += delta * 0.045;
    }
  });

  const atmosphereMat = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(AtmosphereShader.uniforms),
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
  }, []);

  // Initial Orientation:
  // Tilt Earth naturally on its ~23.4° axis, and rotate Y so the Indian Subcontinent (~78°E, ~15°N) faces the viewer directly
  const initialEarthRotationY = -THREE.MathUtils.degToRad(78) - Math.PI / 2;

  return (
    <group ref={earthGroupRef} rotation={[0.26, 0, 0]}>
      
      {/* 1. Main Terrestrial Earth Sphere (NASA Blue Marble) */}
      <mesh ref={earthMeshRef} rotation={[0, initialEarthRotationY, 0]}>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshStandardMaterial
          map={textures?.dayMap}
          roughnessMap={textures?.specularMap}
          roughness={0.75}
          metalness={0.08}
          normalMap={textures?.normalMap}
          normalScale={new THREE.Vector2(0.06, 0.06)}
        />
      </mesh>

      {/* 2. Natural NASA Atmospheric Cloud Sphere */}
      <mesh
        ref={cloudsMeshRef}
        rotation={[0, initialEarthRotationY + 0.1, 0]}
        scale={[1.012, 1.012, 1.012]}
      >
        <sphereGeometry args={[2.0, 48, 48]} />
        <meshStandardMaterial
          map={textures?.cloudsMap}
          transparent
          opacity={0.38}
          blending={THREE.NormalBlending}
          depthWrite={false}
          roughness={1.0}
        />
      </mesh>

      {/* 3. Outer Atmospheric Rayleigh Blue Scattering Halo */}
      <mesh scale={[1.042, 1.042, 1.042]}>
        <sphereGeometry args={[2.0, 48, 48]} />
        <primitive object={atmosphereMat} />
      </mesh>

      {/* 4. Soft Outer Horizon Haze */}
      <mesh scale={[1.12, 1.12, 1.12]}>
        <sphereGeometry args={[2.0, 32, 32]} />
        <meshBasicMaterial
          color="#0071E3"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 5. Real 3D Satellite Models Orbiting Earth */}
      {/* Sentinel-2 Polar Sun-Synchronous (98.6°) with Cyan LED */}
      <DelicateOrbit
        radius={2.45}
        inclinationDeg={98.6}
        rotationY={0.9}
        speed={0.24}
        color="#57C7F7"
        initialAngle={0.8}
      />

      {/* Landsat-9 (98.2°) with Green LED */}
      <DelicateOrbit
        radius={2.62}
        inclinationDeg={98.2}
        rotationY={2.1}
        speed={0.19}
        color="#30D158"
        initialAngle={2.6}
      />

      {/* ISS Low-Earth Orbit (51.6°) with Amber LED */}
      <DelicateOrbit
        radius={2.28}
        inclinationDeg={51.6}
        rotationY={-1.2}
        speed={0.32}
        color="#FF9F0A"
        initialAngle={4.2}
      />

    </group>
  );
}

function EarthLoadingCard() {
  const [percent, setPercent] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 98) {
          clearInterval(timer);
          return 98;
        }
        return prev + Math.floor(Math.random() * 9) + 4;
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[450px] sm:h-[550px] lg:h-full lg:min-h-[720px] flex items-center justify-center p-4">
      <div className="w-72 max-w-[85vw] p-6 rounded-2xl border border-[#292D35] bg-[#101217]/85 backdrop-blur-md space-y-3.5 shadow-2xl">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#86868B] uppercase tracking-wider text-[11px]">Loading 3D Earth</span>
          <span className="text-[#57C7F7] font-bold">{percent}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#181B22] rounded-full overflow-hidden border border-[#292D35]">
          <div
            className="h-full bg-gradient-to-r from-[#0071E3] to-[#57C7F7] rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(87,199,247,0.6)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="text-[10px] font-mono text-gray-500 flex justify-between">
          <span>INITIALIZING SPATIAL TWIN</span>
          <span>NASA BLUE MARBLE</span>
        </div>
      </div>
    </div>
  );
}

export function RealisticEarth() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  if (!mounted) {
    return <EarthLoadingCard />;
  }

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] lg:h-full lg:min-h-[720px] xl:min-h-[820px] select-none overflow-hidden flex items-center justify-center pointer-events-none"
      role="img"
      aria-label="Natural photorealistic 3D Earth observation visualization with orbiting satellites and deep space galaxies"
    >
      {/* 1. Seamless Left-to-Right Fade Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-56 lg:w-72 xl:w-96 bg-gradient-to-r from-[#08090B] via-[#08090B]/85 to-transparent pointer-events-none z-10" />

      {/* 2. Soft top and bottom fade gradients so it blends into the page flow */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08090B] via-[#08090B]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-transparent pointer-events-none z-10" />

      {/* 3. Canvas with CSS horizontal fade mask for ultra-smooth edge blending */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 12%, rgba(0, 0, 0, 0.85) 28%, black 45%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 12%, rgba(0, 0, 0, 0.85) 28%, black 45%)',
        }}
      >
        <Canvas
          camera={{ position: [0.15, 0.05, 5.3], fov: 42 }}
          dpr={[1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="bg-transparent"
        >
          {/* Deep Space Background: Small stars with authentic magnitudes */}
          <DeepSpaceStars />

          {/* Distant Outer Galaxies */}
          <DistantGalaxy
            position={[-9, 5.5, -20]}
            scale={1.2}
            rotation={[0.5, 0.9, -0.3]}
            coreColor="#c084fc"
            armColor="#38bdf8"
          />
          <DistantGalaxy
            position={[11, -4.5, -24]}
            scale={0.95}
            rotation={[-0.4, 1.2, 0.5]}
            coreColor="#fbbf24"
            armColor="#818cf8"
          />

          {/* Soft natural ambient fill representing space background */}
          <ambientLight intensity={0.28} color="#9ec5e8" />

          {/* Physical Sun Directional Light (illuminates ~65% of the visible hemisphere) */}
          <directionalLight
            position={[5.5, 2.5, 4.8]}
            intensity={2.1}
            color="#fffaf0"
          />

          {/* Subtle rim light for the dark night horizon */}
          <directionalLight
            position={[-6.0, -2.0, -3.0]}
            intensity={0.12}
            color="#3a86ff"
          />

          {/* Naturally spinning Earth with orbiting satellites */}
          <PhotorealisticGlobe reducedMotion={reducedMotion} />
        </Canvas>
      </div>
    </div>
  );
}
