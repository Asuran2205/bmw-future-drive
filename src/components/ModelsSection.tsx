
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ModelCardProps {
  title: string;
  subtitle: string;
  stats: {
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
  delay: number;
}

const ModelCard: React.FC<ModelCardProps> = ({ title, subtitle, stats, isFeatured = false, delay }) => {
  return (
    <Card 
      className={`overflow-hidden group transition-all duration-300 ${
        isFeatured 
          ? 'border-bmw-electric/50 bg-gradient-to-b from-bmw-dark to-bmw-dark/80' 
          : 'border-white/10 hover:border-white/30 bg-bmw-dark/80'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-bmw-electric">{subtitle}</h3>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">{title}</h2>
        </div>
        
        <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
          {/* Car illustration placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-bmw-blue/20 to-bmw-electric/20 flex items-center justify-center">
            <div className="w-3/4 h-1/2 rounded-lg border border-white/10 relative perspective preserve-3d group-hover:animate-float">
              {/* Simplified car shape */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 200 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute inset-0"
              >
                <path 
                  d="M60,80 C40,80 30,70 30,60 L30,50 L50,40 L50,30 L70,20 L140,20 L160,30 L160,40 L180,50 L180,60 C180,70 170,80 150,80 L60,80 Z" 
                  stroke="#00a0e1" 
                  strokeWidth="1"
                  fill={isFeatured ? "url(#featured-gradient)" : "none"}
                />
                <defs>
                  <linearGradient id="featured-gradient" x1="0" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#1c69d4" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#00a0e1" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Headlights */}
              <div className="absolute top-1/3 left-[25%] w-3 h-2 bg-bmw-electric rounded-full blur-[2px] group-hover:animate-pulse-glow"></div>
              <div className="absolute top-1/3 right-[25%] w-3 h-2 bg-bmw-electric rounded-full blur-[2px] group-hover:animate-pulse-glow"></div>
            </div>
          </div>
          
          {/* Viewing-angle responsive grid */}
          <div className="absolute inset-0 bg-bmw-grid bg-[size:20px_20px] opacity-10"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-2">
              <p className="text-bmw-electric font-semibold">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <Button 
          variant={isFeatured ? "default" : "outline"} 
          className={`w-full group ${
            isFeatured 
              ? 'bg-bmw-electric hover:bg-bmw-blue' 
              : 'border-white/20 hover:border-white/40'
          }`}
        >
          <span>Explore</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

const ModelsSection = () => {
  const models = [
    {
      title: "Vision NEXT",
      subtitle: "Electric Concept",
      stats: [
        { label: "Range", value: "700 km" },
        { label: "Acceleration", value: "2.8s" },
        { label: "Power", value: "500 kW" }
      ],
      isFeatured: true,
      delay: 100
    },
    {
      title: "iX Flow",
      subtitle: "Autonomous SUV",
      stats: [
        { label: "Range", value: "620 km" },
        { label: "Acceleration", value: "3.5s" },
        { label: "Power", value: "450 kW" }
      ],
      delay: 200
    },
    {
      title: "i8 Evolution",
      subtitle: "Sports Hybrid",
      stats: [
        { label: "Range", value: "500 km" },
        { label: "Acceleration", value: "2.4s" },
        { label: "Power", value: "530 kW" }
      ],
      delay: 300
    }
  ];

  return (
    <section id="models" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-bmw-blue/5 filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-bmw-electric/5 filter blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-md mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Models</h2>
          <p className="text-gray-300">
            Discover BMW's next generation of vehicles that define the future of luxury, performance, and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${model.delay}ms` }}>
              <ModelCard {...model} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
