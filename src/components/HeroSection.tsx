
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const carRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!carRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      carRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateY(${moveX * 0.5}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-bmw-grid bg-[size:40px_40px] opacity-20"></div>
      
      {/* Animated glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-bmw-blue/10 filter blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-bmw-electric/10 filter blur-2xl animate-pulse opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-bmw-electric uppercase tracking-wider mb-2 text-sm md:text-base">
                The Future of Driving
              </h3>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                BMW Next
                <span className="text-gradient bmw-blue-gradient"> Vision</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Experience the future of automotive innovation with BMW's next generation 
                of electric and autonomous driving technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                Explore Models 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:border-white/50">
                Watch the Film
              </Button>
            </div>
            
            <div className="pt-6 flex items-center space-x-6">
              <div className="space-y-1">
                <p className="text-bmw-electric text-2xl md:text-3xl font-bold">600 km</p>
                <p className="text-sm text-gray-400">Range</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="space-y-1">
                <p className="text-bmw-electric text-2xl md:text-3xl font-bold">3.2 s</p>
                <p className="text-sm text-gray-400">0-100 km/h</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="space-y-1">
                <p className="text-bmw-electric text-2xl md:text-3xl font-bold">400 kW</p>
                <p className="text-sm text-gray-400">Power</p>
              </div>
            </div>
          </div>
          
          <div className="perspective" ref={carRef}>
            <div className="relative h-72 md:h-96 lg:h-[500px] preserve-3d animate-float">
              {/* Car silhouette */}
              <div className="absolute inset-0 flex justify-center items-center">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 400 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path 
                    d="M120,180 C60,180 40,160 40,140 L40,120 L80,100 L80,80 L120,60 L280,60 L320,80 L320,100 L360,120 L360,140 C360,160 340,180 280,180 L120,180 Z" 
                    fill="url(#car-gradient)" 
                    stroke="#00a0e1" 
                    strokeWidth="2"
                  />
                  <ellipse cx="100" cy="180" rx="30" ry="10" fill="#121212" fillOpacity="0.5" />
                  <ellipse cx="300" cy="180" rx="30" ry="10" fill="#121212" fillOpacity="0.5" />
                  <path d="M120,60 L120,40 L280,40 L280,60" stroke="#00a0e1" strokeWidth="1" />
                  <line x1="120" y1="180" x2="280" y2="180" stroke="#00a0e1" strokeWidth="1" />
                  <defs>
                    <linearGradient id="car-gradient" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#1c69d4" stopOpacity="0.1" />
                      <stop offset="1" stopColor="#00a0e1" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Headlights glow */}
              <div className="absolute top-1/3 left-10 w-10 h-5 bg-bmw-electric rounded-full blur-sm animate-pulse-glow"></div>
              <div className="absolute top-1/3 right-10 w-10 h-5 bg-bmw-electric rounded-full blur-sm animate-pulse-glow"></div>
              
              {/* Digital elements */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-10 border border-bmw-electric/30 rounded-lg bg-bmw-electric/5 flex items-center justify-center">
                <span className="text-bmw-electric text-xs">AUTONOMOUS DRIVING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-fade-in"></div>
        </div>
        <span className="text-white/70 text-xs mt-2">SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;
