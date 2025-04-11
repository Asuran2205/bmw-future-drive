
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Fuel, Gauge, BatteryCharging, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ModelDetailPage = () => {
  const { modelId } = useParams();

  // Model data - in a real app this would come from an API
  const models = {
    'vision-next': {
      name: 'Vision NEXT',
      category: 'Electric Concept',
      heroImage: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=2000',
      galleryImages: [
        'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1606664913048-da954e13c6d4?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'A revolutionary concept car that showcases BMW\'s vision for the future of mobility. Featuring autonomous driving, sustainable materials, and cutting-edge technology.',
      longDescription: 'The BMW Vision NEXT represents a paradigm shift in automotive design and technology. This visionary concept vehicle seamlessly integrates sustainable materials, advanced AI systems, and a revolutionary electric drivetrain to deliver an unparalleled driving experience. The Vision NEXT is not just a car; it\'s a glimpse into BMW\'s commitment to shaping the future of mobility with innovation, performance, and environmental responsibility at its core.',
      specs: [
        { label: 'Range', value: '700 km', icon: <BatteryCharging className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Acceleration', value: '2.8s', icon: <Timer className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Power', value: '500 kW', icon: <Fuel className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Top Speed', value: '250 km/h', icon: <Gauge className="h-5 w-5 text-bmw-electric" /> }
      ],
      features: [
        'Autonomous Driving Level 5',
        'Climate-Neutral Manufacturing',
        'Recycled Carbon Fiber Body',
        'Holographic Windshield Display',
        'AI Personal Assistant',
        'Wireless Charging Capability'
      ]
    },
    'ix-flow': {
      name: 'iX Flow',
      category: 'Autonomous SUV',
      heroImage: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&q=80&w=2000',
      galleryImages: [
        'https://images.unsplash.com/photo-1549275301-c9d60945c7aa?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1556800572-01d9e1d28619?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'The future of SUVs with color-changing e-ink exterior technology, fully autonomous driving capabilities, and a spacious interior designed for comfort and entertainment.',
      longDescription: 'The BMW iX Flow redefines what an SUV can be with its groundbreaking e-ink exterior technology that allows the vehicle to change colors at the press of a button. This revolutionary feature is not just about aesthetics—it provides real-world benefits like temperature regulation by reflecting or absorbing heat based on the selected color. Inside, the iX Flow offers a spacious lounge-like environment where passengers can relax while the vehicle handles the driving, thanks to its advanced autonomous capabilities.',
      specs: [
        { label: 'Range', value: '620 km', icon: <BatteryCharging className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Acceleration', value: '3.5s', icon: <Timer className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Power', value: '450 kW', icon: <Fuel className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Top Speed', value: '230 km/h', icon: <Gauge className="h-5 w-5 text-bmw-electric" /> }
      ],
      features: [
        'E-Ink Color-Changing Exterior',
        'Sustainable Interior Materials',
        'Gesture Control System',
        '8K Entertainment Screens',
        'Autonomous Driving Level 4',
        'Solar Panel Roof Integration'
      ]
    },
    'i8-evolution': {
      name: 'i8 Evolution',
      category: 'Sports Hybrid',
      heroImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000',
      galleryImages: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1200', 
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'The next generation of BMW\'s iconic i8, featuring enhanced performance, extended electric range, and a stunning new design that pushes the boundaries of automotive aesthetics.',
      longDescription: 'Building on the revolutionary foundation of its predecessor, the BMW i8 Evolution takes the concept of a hybrid sports car to new heights. With a completely redesigned powertrain that delivers more power and efficiency, the i8 Evolution can switch seamlessly between pure electric mode for city driving and hybrid mode for exhilarating performance on open roads. The dramatically sculpted exterior isn\'t just visually stunning—it\'s functional, with every curve and angle designed to optimize aerodynamics for improved efficiency and performance.',
      specs: [
        { label: 'Range', value: '500 km', icon: <BatteryCharging className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Acceleration', value: '2.4s', icon: <Timer className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Power', value: '530 kW', icon: <Fuel className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Top Speed', value: '310 km/h', icon: <Gauge className="h-5 w-5 text-bmw-electric" /> }
      ],
      features: [
        'Regenerative Braking System',
        'Carbon Fiber Reinforced Plastic Body',
        'Butterfly Doors',
        'Active Aerodynamics',
        'Laser Headlights',
        'Hybrid All-Wheel Drive'
      ]
    },
    'i7-luxury': {
      name: 'i7 Luxury',
      category: 'Executive Sedan',
      heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000',
      galleryImages: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1617814076668-11c2c6305345?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'The pinnacle of luxury electric mobility, offering unparalleled comfort, advanced autonomous features, and a serene driving experience with zero emissions.',
      longDescription: 'The BMW i7 Luxury represents the pinnacle of sustainable premium mobility. This all-electric flagship sedan combines the opulence of a traditional luxury vehicle with the environmental responsibility of zero-emission driving. Inside, the i7 Luxury offers a sanctuary of comfort, with executive seating that features massage functions, temperature control, and adjustable positioning. The integrated digital experience is powered by the latest BMW Operating System, which learns driver preferences and adjusts the vehicle settings accordingly. With extended electric range and fast-charging capability, the i7 Luxury ensures that sustainable driving never compromises on convenience.',
      specs: [
        { label: 'Range', value: '750 km', icon: <BatteryCharging className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Acceleration', value: '3.7s', icon: <Timer className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Power', value: '470 kW', icon: <Fuel className="h-5 w-5 text-bmw-electric" /> },
        { label: 'Top Speed', value: '240 km/h', icon: <Gauge className="h-5 w-5 text-bmw-electric" /> }
      ],
      features: [
        'Executive Lounge Seating',
        'Theater Screen Entertainment System',
        'Crystal Interior Elements',
        'Merino Leather Upholstery',
        'Panoramic Sky Lounge LED Roof',
        'Bowers & Wilkins Diamond Surround Sound'
      ]
    }
  };
  
  const model = models[modelId as keyof typeof models];
  
  if (!model) {
    return (
      <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
        <Navbar />
        <main className="pt-24 flex-grow container mx-auto px-4 md:px-6">
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold mb-6">Model Not Found</h1>
            <p className="mb-8">The requested model could not be found.</p>
            <Link to="/models">
              <Button className="bg-bmw-blue hover:bg-bmw-electric">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Models
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <img 
          src={model.heroImage} 
          alt={model.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/70 via-bmw-dark/30 to-bmw-dark"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-end pb-20">
          <Link to="/models" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Models
          </Link>
          
          <span className="text-bmw-electric uppercase tracking-wider text-sm md:text-base">{model.category}</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-6">{model.name}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">{model.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-bmw-blue hover:bg-bmw-electric text-white group">
              Configure Your {model.name}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:border-white/50">
              Book a Test Drive
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
          <span className="text-white/70 text-xs mt-2">SCROLL</span>
        </div>
      </div>
      
      {/* Specs Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Specifications</h2>
            <p className="text-gray-300">{model.longDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {model.specs.map((spec, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  {spec.icon}
                  <span className="ml-2 text-gray-400">{spec.label}</span>
                </div>
                <p className="text-bmw-electric font-semibold text-3xl">{spec.value}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {model.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-bmw-electric mr-3"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark to-transparent z-10"></div>
              <img 
                src={model.galleryImages[0]} 
                alt={`${model.name} feature`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-bmw-dark to-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {model.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={image} 
                  alt={`${model.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the {model.name}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Schedule a virtual or in-person experience to discover how the {model.name} is shaping the future of mobility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-bmw-blue hover:bg-bmw-electric text-white">
              Book a Test Drive
            </Button>
            <Button variant="outline" className="border-white/20 hover:border-white/50">
              Virtual Showroom Tour
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ModelDetailPage;
