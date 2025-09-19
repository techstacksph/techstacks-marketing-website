'use client';

/* eslint-disable react/no-unknown-property -- Disabled to avoid errors with react-three-fiber */

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { type Mesh } from 'three';

function Model() {
  const { scene } = useGLTF('/3d/techstacks-logo.gltf');
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
  });

  return <primitive object={scene} ref={meshRef} />;
}

export default function Hero() {
  return (
    <Canvas className='!pointer-events-none lg:!pointer-events-auto'>
      <Suspense fallback="Loading...">
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3} position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableDamping enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
