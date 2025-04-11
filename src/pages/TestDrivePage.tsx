
import React, { useState } from 'react';
import { Calendar, Car, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const TestDrivePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    date: '',
    location: '',
    time: ''
  });
  
  const models = [
    { id: 'vision-next', name: 'Vision NEXT' },
    { id: 'ix-flow', name: 'iX Flow' },
    { id: 'i8-evolution', name: 'i8 Evolution' },
    { id: 'i7-luxury', name: 'i7 Luxury' }
  ];
  
  const locations = [
    'Munich Showroom',
    'Berlin Experience Center',
    'Frankfurt Innovation Hub',
    'Hamburg Dealership',
    'Stuttgart Design Studio'
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    toast({
      title: "Test Drive Scheduled",
      description: `Your test drive for the ${formData.model} has been scheduled on ${formData.date} at ${formData.time}.`,
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      model: '',
      date: '',
      location: '',
      time: ''
    });
  };

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000" 
            alt="BMW Test Drive" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/70 to-bmw-dark"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule a Test Drive</h1>
              <p className="text-xl text-gray-300">
                Experience the thrill of driving BMW's future vehicles. Book a test drive at one of our locations and feel the innovation firsthand.
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Book Your Experience</h2>
                <p className="text-gray-300 mb-8">
                  Select your preferred vehicle, date, time, and location. Our team will confirm your appointment and provide additional details.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <Car className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Experience the Future</h3>
                      <p className="text-gray-400">Test drive our latest concept and production vehicles with cutting-edge technology.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Premium Locations</h3>
                      <p className="text-gray-400">Choose from our network of exclusive showrooms and experience centers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Guidance</h3>
                      <p className="text-gray-400">Our product specialists will guide you through the vehicle's features and capabilities.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-4">What to Bring</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bmw-electric mr-3 rounded-full"></div>
                      Valid driver's license
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bmw-electric mr-3 rounded-full"></div>
                      Proof of insurance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bmw-electric mr-3 rounded-full"></div>
                      Comfortable driving attire
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="bg-white/5 p-6 md:p-8 rounded-lg backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="model" className="block text-sm font-medium mb-2">Select Model</label>
                      <select
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                      >
                        <option value="">Select a vehicle</option>
                        {models.map(model => (
                          <option key={model.id} value={model.name}>{model.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">Location</label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                      >
                        <option value="">Select a location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                        />
                        <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">Preferred Time</label>
                      <div className="relative">
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                        />
                        <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-bmw-blue hover:bg-bmw-electric text-white py-4"
                      >
                        Schedule Test Drive
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-bmw-dark to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Test Drive Experiences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex M.",
                  model: "Vision NEXT",
                  quote: "I was blown away by the autonomous features and the futuristic interior. The driving experience was unlike anything I've ever felt before.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
                },
                {
                  name: "Sarah L.",
                  model: "iX Flow",
                  quote: "The color-changing exterior is simply magical. Everyone stopped to look as I drove by. The performance and comfort were exceptional as well.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
                },
                {
                  name: "Michael T.",
                  model: "i8 Evolution",
                  quote: "The acceleration is breathtaking, and the hybrid system transitions seamlessly. This car represents the perfect balance of performance and efficiency.",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-bmw-electric text-sm">{testimonial.model}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
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

export default TestDrivePage;
