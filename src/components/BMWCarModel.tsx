
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Group } from 'three';

// Define proper interfaces for components
interface BMWCarModelProps {
  rotate?: boolean;
  modelPath?: string;
}

// Custom 3D model component that loads GLB file
function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  
  // Clone the scene to avoid issues with multiple instances
  const model = scene.clone();
  
  return <primitive object={model} scale={1} />;
}

export function BMWCarModel({ rotate = true, modelPath = '/your-model.glb' }: BMWCarModelProps) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Apply rotation for display
  useFrame((state, delta) => {
    if (group.current && rotate) {
      // Gentle rotation for display
      group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
      
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      
      <group 
        ref={group} 
        position={[0, -0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Your 3D model will be loaded here */}
        <Model modelPath={modelPath} />
      </group>
      
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Add environment map for realistic reflections */}
      <Environment preset="city" />
    </>
  );
}

// Preload the GLB model
useGLTF.preload('/your-model.glb');
