
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Box, Cylinder, MeshDistortMaterial } from '@react-three/drei';
import { Group, Vector3 } from 'three';

// Define proper type for the Wheel component
interface WheelProps {
  position: [number, number, number];
}

// Wheel component with proper typing
function Wheel({ position }: WheelProps) {
  return (
    <mesh position={position}>
      <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
    </mesh>
  );
}

export function BMWCarModel({ rotate = true }) {
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
      
      <group ref={group} dispose={null} position={[0, -0.5, 0]}>
        {/* Car body */}
        <mesh position={[0, 0.4, 0]}>
          <Box args={[2, 0.5, 4]}>
            <MeshDistortMaterial color="#0066B1" distort={0.2} speed={1} />
          </Box>
        </mesh>
        
        {/* Car top/cabin */}
        <mesh position={[0, 0.8, 0]}>
          <Box args={[1.5, 0.4, 2]}>
            <meshStandardMaterial color="#005195" metalness={0.9} roughness={0.2} />
          </Box>
        </mesh>
        
        {/* Wheels */}
        <Wheel position={[-0.9, -0.3, 1.2]} />
        <Wheel position={[0.9, -0.3, 1.2]} />
        <Wheel position={[-0.9, -0.3, -1.2]} />
        <Wheel position={[0.9, -0.3, -1.2]} />
        
        {/* Front lights */}
        <mesh position={[0.7, 0.3, 1.95]}>
          <Box args={[0.3, 0.1, 0.1]}>
            <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
          </Box>
        </mesh>
        <mesh position={[-0.7, 0.3, 1.95]}>
          <Box args={[0.3, 0.1, 0.1]}>
            <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
          </Box>
        </mesh>
        
        {/* BMW logo front */}
        <mesh position={[0, 0.4, 2.01]}>
          <Cylinder args={[0.15, 0.15, 0.05, 32]}>
            <meshStandardMaterial color="#333333" />
          </Cylinder>
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
