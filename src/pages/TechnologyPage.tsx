
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, ShieldCheck, Smartphone, Gauge, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BMWelctric from '@/assets/images/BMW_Electric_square.webp';
import BMW_Autonomous from '@/assets/images/autonomous_bmw.webp';
import BMW_connected from '@/assets/images/BMW_connected.webp';
import BMW_performance from '@/assets/images/performance.jpg';
import Electric_PowerTrain from '@/assets/images/Electric_PowerTrain.avif';
import Autonomous_system from '@/assets/images/autonomous_system.jpg';
import Cutting_edge from '@/assets/images/cutting_edge.png';

const TechnologyPage = () => {
  const technologies = [
    {
      id: "electric",
      title: "Electric Drive",
      description: "BMW's next generation electric powertrain delivers exceptional performance with zero emissions, redefining the driving experience.",
      image: BMWelctric,
      features: [
        "800V architecture for ultra-fast charging",
        "Next-generation energy-dense battery cells",
        "Advanced thermal management system",
        "Regenerative braking with smart energy recovery"
      ]
    },
    {
      id: "autonomy",
      title: "Autonomous Driving",
      description: "Our Level 4 autonomous driving system uses advanced AI to navigate complex environments while providing a safe and relaxing journey.",
      image: BMW_Autonomous,
      features: [
        "360° LiDAR and sensor fusion technology",
        "Self-learning neural networks for predictive driving",
        "Augmented reality navigation integration",
        "Over-the-air updates for continuous improvement"
      ]
    },
    {
      id: "connectivity",
      title: "Connected Ecosystem",
      description: "BMW's connected technology platform seamlessly integrates your digital life with your driving experience, adapting to your needs and preferences.",
      image: BMW_connected,
      features: [
        "5G connectivity with edge computing",
        "Vehicle-to-Everything (V2X) communication",
        "Digital key with biometric authentication",
        "Personalized AI assistant with natural language processing"
      ]
    },
    {
      id: "performance",
      title: "Dynamic Performance",
      description: "The perfect balance of power, precision, and efficiency, delivering the ultimate driving experience that BMW is renowned for.",
      image: BMW_performance,
      features: [
        "Adaptive air suspension with predictive comfort control",
        "Intelligent all-wheel drive with torque vectoring",
        "Active aerodynamics for improved efficiency",
        "Customizable driving modes with AI optimization"
      ]
    },
    {
      id: "intelligence",
      title: "Intelligent Interface",
      description: "A revolutionary human-machine interface that anticipates your needs and adapts to your preferences, creating an intuitive and personalized experience.",
      image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&q=80",
      features: [
        "Augmented reality heads-up display",
        "Gesture and voice control with contextual awareness",
        "Adaptive interior lighting and ambient experiences",
        "Learning algorithms that anticipate user preferences"
      ]
    }
  ];

  const techIcons = {
    "electric": <Zap className="h-5 w-5" />,
    "autonomy": <Brain className="h-5 w-5" />,
    "connectivity": <Smartphone className="h-5 w-5" />,
    "performance": <Gauge className="h-5 w-5" />,
    "intelligence": <ShieldCheck className="h-5 w-5" />
  };
  
  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <img 
              src={Cutting_edge}
              alt="BMW Technology" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bmw-dark via-bmw-dark/90 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cutting-edge
                <span className="text-gradient bmw-blue-gradient block">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Discover the innovations that power BMW's vision for the future, 
                from revolutionary electric drivetrains to advanced autonomous systems 
                and intelligent connected features.
              </p>
            </div>
          </div>
        </section>
        
        {/* Technology Tabs */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="electric" className="w-full">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Core Technologies</h2>
                  <TabsList className="flex flex-col h-auto bg-transparent space-y-2">
                    {technologies.map((tech) => (
                      <TabsTrigger 
                        key={tech.id} 
                        value={tech.id}
                        className="w-full justify-start data-[state=active]:bg-bmw-blue/20 data-[state=active]:text-bmw-electric px-4 py-3 text-left rounded-lg border border-transparent data-[state=active]:border-bmw-electric/30 transition-all"
                      >
                        <div className="flex items-center">
                          <div className="mr-3">
                            {techIcons[tech.id as keyof typeof techIcons]}
                          </div>
                          <span>{tech.title}</span>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <div className="md:w-2/3">
                  {technologies.map((tech) => (
                    <TabsContent key={tech.id} value={tech.id} className="mt-0">
                      <div className="bg-gradient-to-br from-bmw-dark/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-bold mb-4 text-bmw-electric">{tech.title}</h3>
                            <p className="text-gray-300 mb-6">{tech.description}</p>
                            
                            <ul className="space-y-3 mb-6">
                              {tech.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-bmw-electric mr-3"></div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
                              Learn More
                            </Button>
                          </div>
                          
                          <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                            <img 
                              src={tech.image} 
                              alt={tech.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* Technical Specifications */}
        <section className="py-16 bg-gradient-to-b from-bmw-dark to-bmw-dark/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Specifications</h2>
              <p className="text-gray-300">
                BMW's future vehicles push the boundaries of what's technically possible, 
                combining state-of-the-art hardware with intelligent software systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Electric Powertrain",
                  specs: [
                    { label: "Maximum Power", value: "500 kW" },
                    { label: "Battery Capacity", value: "120 kWh" },
                    { label: "Charging Speed", value: "350 kW" },
                    { label: "Range (WLTP)", value: "700 km" }
                  ],
                  image: Electric_PowerTrain
                },
                {
                  title: "Autonomous System",
                  specs: [
                    { label: "Processing Power", value: "30 TOPS" },
                    { label: "Sensor Suite", value: "12 Cameras, 5 Radar, 3 LiDAR" },
                    { label: "Self-Driving Level", value: "Level 4" },
                    { label: "Update Frequency", value: "OTA Monthly" }
                  ],
                  image: Autonomous_system
                },
                {
                  title: "Connectivity",
                  specs: [
                    { label: "Data Bandwidth", value: "5G+ / 10 Gbps" },
                    { label: "Computing Platform", value: "BMW Quantum Edge" },
                    { label: "Display Surface Area", value: "3.8 m²" },
                    { label: "V2X Range", value: "2 km" }
                  ],
                  image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80"
                }
              ].map((system, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:border-bmw-electric/30 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={system.image} 
                      alt={system.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark via-bmw-dark/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-xl font-bold">{system.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {system.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-gray-400">{spec.label}</span>
                          <span className="font-medium text-bmw-electric">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
