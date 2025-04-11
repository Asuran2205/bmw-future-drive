
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Group } from 'three';

export function BMWCarModel({ rotate = true }) {
  const group = useRef<Group>(null);
  
  // BMW i8 model from Sketchfab (CC-Attribution)
  // You may need to replace this with an actual BMW model URL you have rights to use
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bmw-i8/model.gltf');
  
  // Apply materials and setup
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
      
      <group ref={group} dispose={null} position={[0, -0.9, 0]}>
        <primitive object={scene} scale={0.01} />
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

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bmw-i8/model.gltf');
