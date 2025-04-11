
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, ShieldCheck, Smartphone, Gauge, Brain } from 'lucide-react';

interface TechTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageSide: 'left' | 'right';
}

const TechTab: React.FC<TechTabProps> = ({ icon, title, description, features, imageSide }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {imageSide === 'left' && (
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg border border-white/10 animate-fade-in bg-gradient-to-br from-bmw-dark to-bmw-dark/70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-bmw-electric/10 flex items-center justify-center animate-pulse-glow">
                {icon}
              </div>
              
              {/* Tech visualization - different for each tab */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-bmw-electric to-transparent"></div>
              
              <div className="grid grid-cols-3 gap-2 w-full">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-4 rounded-full bg-bmw-electric/20 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1 w-full">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="h-3 rounded-full bg-bmw-electric/10 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1 w-full">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-bmw-blue/20 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-bmw-grid bg-[size:20px_20px] opacity-10"></div>
        </div>
      )}
      
      <div className="space-y-6 animate-fade-in">
        <div>
          <div className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-bmw-electric/10 border border-bmw-electric/20 text-bmw-electric text-sm">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">{title} Technology</h3>
          <p className="mt-4 text-gray-300">{description}</p>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-bmw-electric/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-bmw-electric"></div>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {imageSide === 'right' && (
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg border border-white/10 animate-fade-in bg-gradient-to-br from-bmw-dark to-bmw-dark/70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-bmw-electric/10 flex items-center justify-center animate-pulse-glow">
                {icon}
              </div>
              
              {/* Tech visualization - different for each tab */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-bmw-electric to-transparent"></div>
              
              <div className="grid grid-cols-3 gap-2 w-full">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-4 rounded-full bg-bmw-electric/20 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1 w-full">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="h-3 rounded-full bg-bmw-electric/10 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1 w-full">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-bmw-blue/20 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-bmw-grid bg-[size:20px_20px] opacity-10"></div>
        </div>
      )}
    </div>
  );
};

const TechnologySection = () => {
  const technologies = [
    {
      id: "electric",
      icon: <Zap className="h-5 w-5" />,
      title: "Electric Drive",
      description: "BMW's next generation electric powertrain delivers exceptional performance with zero emissions, redefining the driving experience.",
      features: [
        "Dual motor all-wheel drive system with torque vectoring",
        "Advanced battery technology with 700km+ range",
        "Ultra-fast charging capability (10-80% in 20 minutes)",
        "Regenerative braking system with adaptive energy recovery"
      ],
      imageSide: 'left' as const
    },
    {
      id: "autonomous",
      icon: <Brain className="h-5 w-5" />,
      title: "Autonomous Driving",
      description: "Experience the future of mobility with BMW's Level 4 autonomous driving system, enabling hands-free operation in most driving scenarios.",
      features: [
        "Advanced LiDAR and sensor fusion for 360° awareness",
        "AI-powered decision making for complex traffic scenarios",
        "Personalized driving style adaptation",
        "Seamless transition between manual and autonomous modes"
      ],
      imageSide: 'right' as const
    },
    {
      id: "connected",
      icon: <Smartphone className="h-5 w-5" />,
      title: "Connected Experience",
      description: "Stay seamlessly connected with BMW's intelligent ecosystem that integrates your digital life with your driving experience.",
      features: [
        "BMW Digital Key with secure biometric authentication",
        "Cloud-based AI assistant with natural language processing",
        "Over-the-air updates for continuous improvement",
        "Digital ecosystem integration with smart home and devices"
      ],
      imageSide: 'left' as const
    },
    {
      id: "safety",
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Intelligent Safety",
      description: "Advanced safety technologies that proactively protect occupants and prevent accidents through smart predictive systems.",
      features: [
        "Predictive collision avoidance with automated evasive maneuvers",
        "Advanced driver monitoring system",
        "Adaptive restraint systems that respond to specific crash scenarios",
        "External vehicle communication for enhanced pedestrian safety"
      ],
      imageSide: 'right' as const
    },
    {
      id: "performance",
      icon: <Gauge className="h-5 w-5" />,
      title: "Performance",
      description: "BMW's commitment to dynamic driving pleasure continues with intelligent performance features that enhance every aspect of the driving experience.",
      features: [
        "Adaptive suspension with predictive road scanning",
        "Dynamic vehicle control with instantaneous torque delivery",
        "Customizable driving modes with AI optimization",
        "Aerodynamic efficiency through active body elements"
      ],
      imageSide: 'left' as const
    }
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark to-bmw-dark/90"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-electric/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-electric/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-md mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Technology</h2>
          <p className="text-gray-300">
            Discover the innovations that power BMW's vision for the future of mobility.
          </p>
        </div>
        
        <Tabs defaultValue="electric" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto mb-12 bg-transparent">
            {technologies.map((tech) => (
              <TabsTrigger 
                key={tech.id} 
                value={tech.id}
                className="data-[state=active]:bg-bmw-electric/10 data-[state=active]:text-bmw-electric data-[state=active]:border-b-2 data-[state=active]:border-bmw-electric py-4"
              >
                <div className="flex flex-col items-center space-y-2">
                  {tech.icon}
                  <span>{tech.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {technologies.map((tech) => (
            <TabsContent key={tech.id} value={tech.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <TechTab {...tech} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologySection;
