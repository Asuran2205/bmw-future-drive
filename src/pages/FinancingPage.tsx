
import React from 'react';
import { Calculator, Clock, Percent, CreditCard, ChevronDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FinancingPage = () => {
  const financingOptions = [
    {
      title: "Standard Financing",
      description: "Traditional financing with competitive interest rates and flexible terms.",
      features: [
        "Fixed monthly payments",
        "Terms from 24 to 84 months",
        "Competitive interest rates",
        "No mileage restrictions",
        "Vehicle ownership at end of term"
      ],
      recommended: false
    },
    {
      title: "BMW Select Financing",
      description: "Our most popular option with lower monthly payments and flexible end-of-term options.",
      features: [
        "Lower monthly payments",
        "Flexible end-of-term options",
        "Guaranteed future value",
        "Terms from 24 to 48 months",
        "Option to purchase, trade, or return"
      ],
      recommended: true
    },
    {
      title: "BMW All-Inclusive Lease",
      description: "Drive the latest BMW with maintenance and insurance included in one monthly payment.",
      features: [
        "All maintenance included",
        "Insurance coverage included",
        "Drive a new BMW every 24-36 months",
        "No down payment required",
        "Roadside assistance included"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80&w=2000" 
            alt="BMW Financing" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bmw-dark/70 to-bmw-dark"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Financing Options</h1>
              <p className="text-xl text-gray-300">
                Flexible solutions to help you drive the BMW of your dreams. Explore our financing and leasing options tailored to your needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Financing Options Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Path</h2>
              <p className="text-gray-300">
                We offer several ways to finance your next BMW, each designed to provide flexibility, value, and peace of mind. Select the option that best fits your lifestyle and preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {financingOptions.map((option, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden ${
                    option.recommended 
                      ? 'border-2 border-bmw-electric relative' 
                      : 'border border-white/10'
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-bmw-electric text-center text-sm py-1">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className={`p-6 ${option.recommended ? 'pt-10' : ''}`}>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-400 mb-6">{option.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-bmw-electric shrink-0 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={
                        option.recommended 
                          ? "w-full bg-bmw-electric hover:bg-bmw-blue" 
                          : "w-full bg-white/10 hover:bg-white/20"
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-20 bg-gradient-to-r from-bmw-dark to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Payment Calculator</h2>
                <p className="text-gray-300 mb-8">
                  Use our calculator to estimate your monthly payments based on vehicle price, down payment, interest rate, and term length.
                </p>
                
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Vehicle Price</label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white pl-8"
                          placeholder="80,000"
                          defaultValue="80000"
                        />
                        <span className="absolute left-3 top-3 text-gray-400">$</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Down Payment</label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white pl-8"
                          placeholder="10,000"
                          defaultValue="10000"
                        />
                        <span className="absolute left-3 top-3 text-gray-400">$</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Interest Rate</label>
                        <div className="relative">
                          <input
                            type="number"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white pr-8"
                            placeholder="3.9"
                            defaultValue="3.9"
                            step="0.1"
                          />
                          <span className="absolute right-3 top-3 text-gray-400">%</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Term (Months)</label>
                        <select
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-bmw-electric text-white"
                          defaultValue="48"
                        >
                          <option value="24">24 Months</option>
                          <option value="36">36 Months</option>
                          <option value="48">48 Months</option>
                          <option value="60">60 Months</option>
                          <option value="72">72 Months</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-bmw-blue hover:bg-bmw-electric">
                      Calculate Payment
                    </Button>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-400">Estimated Monthly Payment</p>
                    <p className="text-4xl font-bold text-bmw-electric">$1,542</p>
                    <p className="text-xs text-gray-500 mt-2">This is an estimate. Actual payment may vary based on credit approval and additional factors.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <Percent className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Special Offers</h3>
                      <p className="text-gray-400 mb-4">Take advantage of limited-time financing offers on select models.</p>
                      <Button variant="outline" className="border-white/20 hover:border-white/40 text-sm">
                        View Current Offers
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pre-Approval</h3>
                      <p className="text-gray-400 mb-4">Get pre-approved for financing to streamline your purchase experience.</p>
                      <Button variant="outline" className="border-white/20 hover:border-white/40 text-sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bmw-blue/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-bmw-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Lease End Options</h3>
                      <p className="text-gray-400 mb-4">Learn about your options as your current BMW lease approaches its end.</p>
                      <Button variant="outline" className="border-white/20 hover:border-white/40 text-sm">
                        Explore Options
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-bmw-grid bg-[size:30px_30px] opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What's the difference between leasing and financing?",
                  answer: "Financing means you're paying to own the vehicle over time, while leasing is essentially a long-term rental with lower monthly payments. With financing, you build equity and own the vehicle at the end of the term. With leasing, you return the vehicle at the end of the term or have the option to purchase it."
                },
                {
                  question: "Can I customize my BMW if I lease it?",
                  answer: "Yes, you can customize your leased BMW, but it's important to remember that any modifications might affect the vehicle's value at lease-end. Minor, removable modifications are generally acceptable, but significant alterations may require restoration before returning the vehicle or could result in additional fees."
                },
                {
                  question: "What happens at the end of my lease term?",
                  answer: "At the end of your lease, you have three options: return the vehicle and lease a new BMW, purchase the vehicle for the predetermined residual value, or simply return the vehicle. Our BMW lease specialists will contact you before your lease end to discuss these options and help you prepare for the transition."
                },
                {
                  question: "Do I need a down payment for financing or leasing?",
                  answer: "While a down payment is not always required, providing one can lower your monthly payments. For leasing, we typically recommend a down payment equal to your first month's payment plus any applicable taxes and fees. For financing, a down payment of 10-20% of the vehicle price is standard, but this can vary based on your credit profile and the specific financing terms."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 text-bmw-electric transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">Still have questions about financing your BMW?</p>
              <Button className="bg-bmw-blue hover:bg-bmw-electric">
                Contact a Finance Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancingPage;
