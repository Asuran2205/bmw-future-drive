import React, { useRef, useMemo } from 'react';
import { PerspectiveCamera, useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Group, Object3D, Mesh, MeshStandardMaterial, Color, DoubleSide } from 'three';

interface BMWCarModelProps {
  modelPath?: string;
  isZooming: boolean;
}

// Component to load and customize the model
function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);

  const model = useMemo(() => {
    const cloned = scene.clone();

    cloned.traverse((child: Object3D) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const mat = mesh.material as MeshStandardMaterial;

        if (mat && mat.name.toLowerCase().includes('glass')) {
          mat.transparent = true;
          mat.opacity = 0.6;
          mat.metalness = 0.8;
          mat.roughness = 0.05;
          mat.side = DoubleSide;
          mat.color = new Color(0x99ccff);
        }

        if (mat) {
          mat.envMapIntensity = 1.5;
        }
      }
    });

    return cloned;
  }, [scene]);

  return <primitive object={model} scale={0.9} />;
}

// Main BMWCarModel component (No Auto-Rotation, Manual Rotation via OrbitControls)
export function BMWCarModel({
  modelPath = '/models/audi.glb',
  isZooming
}: BMWCarModelProps) {
  const group = useRef<Group>(null);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />

      {/* OrbitControls to enable manual rotation */}
      <OrbitControls enableZoom={true} enablePan={true} />

      <group ref={group} position={[0, -0.5, 0]}>
        <Model modelPath={modelPath} />
      </group>

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.1} />

      {/* Environment for reflections */}
      <Environment preset="studio" />
    </>
  );
}
