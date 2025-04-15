
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BMW_Electric from '@/assets/images/bmw_electric.jpg'
import BMW_Luxury from '@/assets/images/BMW_LUXURY.jpeg'
import BMW_Vision from '@/assets/images/vision_next.jpg'

const ExploreModelsPage = () => {
  const modelCategories = [
    {
      id: 'electric',
      name: 'Electric',
      description: 'Sustainable mobility with zero emissions',
      image: BMW_Electric,
      models: [
        { id: 'vision-next', name: 'Vision NEXT', type: 'Concept' },
        { id: 'ix-flow', name: 'iX Flow', type: 'SUV' }
      ]
    },
    {
      id: 'hybrid',
      name: 'Hybrid',
      description: 'The perfect balance of efficiency and performance',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200',
      models: [
        { id: 'i8-evolution', name: 'i8 Evolution', type: 'Sports' }
      ]
    },
    {
      id: 'luxury',
      name: 'Luxury',
      description: 'Uncompromising comfort and sophistication',
      image: BMW_Luxury,
      models: [
        { id: 'i7-luxury', name: 'i7 Luxury', type: 'Sedan' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=2000" 
            alt="BMW Models" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/80 to-bmw-dark"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore All Models</h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Discover BMW's complete lineup of visionary vehicles, from concept cars to production models, all representing the future of premium mobility.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm group">
                <Filter className="mr-2 h-4 w-4" />
                Filter Models
              </Button>
              <Button variant="outline" className="border-white/20 hover:border-white/50 group">
                <Sliders className="mr-2 h-4 w-4" />
                Compare Models
              </Button>
            </div>
          </div>
        </section>
        
        {/* Model Categories */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Browse by Category</h2>
              <p className="text-gray-300">
                Explore our different model categories to find the perfect BMW for your lifestyle and preferences.
              </p>
            </div>
            
            <div className="space-y-32">
              {modelCategories.map((category, index) => (
                <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl font-bold mb-4">{category.name} Models</h3>
                    <p className="text-gray-300 mb-8">{category.description}</p>
                    
                    <div className="space-y-6 mb-8">
                      {category.models.map((model) => (
                        <Link 
                          key={model.id} 
                          to={`/models/${model.id}`}
                          className="block bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-lg">{model.name}</h4>
                              <p className="text-sm text-gray-400">{model.type}</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-bmw-electric" />
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
                      View All {category.name} Models
                    </Button>
                  </div>
                  
                  <div className={`relative rounded-lg overflow-hidden aspect-video order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Highlighted Model */}
        <section className="py-20 bg-gradient-to-r from-bmw-dark to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#00A0E1" d="M44.7,-76.4C59.3,-69.2,73.4,-59.8,80.6,-46.6C87.8,-33.3,88.2,-16.7,85.8,-1.4C83.4,14,78.3,28,69.8,39.4C61.4,50.8,49.6,59.6,36.9,65.9C24.2,72.2,10.6,76,-2.7,80C-16,84,-32,88.2,-44.7,83.5C-57.5,78.8,-67,65.3,-72.3,50.9C-77.6,36.5,-78.8,21.2,-79.7,5.3C-80.5,-10.7,-81,-27.3,-74.3,-39.5C-67.5,-51.7,-53.6,-59.5,-39.8,-67C-26,-74.6,-12.3,-81.9,1.7,-84.6C15.8,-87.3,30.1,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-bmw-electric uppercase tracking-wider text-sm">Featured Model</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Vision NEXT</h2>
                <p className="text-gray-300 mb-8">
                  Experience the pinnacle of BMW's innovative vision for the future, combining sustainable materials, 
                  autonomous driving technology, and breathtaking design in one revolutionary concept vehicle.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-bmw-electric font-semibold text-xl">700 km</p>
                    <p className="text-gray-400 text-sm">Range</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-bmw-electric font-semibold text-xl">2.8s</p>
                    <p className="text-gray-400 text-sm">0-100 km/h</p>
                  </div>
                </div>
                
                <Link to="/models/vision-next">
                  <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                    Discover Vision NEXT
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src= {BMW_Vision}
                    alt="Vision NEXT" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* <div className="absolute -bottom-10 -right-10 md:bottom-10 md:right-10 bg-bmw-blue/90 backdrop-blur-sm p-4 md:p-6 rounded-lg max-w-xs">
                  <p className="text-sm md:text-base">
                    "The Vision NEXT represents a paradigm shift in how we think about automotive design, 
                    sustainability, and the driving experience of the future."
                  </p>
                  <p className="text-bmw-electric font-semibold mt-4">BMW Design Director</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExploreModelsPage;
