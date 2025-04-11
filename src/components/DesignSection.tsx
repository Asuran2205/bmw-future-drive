
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignSection = () => {
  const designFeatures = [
    {
      title: "Iconic Illumination",
      description: "The distinctive light signature creates an unmistakable presence on the road, with adaptive LED elements that communicate with other road users.",
      delay: 100
    },
    {
      title: "Aerodynamic Efficiency",
      description: "Every curve and surface is designed to minimize drag while maximizing downforce for optimal performance and efficiency.",
      delay: 200
    },
    {
      title: "Interactive Surfaces",
      description: "Smart materials respond to touch and environmental conditions, allowing the vehicle exterior to function as an interface.",
      delay: 300
    },
    {
      title: "Interior Experience",
      description: "The cabin redefines luxury with sustainable materials, minimalist design, and intelligent ambient elements.",
      delay: 400
    }
  ];

  return (
    <section id="design" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/70 to-bmw-dark"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-md animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Design Language</h2>
              <p className="text-gray-300 mb-8">
                BMW's future design philosophy balances innovation with our iconic heritage, 
                creating vehicles that are instantly recognizable yet revolutionary.
              </p>
              
              <div className="space-y-8">
                {designFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in" 
                    style={{ animationDelay: `${feature.delay}ms` }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-bmw-electric">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-bmw-blue hover:bg-bmw-electric text-white group">
                Explore Design Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden border border-white/10 animate-fade-in perspective">
              {/* Design showcase */}
              <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/50 to-bmw-blue/10 flex items-center justify-center preserve-3d">
                <div className="relative w-4/5 h-3/5 animate-float">
                  {/* Car profile silhouette */}
                  <svg 
                    viewBox="0 0 800 300" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-full"
                  >
                    {/* Side profile of car */}
                    <path 
                      d="M700,200 C750,200 760,170 760,160 L760,140 C760,130 750,120 735,120 L670,120 L650,100 L400,80 L250,80 L150,100 L100,120 L60,140 C50,150 40,160 40,170 C40,180 50,200 100,200 L300,200 L330,185 L380,185 L420,200 L700,200 Z" 
                      stroke="#00a0e1" 
                      strokeWidth="2"
                      fill="url(#car-side-gradient)"
                    />
                    {/* Windows */}
                    <path 
                      d="M270,100 L390,90 L550,110 L630,120 L600,160 L430,160 L380,140 L270,100 Z" 
                      stroke="#00a0e1" 
                      strokeWidth="1"
                      fill="#00a0e1"
                      fillOpacity="0.05"
                    />
                    {/* Wheels */}
                    <circle cx="180" cy="200" r="50" stroke="#00a0e1" strokeWidth="2" fill="#121212" />
                    <circle cx="180" cy="200" r="30" stroke="#00a0e1" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="550" cy="200" r="50" stroke="#00a0e1" strokeWidth="2" fill="#121212" />
                    <circle cx="550" cy="200" r="30" stroke="#00a0e1" strokeOpacity="0.3" strokeWidth="1" />
                    
                    {/* Headlight */}
                    <path d="M90,140 L120,125 L140,125 L110,140 Z" fill="#00a0e1" fillOpacity="0.5" />
                    
                    {/* Taillight */}
                    <path d="M705,140 L720,140 L735,150 L705,150 Z" fill="#00a0e1" fillOpacity="0.5" />
                    
                    <defs>
                      <linearGradient id="car-side-gradient" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#1c69d4" stopOpacity="0.05" />
                        <stop offset="1" stopColor="#00a0e1" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Design highlights */}
                  <div className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-bmw-electric animate-pulse-glow"></div>
                  <div className="absolute top-[45%] right-[10%] w-3 h-3 rounded-full bg-bmw-electric animate-pulse-glow" style={{ animationDelay: "500ms" }}></div>
                  
                  {/* Design annotation lines */}
                  <div className="absolute top-[20%] left-[30%] h-16 w-px bg-bmw-electric/30 before:content-[''] before:absolute before:top-0 before:left-0 before:h-2 before:w-2 before:bg-bmw-electric before:rounded-full"></div>
                  <div className="absolute top-[20%] left-[30%] w-32 h-px bg-bmw-electric/30 translate-y-16"></div>
                  <div className="absolute top-[20%] left-[30%] text-xs text-bmw-electric translate-y-20 translate-x-8">AERODYNAMIC PROFILE</div>
                  
                  <div className="absolute bottom-[30%] right-[20%] h-16 w-px bg-bmw-electric/30 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:w-2 before:bg-bmw-electric before:rounded-full"></div>
                  <div className="absolute bottom-[30%] right-[20%] w-32 h-px bg-bmw-electric/30 -translate-y-16"></div>
                  <div className="absolute bottom-[30%] right-[20%] text-xs text-bmw-electric -translate-y-20 -translate-x-8">ICONIC LIGHT DESIGN</div>
                </div>
              </div>
              
              {/* Dimension lines */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 flex flex-col items-center">
                <div className="w-full h-px bg-bmw-electric/30 flex items-center justify-between">
                  <div className="h-2 w-px bg-bmw-electric/60"></div>
                  <div className="h-2 w-px bg-bmw-electric/60"></div>
                </div>
                <span className="text-xs text-bmw-electric/80 mt-1">4800 mm</span>
              </div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-bmw-grid bg-[size:20px_20px] opacity-10"></div>
            </div>
            
            {/* Design spec dots */}
            <div className="absolute bottom-6 right-6 flex space-x-1">
              {[1, 2, 3, 4].map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-bmw-electric' : 'bg-white/30'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
