
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { BMWCarModel } from './BMWCarModel';

interface BMWCanvasProps {
  modelPath?: string;
}

const BMWCanvas = ({ modelPath = '/bmw-concept.glb' }: BMWCanvasProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate model loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <BMWCarModel modelPath={modelPath} />
        </Suspense>
      </Canvas>
      
      {/* Loading indicator that shows while the model loads */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-bmw-electric border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BMWCanvas;
