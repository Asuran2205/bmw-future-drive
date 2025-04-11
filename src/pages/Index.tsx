
import React from 'react';
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
        <ModelsSection />
        <TechnologySection />
        <DesignSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
