import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { companyInfo } from '../data/mock';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', suburb: '', service: '', details: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0c3d5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">Get in touch for a free quote on your next tiling project</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0c3d5f] mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to start your tiling project? Contact us today for a free, no-obligation quote. Our team is here to help with all your tiling and waterproofing needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f7fc] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#29abe2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c3d5f]">Phone</h3>
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-[#29abe2]">
                      {companyInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f7fc] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#29abe2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c3d5f]">Email</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-[#29abe2]">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f7fc] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#29abe2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c3d5f]">Location</h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f7fc] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#29abe2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c3d5f]">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#0c3d5f] mb-6">Request A Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                  <Input
                    type="text"
                    name="suburb"
                    placeholder="Suburb*"
                    value={formData.suburb}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29abe2]"
                >
                  <option value="">Select Service*</option>
                  <option value="wall-tiling">Wall Tiling</option>
                  <option value="floor-tiling">Floor Tiling</option>
                  <option value="bathroom-renovations">Bathroom Renovations</option>
                  <option value="bathroom-tiling">Bathroom Tiling</option>
                  <option value="kitchen-tiling">Kitchen Tiling</option>
                  <option value="outdoor-tiling">Outdoor Tiling</option>
                  <option value="waterproofing">Waterproofing</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  name="details"
                  placeholder="Project Details*"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-gray-300"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#29abe2] hover:bg-[#1d8ab8] text-white py-6 text-lg font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
