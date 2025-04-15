
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModelsSection from '@/components/ModelsSection';
import TechnologySection from '@/components/TechnologySection';
import DesignSection from '@/components/DesignSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Models",
                description: "Explore BMW's next generation of vehicles that define the future of luxury, performance, and sustainability.",
                link: "/models",
                image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=300&h=200"
              },
              {
                title: "Innovation",
                description: "Discover the groundbreaking innovations that are shaping the future of mobility and driving experience.",
                link: "/innovation",
                 image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200"
              },
              {
                title: "Technology",
                description: "Learn about the cutting-edge technologies that power BMW's vision for a connected, electric, and autonomous future.",
                link: "/technology",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300&h=200"
              },
              {
                title: "Design",
                description: "Experience BMW's design philosophy that balances innovation with heritage, creating vehicles that are unmistakably BMW.",
                link: "/design",
               image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=300&h=200"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-bmw-electric/30 transition-all group">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark via-bmw-dark/70 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <Link to={item.link}>
                    <Button variant="link" className="text-bmw-electric p-0 h-auto group">
                      <span>Explore {item.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ModelsSection />
        <TechnologySection />
        <DesignSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
