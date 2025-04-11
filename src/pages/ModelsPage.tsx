
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ModelsPage = () => {
  const models = [
    {
      id: 'vision-next',
      name: 'Vision NEXT',
      category: 'Electric Concept',
      description: 'A revolutionary concept car that showcases BMW\'s vision for the future of mobility. Featuring autonomous driving, sustainable materials, and cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Range', value: '700 km' },
        { label: 'Acceleration', value: '2.8s' },
        { label: 'Power', value: '500 kW' },
        { label: 'Top Speed', value: '250 km/h' }
      ]
    },
    {
      id: 'ix-flow',
      name: 'iX Flow',
      category: 'Autonomous SUV',
      description: 'The future of SUVs with color-changing e-ink exterior technology, fully autonomous driving capabilities, and a spacious interior designed for comfort and entertainment.',
      image: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Range', value: '620 km' },
        { label: 'Acceleration', value: '3.5s' },
        { label: 'Power', value: '450 kW' },
        { label: 'Top Speed', value: '230 km/h' }
      ]
    },
    {
      id: 'i8-evolution',
      name: 'i8 Evolution',
      category: 'Sports Hybrid',
      description: 'The next generation of BMW\'s iconic i8, featuring enhanced performance, extended electric range, and a stunning new design that pushes the boundaries of automotive aesthetics.',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Range', value: '500 km' },
        { label: 'Acceleration', value: '2.4s' },
        { label: 'Power', value: '530 kW' },
        { label: 'Top Speed', value: '310 km/h' }
      ]
    },
    {
      id: 'i7-luxury',
      name: 'i7 Luxury',
      category: 'Executive Sedan',
      description: 'The pinnacle of luxury electric mobility, offering unparalleled comfort, advanced autonomous features, and a serene driving experience with zero emissions.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Range', value: '750 km' },
        { label: 'Acceleration', value: '3.7s' },
        { label: 'Power', value: '470 kW' },
        { label: 'Top Speed', value: '240 km/h' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">The Future of BMW</h1>
              <p className="text-xl text-gray-300">
                Explore our visionary concept vehicles and upcoming models that represent the next evolution of BMW's commitment to innovation, performance, and sustainability.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/explore-models">
                  <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
                    Explore All Models
                  </Button>
                </Link>
                <Link to="/design-gallery">
                  <Button variant="outline" className="border-white/20 hover:border-white/40">
                    Design Gallery
                  </Button>
                </Link>
              </div>
            </div>

            {models.map((model, index) => (
              <div key={model.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-bmw-electric uppercase tracking-wider text-sm">{model.category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{model.name}</h2>
                  <p className="text-gray-300 mb-6">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {model.specs.map((spec, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                        <p className="text-bmw-electric font-semibold text-xl">{spec.value}</p>
                        <p className="text-gray-400 text-sm">{spec.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/models/${model.id}`}>
                    <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                      Discover {model.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className={`relative h-80 md:h-96 rounded-lg overflow-hidden order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ModelsPage;
