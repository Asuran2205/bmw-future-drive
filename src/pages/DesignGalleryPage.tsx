
import React, { useState } from 'react';
import { Lightbulb, Paintbrush, Maximize2, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DesignGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Designs' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'concept', label: 'Concept Art' },
    { id: 'details', label: 'Design Details' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      title: 'Vision NEXT Exterior',
      description: 'Revolutionary aerodynamic design with flowing lines and dynamic proportions.',
      category: 'exterior',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Illuminated Kidney Grille',
      description: 'The iconic BMW kidney grille reimagined with integrated LED illumination.',
      category: 'details',
      image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Sustainable Interior Concept',
      description: 'Luxurious cabin design using recycled and sustainable materials.',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1544729694-14d82585e25f?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'i8 Evolution Doors',
      description: 'Iconic butterfly doors designed for both aesthetics and functionality.',
      category: 'details',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Minimalist Dashboard Design',
      description: 'Clean, driver-focused cockpit with intuitive controls and displays.',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1543857182-68106299b6b2?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Vision Urban Mobility',
      description: 'Future concept exploring transportation in high-density urban environments.',
      category: 'concept',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Aerodynamic Wheel Design',
      description: 'Innovative wheel architecture that reduces drag while maximizing cooling for brakes.',
      category: 'details',
      image: 'https://images.unsplash.com/photo-1595352401217-8e2e6a79cbb3?auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'Luxury Lounge Concept',
      description: 'Executive seating concept for autonomous luxury vehicles.',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1562856753-067a2de293de?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'iX Flow Exterior',
      description: 'The revolutionary color-changing exterior using e-ink technology.',
      category: 'exterior',
      image: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80'
    },
    {
      id: 10,
      title: 'Laser Light Technology',
      description: 'Advanced headlight system that extends visibility while reducing energy consumption.',
      category: 'details',
      image: 'https://images.unsplash.com/photo-1577326591123-2f90c6b58ff7?auto=format&fit=crop&q=80'
    },
    {
      id: 11,
      title: 'Autonomous Concept Interior',
      description: 'Transformable interior space that adapts to different usage scenarios.',
      category: 'concept',
      image: 'https://images.unsplash.com/photo-1582850135613-64011a0c3496?auto=format&fit=crop&q=80'
    },
    {
      id: 12,
      title: 'i7 Luxury Profile',
      description: 'Elegant silhouette that combines classic proportions with modern detailing.',
      category: 'exterior',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600705722908-bbc52fb66af2?auto=format&fit=crop&q=80&w=2000" 
            alt="BMW Design Gallery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/80 to-bmw-dark"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Design Gallery</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore the innovative design language that defines BMW's vision for the future. From concept sketches to production models, discover the artistry behind our vehicles.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Paintbrush className="text-bmw-electric mr-2 h-5 w-5" />
                  <span>Distinctive Aesthetics</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="text-bmw-electric mr-2 h-5 w-5" />
                  <span>Innovative Concepts</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">Browse Designs</h2>
                
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <Button 
                      key={filter.id}
                      variant={activeFilter === filter.id ? "default" : "outline"} 
                      className={
                        activeFilter === filter.id 
                          ? "bg-bmw-blue hover:bg-bmw-blue/90" 
                          : "border-white/20 hover:border-white/40"
                      }
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 max-w-3xl">
                Explore {activeFilter === 'all' ? 'all design elements' : `our ${activeFilter} designs`} showcasing BMW's commitment to innovative aesthetics, functionality, and future-forward thinking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button 
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setLightboxImage(item.image)}
                    >
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-xs uppercase text-bmw-electric bg-bmw-electric/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-400">No designs found in this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Design Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-bmw-dark to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Philosophy</h2>
                <p className="text-gray-300 mb-6">
                  BMW's design language is built on a foundation of dynamic elegance, precision engineering, and forward-thinking innovation. Each line, surface, and detail serves both functional and aesthetic purposes.
                </p>
                <p className="text-gray-300 mb-8">
                  As we move into the era of electrification and autonomous driving, our design approach evolves to embrace new possibilities while honoring our heritage. We believe that the future of mobility should be not only sustainable and intelligent but also emotionally engaging and beautiful.
                </p>
                <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
                  Learn More About Our Design Process
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607662551239-fa8fb2f61c95?auto=format&fit=crop&q=80&w=1200" 
                  alt="BMW Design Philosophy" 
                  className="rounded-lg"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-bmw-electric"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-bmw-electric"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm"
            onClick={() => {
              const currentIndex = galleryItems.findIndex(item => item.image === lightboxImage);
              const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
              setLightboxImage(galleryItems[prevIndex].image);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <img 
            src={lightboxImage} 
            alt="Enlarged design" 
            className="max-w-full max-h-[90vh] object-contain"
          />
          
          <button 
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm"
            onClick={() => {
              const currentIndex = galleryItems.findIndex(item => item.image === lightboxImage);
              const nextIndex = (currentIndex + 1) % galleryItems.length;
              setLightboxImage(galleryItems[nextIndex].image);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default DesignGalleryPage;
