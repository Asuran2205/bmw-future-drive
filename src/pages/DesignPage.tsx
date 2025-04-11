
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DesignPrincipleProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const DesignPrinciple: React.FC<DesignPrincipleProps> = ({ number, title, description, image }) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark via-bmw-dark/70 to-transparent"></div>
      </div>
      
      <div className="absolute top-6 left-6 text-4xl font-bold text-bmw-electric opacity-80">
        {number}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const DesignPage = () => {
  const designPrinciples = [
    {
      number: "01",
      title: "Bold Precision",
      description: "Minimalist aesthetics with intentional details that highlight BMW's precision engineering and technological focus.",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Sustainable Luxury",
      description: "Using recycled and innovative sustainable materials without compromising on the premium feel and quality BMW is known for.",
      image: "https://images.unsplash.com/photo-1552661397-4233881ea8c7?auto=format&fit=crop&q=80"
    },
    {
      number: "03",
      title: "Adaptive Spaces",
      description: "Interiors that transform to different use cases, from focused driving to relaxation and productivity in autonomous mode.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Digital-Physical Fusion",
      description: "Seamless integration of digital interfaces with physical controls, creating an intuitive and immersive user experience.",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
    },
    {
      number: "05",
      title: "Emotional Dynamics",
      description: "Design that evokes emotion through dynamic proportions and distinctive silhouettes that are unmistakably BMW.",
      image: "https://images.unsplash.com/photo-1602188256777-73064187f068?auto=format&fit=crop&q=80"
    },
    {
      number: "06",
      title: "Intelligent Simplicity",
      description: "Clean, uncluttered design that highlights essential elements and creates a sense of calm and clarity.",
      image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&q=80"
    }
  ];

  const designShowcase = [
    {
      title: "Exterior Innovation",
      images: [
        "https://images.unsplash.com/photo-1549399542-7e738e797201?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555652736-e92021d28a10?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "Interior Evolution",
      images: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1536364127590-1594e3161294?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581788604067-4f91333c256f?auto=format&fit=crop&q=80"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Design That
                <span className="text-gradient bmw-blue-gradient block">Defines the Future</span>
              </h1>
              <p className="text-xl text-gray-300">
                BMW's approach to design balances innovation with our heritage,
                creating vehicles that are both futuristic and unmistakably BMW.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-gray-300 mb-6">
                  Our design philosophy is guided by a commitment to create vehicles that are not only
                  visually striking but also functional, sustainable, and emotionally engaging.
                  We believe that exceptional design must serve both aesthetic and practical purposes,
                  enhancing the driving experience and reflecting our vision for the future of mobility.
                </p>
                <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
                  Meet Our Design Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1611566026373-c6c8da0945ba?auto=format&fit=crop&q=80" 
                  alt="BMW Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bmw-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-sm text-bmw-electric uppercase tracking-wider">BMW Design Works</span>
                  <h3 className="text-xl font-bold">Where Vision Meets Reality</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Principles */}
        <section className="py-20 relative bg-gradient-to-b from-bmw-dark to-bmw-dark/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Principles</h2>
              <p className="text-gray-300">
                Our approach to design is guided by six core principles that inform every aspect of 
                our vehicles, from exterior silhouettes to interior details.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designPrinciples.map((principle, index) => (
                <DesignPrinciple 
                  key={index}
                  number={principle.number}
                  title={principle.title}
                  description={principle.description}
                  image={principle.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Design Showcase */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Design Showcase</h2>
            
            <div className="space-y-24">
              {designShowcase.map((showcase, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-8 text-bmw-electric">{showcase.title}</h3>
                  
                  <div className="relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {showcase.images.map((image, i) => (
                          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                              <div className="overflow-hidden rounded-xl aspect-[4/3] group">
                                <img 
                                  src={image} 
                                  alt={`${showcase.title} Design ${i+1}`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="mt-8 flex justify-center gap-4">
                        <CarouselPrevious className="relative static transform-none" />
                        <CarouselNext className="relative static transform-none" />
                      </div>
                    </Carousel>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Design Philosophy */}
        <section className="py-24 bg-gradient-to-b from-bmw-dark to-bmw-dark/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80" 
                  alt="BMW Design Philosophy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bmw-dark/90 to-transparent"></div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Philosophy</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    At BMW, we believe that design is the visual expression of our brand's values and vision. 
                    Our design philosophy focuses on creating vehicles that provoke emotion, reflect innovation, 
                    and embody our commitment to sustainability.
                  </p>
                  <p>
                    We are guided by a belief that the best designs find perfect harmony between form and function, 
                    creating beautiful objects that also excel at their intended purpose. This approach has defined 
                    BMW's design language for decades and continues to evolve as we move into the future of mobility.
                  </p>
                  <p>
                    Our design teams work at the intersection of tradition and innovation, respecting our heritage 
                    while constantly pushing boundaries to define what a BMW of the future will look like.
                  </p>
                </div>
                
                <Button variant="outline" className="mt-8 border-white/20 hover:border-bmw-electric group">
                  Explore Design Studies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DesignPage;
