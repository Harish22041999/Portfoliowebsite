'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedurally generate crisp Earth canvas textures (continents, oceans, lat/long grid, elevation)
function createProceduralEarthTexture(): { map: THREE.CanvasTexture; bump: THREE.CanvasTexture } {
  if (typeof document === 'undefined') {
    const dummy = new THREE.Texture();
    return { map: dummy as any, bump: dummy as any };
  }

  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Deep ocean background
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#040d1a');
  oceanGrad.addColorStop(0.5, '#071529');
  oceanGrad.addColorStop(1, '#040d1a');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle graticule / coordinate lines (lat/long grid)
  ctx.strokeStyle = 'rgba(90, 200, 250, 0.12)';
  ctx.lineWidth = 1;
  for (let lat = -80; lat <= 80; lat += 20) {
    const y = ((90 - lat) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let lon = -180; lon <= 180; lon += 30) {
    const x = ((lon + 180) / 360) * width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Draw simplified high-level continental landmass shapes
  ctx.fillStyle = '#142838'; // Dark landmass
  ctx.strokeStyle = '#295470'; // Coastlines
  ctx.lineWidth = 1.5;

  // Function to convert lat/lon to canvas x,y
  const toXY = (lat: number, lon: number): [number, number] => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  const drawPolygon = (coords: [number, number][], fill = true) => {
    if (coords.length === 0) return;
    ctx.beginPath();
    const [startLat, startLon] = coords[0];
    const [sx, sy] = toXY(startLat, startLon);
    ctx.moveTo(sx, sy);
    for (let i = 1; i < coords.length; i++) {
      const [lat, lon] = coords[i];
      const [px, py] = toXY(lat, lon);
      ctx.lineTo(px, py);
    }
    ctx.closePath();
    if (fill) ctx.fill();
    ctx.stroke();
  };

  // Indian Subcontinent (Highlighted with precision)
  drawPolygon([
    [36, 73], [34, 78], [30, 81], [27, 88], [24, 91], [22, 89],
    [20, 86], [16, 82], [13, 80.3], [10, 79.8], [8.1, 77.5], [10, 76],
    [13, 74.8], [16, 73.4], [19, 72.8], [23, 68.7], [25, 68.2], [28, 70],
    [32, 74]
  ]);

  // Eurasia (Broad outline)
  drawPolygon([
    [70, 20], [72, 60], [70, 100], [72, 140], [65, 170], [60, 160],
    [45, 145], [38, 140], [35, 130], [25, 120], [20, 110], [10, 105],
    [1, 104], [10, 98], [22, 90], [28, 70], [25, 60], [15, 55],
    [12, 45], [30, 32], [36, 36], [42, 28], [40, 0], [45, -5],
    [55, 5], [60, 10], [65, 20]
  ]);

  // Africa
  drawPolygon([
    [36, -5], [37, 10], [32, 25], [30, 32], [12, 45], [12, 51],
    [-2, 41], [-12, 40], [-25, 33], [-34, 18], [-34, 25], [-28, 15],
    [-15, 12], [5, 2], [5, -10], [15, -17], [28, -13], [35, -6]
  ]);

  // North America
  drawPolygon([
    [70, -165], [72, -130], [68, -85], [58, -60], [48, -55], [42, -70],
    [30, -80], [25, -80], [20, -87], [16, -95], [20, -105], [30, -115],
    [38, -123], [48, -125], [60, -140], [65, -168]
  ]);

  // South America
  drawPolygon([
    [12, -75], [10, -60], [0, -50], [-8, -35], [-20, -40], [-35, -55],
    [-55, -68], [-53, -75], [-35, -72], [-18, -70], [-5, -80], [5, -78]
  ]);

  // Australia
  drawPolygon([
    [-12, 131], [-12, 136], [-15, 136], [-11, 142], [-20, 148],
    [-30, 153], [-38, 147], [-38, 140], [-35, 117], [-22, 114],
    [-15, 124]
  ]);

  // Highlight key location pin markers on texture (Chennai: 13.0827°N, 80.2707°E)
  const [chennaiX, chennaiY] = toXY(13.08, 80.27);
  ctx.fillStyle = '#5AC8FA';
  ctx.beginPath();
  ctx.arc(chennaiX, chennaiY, 4, 0, Math.PI * 2);
  ctx.fill();

  // Create canvas texture
  const mapTexture = new THREE.CanvasTexture(canvas);
  mapTexture.wrapS = THREE.RepeatWrapping;
  mapTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Bump texture (height variation)
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = 1024;
  bumpCanvas.height = 512;
  const bCtx = bumpCanvas.getContext('2d')!;
  bCtx.fillStyle = '#000000';
  bCtx.fillRect(0, 0, 1024, 512);
  bCtx.fillStyle = '#333333';
  // simple elevation roughing
  bCtx.drawImage(canvas, 0, 0, 1024, 512);

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping;

  return { map: mapTexture, bump: bumpTexture };
}

// Coordinate to 3D Sphere conversion
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Satellite Orbit Ring & Propagating Point
function OrbitPath({
  radius,
  inclination,
  rotationY,
  speed,
  label,
  color,
}: {
  radius: number;
  inclination: number;
  rotationY: number;
  speed: number;
  label: string;
  color: string;
}) {
  const satelliteRef = useRef<THREE.Mesh>(null);
  const orbitAngle = useRef(Math.random() * Math.PI * 2);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 120;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      // Elliptical planar ring
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta) * Math.sin(inclination);
      const z = radius * Math.sin(theta) * Math.cos(inclination);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [radius, inclination]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  const lineMesh = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.35 });
    return new THREE.Line(lineGeometry, mat);
  }, [lineGeometry, color]);

  useFrame((_, delta) => {
    orbitAngle.current += delta * speed;
    if (satelliteRef.current) {
      const theta = orbitAngle.current;
      satelliteRef.current.position.x = radius * Math.cos(theta);
      satelliteRef.current.position.y = radius * Math.sin(theta) * Math.sin(inclination);
      satelliteRef.current.position.z = radius * Math.sin(theta) * Math.cos(inclination);
    }
  });

  return (
    <group rotation={[0, rotationY, 0]}>
      {/* Orbit Ring Primitive */}
      <primitive object={lineMesh} />

      {/* Orbiting Satellite Marker */}
      <mesh ref={satelliteRef}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

// Main Interactive Globe Model
function GlobeMesh({ isHovered }: { isHovered: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const { map, bump } = useMemo(() => createProceduralEarthTexture(), []);

  // Chennai and Erode markers in 3D
  const chennaiPos = useMemo(() => latLonToVector3(13.0827, 80.2707, 2.02), []);
  const hirosakiPos = useMemo(() => latLonToVector3(40.5937, 140.4633, 2.02), []);

  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      // Natural slow rotation
      globeGroupRef.current.rotation.y += delta * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={globeGroupRef} rotation={[0.4, 1.2, 0]}>
      {/* Terrestrial Sphere */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={map}
          bumpMap={bump}
          bumpScale={0.04}
          roughness={0.7}
          metalness={0.15}
          color="#d2e3f0"
        />
      </mesh>

      {/* Atmospheric Scattering Layer */}
      <mesh ref={atmosphereRef} scale={[1.04, 1.04, 1.04]}>
        <sphereGeometry args={[2, 48, 48]} />
        <meshStandardMaterial
          color="#5AC8FA"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Atmosphere Subtle Glow */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#0071E3"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Chennai / Tamil Nadu Beacon */}
      <group position={chennaiPos}>
        <mesh>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#5AC8FA" />
        </mesh>
        <mesh scale={[1.6, 1.6, 1.6]}>
          <ringGeometry args={[0.03, 0.05, 16]} />
          <meshBasicMaterial color="#5AC8FA" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Hirosaki, Japan Beacon (Sakura Science) */}
      <group position={hirosakiPos}>
        <mesh>
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshBasicMaterial color="#30D158" />
        </mesh>
      </group>

      {/* Sentinel-2 Polar Sun-Synchronous Orbit */}
      <OrbitPath
        radius={2.45}
        inclination={THREE.MathUtils.degToRad(98.6)}
        rotationY={0.6}
        speed={0.35}
        label="Sentinel-2"
        color="#5AC8FA"
      />

      {/* Landsat-9 Inclined Orbit */}
      <OrbitPath
        radius={2.6}
        inclination={THREE.MathUtils.degToRad(98.2)}
        rotationY={2.1}
        speed={0.28}
        label="Landsat-9"
        color="#0071E3"
      />

      {/* International Space Station 51.6° Inclined Orbit */}
      <OrbitPath
        radius={2.3}
        inclination={THREE.MathUtils.degToRad(51.6)}
        rotationY={-1.2}
        speed={0.42}
        label="ISS"
        color="#FF9F0A"
      />
    </group>
  );
}

export function EarthGlobe() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-gray-700/40 animate-pulse bg-gradient-to-tr from-cyan-950/20 to-blue-900/10" />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[680px] cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Interactive 3D Earth Observation Globe with satellite orbital paths"
    >
      <Canvas
        camera={{ position: [0, 1.2, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 3, 4]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-6, -3, -4]} intensity={0.25} color="#0071E3" />
        <GlobeMesh isHovered={isHovered} />
      </Canvas>

      {/* Restrained Scientific Annotations */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col space-y-1.5 pointer-events-none text-[11px] font-mono tracking-wider text-[#86868B] dark:text-[#86868B]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5AC8FA] animate-pulse" />
          <span className="font-semibold text-gray-700 dark:text-gray-300">SATELLITE SYSTEMS · SGP4</span>
        </div>
        <div className="text-[10px] text-gray-400 dark:text-gray-500">
          EO ORBITS: SENTINEL-2 · LANDSAT-9 · ISS
        </div>
        <div className="text-[10px] text-gray-400 dark:text-gray-500">
          NODE: 13.0827° N, 80.2707° E · CHENNAI
        </div>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none hidden sm:flex flex-col items-end space-y-1 text-[10px] font-mono tracking-widest text-[#86868B]">
        <span className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/30 backdrop-blur-xs">
          WGS-84 SPHEROID
        </span>
        <span className="text-[9px] text-gray-400">REAL-TIME WEBGL</span>
      </div>
    </div>
  );
}
