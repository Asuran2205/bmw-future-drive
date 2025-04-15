
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Group } from 'three';

// Define proper interfaces for components
interface BMWCarModelProps {
  rotate?: boolean;
}

interface WheelProps {
  position: [number, number, number];
}

// Wheel component with proper typing
function Wheel({ position }: WheelProps) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color="#111111" />
    </mesh>
  );
}

export function BMWCarModel({ rotate = true }: BMWCarModelProps) {
  const group = useRef<Group>(null);
  
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
      
      <group ref={group} position={[0, -0.5, 0]}>
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
        <Wheel position={[-0.9, -0.3, 1.2]} />
        <Wheel position={[0.9, -0.3, 1.2]} />
        <Wheel position={[-0.9, -0.3, -1.2]} />
        <Wheel position={[0.9, -0.3, -1.2]} />
        
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
