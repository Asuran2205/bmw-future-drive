
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BMWCarModel } from './BMWCarModel';

const BMWCanvas = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <BMWCarModel />
        </Suspense>
      </Canvas>
      
      {/* Loading indicator that shows while the model loads */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 border-4 border-bmw-electric border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default BMWCanvas;
