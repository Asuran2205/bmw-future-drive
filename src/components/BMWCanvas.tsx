import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { BMWCarModel } from './BMWCarModel';

interface BMWCanvasProps {
  modelPath?: string;
}

const BMWCanvas = ({ modelPath = '/models/bmw_updated.glb' }: BMWCanvasProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false); // Track if mouse is inside the 3D model area

  const modelRef = useRef<HTMLDivElement>(null); // Reference to the model container
  
  // Wrapping the scroll functionality inside the Canvas component.
  const ScrollZoom = () => {
    const { camera } = useThree(); // Access the camera

    // Zoom in/out handler on scroll
    const handleWheel = (e: WheelEvent) => {
      if (!isMouseInside) return; // Do nothing if mouse is outside the 3D model area
      
      const delta = e.deltaY;
      const zoomFactor = 0.1;

      setIsZooming(true);

      // Zoom in/out based on scroll direction
      if (delta > 0) {
        camera.position.z += zoomFactor; // Zoom in
      } else {
        camera.position.z -= zoomFactor; // Zoom out
      }

      // Optionally, clamp the zoom limits (e.g., don't allow zooming too far in/out)
      camera.position.z = Math.max(2, Math.min(camera.position.z, 10)); // Zoom limits
      e.preventDefault(); // Prevent default scroll behavior

      // Stop zooming after a short delay
      setTimeout(() => {
        setIsZooming(false);
      }, 300); // Delay time to end zooming state (adjustable)
    };

    useEffect(() => {
      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }, [camera]);

    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden relative"
      ref={modelRef}
      onMouseEnter={() => setIsMouseInside(true)} // Mouse entered the 3D model area
      onMouseLeave={() => setIsMouseInside(false)} // Mouse left the 3D model area
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        
        {/* Adding the ScrollZoom component */}
        <ScrollZoom />
        
        <Suspense fallback={null}>
          {/* Pass isZooming as a prop to BMWCarModel to stop rotation when zooming */}
          <BMWCarModel modelPath={modelPath} isZooming={isZooming} />
        </Suspense>
      </Canvas>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30 backdrop-blur-sm">
          <div className="w-18 h-12 border-4 border-bmw-electric border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BMWCanvas;
