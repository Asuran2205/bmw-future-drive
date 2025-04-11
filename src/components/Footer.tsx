
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bmw-dark border-t border-white/10 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
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
            </Link>
            <p className="text-gray-400 mb-6">
              Experience tomorrow's mobility today with BMW's vision for the future of driving.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bmw-electric transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-electric transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-electric transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-electric transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Models", href: "/models" },
                { label: "Explore All Models", href: "/explore-models" },
                { label: "Design Gallery", href: "/design-gallery" },
                { label: "Innovation", href: "/innovation" },
                { label: "Technology", href: "/technology" },
                { label: "Design", href: "/design" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-bmw-electric transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Test Drive", href: "/test-drive" },
                { label: "Financing", href: "/financing" },
                { label: "Configurator", href: "#" },
                { label: "Find a Dealer", href: "#" },
                { label: "Support", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-bmw-electric transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-bmw-electric transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-bmw-electric shrink-0 mt-1" />
                <span className="text-gray-400">
                  BMW Headquarters<br />
                  Petuelring 130<br />
                  80809 Munich, Germany
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-bmw-electric shrink-0" />
                <a href="tel:+1-800-BMW-CARS" className="text-gray-400 hover:text-bmw-electric transition-colors">
                  +1-800-BMW-CARS
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-bmw-electric shrink-0" />
                <a href="mailto:info@bmwfuture.com" className="text-gray-400 hover:text-bmw-electric transition-colors">
                  info@bmwfuture.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BMW Future. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
