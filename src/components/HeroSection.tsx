
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BMWCanvas from './BMWCanvas';

const HeroSection = () => {
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
              <Link to="/explore-models">
                <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                  Explore Models 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/design-gallery">
                <Button variant="outline" className="border-white/20 hover:border-white/50">
                  Design Gallery
                </Button>
              </Link>
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
          
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
            {/* BMW 3D Model */}
            <BMWCanvas />
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bmw-dark/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Highlight effects */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <div className="h-0.5 w-20 bg-bmw-electric mb-4"></div>
              <p className="text-white/90 text-sm font-light">BMW Vision Next Concept</p>
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
