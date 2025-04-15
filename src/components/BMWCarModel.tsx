
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Group, BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

// Define proper interfaces for components
interface BMWCarModelProps {
  rotate?: boolean;
  modelPath?: string;
}

// Custom 3D model component that loads GLB file
function Model({ modelPath }: { modelPath: string }) {
  const [modelError, setModelError] = useState(false);
  
  // Try to load the GLB file, but use a fallback if it fails
  let model;
  
  try {
    // Only try to load the actual model if we're not in error state
    if (!modelError) {
      const { scene } = useGLTF(modelPath);
      model = scene.clone();
    }
  } catch (error) {
    console.error("Error loading model:", error);
    setModelError(true);
  }
  
  // If there's an error or no model loaded, return a simple fallback car shape
  if (modelError || !model) {
    return (
      <group>
        {/* Car body */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[2, 0.5, 4]} />
          <meshStandardMaterial color="#0066B1" metalness={0.9} roughness={0.3} />
        </mesh>
        
        {/* Car top/cabin */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[1.5, 0.4, 2]} />
          <meshStandardMaterial color="#005195" metalness={0.9} roughness={0.2} />
        </mesh>
        
        {/* Wheels */}
        <mesh position={[-0.9, -0.3, 1.2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[0.9, -0.3, 1.2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[-0.9, -0.3, -1.2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[0.9, -0.3, -1.2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        
        {/* Front lights */}
        <mesh position={[0.7, 0.3, 1.95]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
        </mesh>
        <mesh position={[-0.7, 0.3, 1.95]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
        </mesh>
        
        {/* BMW logo front */}
        <mesh position={[0, 0.4, 2.01]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
    );
  }
  
  return <primitive object={model} scale={1} />;
}

export function BMWCarModel({ rotate = true, modelPath = '/bmw-concept.glb' }: BMWCarModelProps) {
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
