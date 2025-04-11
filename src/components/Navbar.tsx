
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bmw-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative h-8 w-12 mr-2">
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-full w-full"
            >
              <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
              <path d="M24 1C24 24 24 24 47 24" stroke="currentColor" strokeWidth="2" />
              <path d="M24 47C24 24 24 24 1 24" stroke="currentColor" strokeWidth="2" />
              <path d="M1 24C24 24 24 24 24 1" stroke="currentColor" strokeWidth="2" />
              <path d="M47 24C24 24 24 24 24 47" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter">BMW Future</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Models', 'Innovation', 'Technology', 'Design'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider hover:text-bmw-electric transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
            Experience Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-bmw-dark z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {['Models', 'Innovation', 'Technology', 'Design'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg py-2 border-b border-gray-800 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <ChevronRight size={20} />
            </a>
          ))}
          <Button className="bg-bmw-blue hover:bg-bmw-electric text-white w-full mt-4">
            Experience Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
