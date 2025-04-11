
import React from 'react';
import { ArrowRight, Lightbulb, Cpu, Leaf, TestTube, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface InnovationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ title, description, icon, image, index }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-gradient-to-b from-bmw-dark/80 to-black/40 border border-white/10 hover:border-bmw-electric/50 transition-all duration-300">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark via-bmw-dark/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-bmw-blue/20 rounded-lg text-bmw-electric mr-4">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <Button variant="outline" className="border-white/20 hover:border-bmw-electric hover:bg-bmw-electric/10 group">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-sm">
        {index < 9 ? `0${index + 1}` : index + 1}
      </div>
    </div>
  );
};

const InnovationPage = () => {
  const innovations = [
    {
      title: "Quantum Computing Integration",
      description: "BMW is pioneering the use of quantum computing to optimize manufacturing processes, route planning, and material science for future vehicle development.",
      icon: <Cpu className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
    },
    {
      title: "Solid-State Battery Technology",
      description: "Our next generation of electric vehicles will feature solid-state batteries with higher energy density, faster charging, and extended lifecycle.",
      icon: <Lightbulb className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
    },
    {
      title: "Carbon-Negative Materials",
      description: "BMW is developing revolutionary materials that actively capture and store carbon during their lifecycle, helping to reverse climate impact.",
      icon: <Leaf className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
    },
    {
      title: "Neural Interface Controls",
      description: "Exploring next-generation vehicle interaction through neural interfaces that can interpret driver intent through brainwave patterns.",
      icon: <TestTube className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1626426132933-4fae28c3cc61?auto=format&fit=crop&q=80"
    },
    {
      title: "Swarm Intelligence Navigation",
      description: "Our connected vehicles will use collective intelligence to optimize traffic flow, identify road hazards, and enhance autonomous driving capabilities.",
      icon: <Cloud className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Dynamic E-Ink Exteriors",
      description: "Color-changing exterior surfaces that adapt to driver preference, environmental conditions, or vehicle status through advanced e-ink technology.",
      icon: <Cpu className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1588675800148-2561265c4f4d?auto=format&fit=crop&q=80" 
              alt="BMW Innovation" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bmw-dark via-bmw-dark/90 to-bmw-dark/80"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pioneering the
                <span className="text-gradient bmw-blue-gradient block"> Future of Mobility</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                BMW's innovation labs are redefining what's possible in automotive technology, 
                with groundbreaking research that spans artificial intelligence, 
                sustainable materials, and human-machine interfaces.
              </p>
              <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                Explore Our Research
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Innovations Grid */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Breakthrough Innovations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <InnovationCard 
                  key={index}
                  title={innovation.title}
                  description={innovation.description}
                  icon={innovation.icon}
                  image={innovation.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Innovation Process */}
        <section className="py-24 bg-gradient-to-b from-bmw-dark to-bmw-dark/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Innovation Process</h2>
              <p className="text-gray-300">
                From concept to road-ready technology, our innovation process combines creative thinking,
                rigorous testing, and continuous refinement to create the future of mobility.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-bmw-blue/20 transform -translate-x-1/2"></div>
              
              {[
                {
                  title: "Conceptualization",
                  description: "Ideas emerge from our global network of designers, engineers, and futurists who envision what mobility could become.",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                },
                {
                  title: "Research & Development",
                  description: "Promising concepts undergo rigorous research, with specialized teams exploring technological feasibility and innovation potential.",
                  image: "https://images.unsplash.com/photo-1581093458791-9d19188fcd9f?auto=format&fit=crop&q=80"
                },
                {
                  title: "Prototyping",
                  description: "Digital and physical prototypes are built to test concepts in increasingly realistic scenarios and environments.",
                  image: "https://images.unsplash.com/photo-1581093198320-4dd40cdc3e9c?auto=format&fit=crop&q=80"
                },
                {
                  title: "Refinement",
                  description: "Technologies are refined through iterative testing and feedback from engineers, test drivers, and select customers.",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
                }
              ].map((step, index) => (
                <div key={index} className="relative mb-16 md:mb-24">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}>
                    <div className={index % 2 === 0 ? 'md:text-right' : 'md:order-2'}>
                      <h3 className="text-2xl font-bold mb-4 text-bmw-electric">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                    
                    <div className={`relative h-64 rounded-lg overflow-hidden ${
                      index % 2 === 0 ? 'md:order-2' : ''
                    }`}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/70 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bmw-blue text-white items-center justify-center font-bold text-lg border-4 border-bmw-dark">
                    {index + 1}
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

export default InnovationPage;
