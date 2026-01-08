import React, { useState } from 'react';
import { companyInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', suburb: '', details: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0c3d5f]/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              LOCAL EXPERIENCED<br />
              TILERS SYDNEY
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {companyInfo.name} specialises in all aspects of tiling, waterproofing, bathroom renovations and leak repairs.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-[#fbbc05] font-bold">Google</span>
                <div className="flex text-[#fbbc05]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">48+ Reviews</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-red-600 font-bold">YouTube</span>
                <div className="flex text-[#fbbc05]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">30k+ Subscribers</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-gray-700 text-sm font-medium">ISO 9001</span>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">HIA member</span>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0c3d5f] text-center mb-2">
              GET YOUR FREE QUOTE
            </h2>
            <p className="text-[#0c3d5f] text-center mb-6 font-semibold">
              IN 60 SECONDS
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-[#29abe2] focus:ring-[#29abe2]"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-[#29abe2] focus:ring-[#29abe2]"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-[#29abe2] focus:ring-[#29abe2]"
              />
              <Input
                type="text"
                name="suburb"
                placeholder="Suburb*"
                value={formData.suburb}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-[#29abe2] focus:ring-[#29abe2]"
              />
              <Textarea
                name="details"
                placeholder="Project Details*"
                value={formData.details}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-gray-300 focus:border-[#29abe2] focus:ring-[#29abe2]"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#0c3d5f] hover:bg-[#0a3350] text-white py-6 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
