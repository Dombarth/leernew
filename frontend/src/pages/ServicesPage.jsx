import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { services } from '../data/mock';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0c3d5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white/80 text-lg">Professional tiling and waterproofing solutions for every project</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c3d5f] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-[#29abe2] font-semibold hover:text-[#1d8ab8] transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c3d5f] text-center mb-12">Additional Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Waterproofing',
              'Stone Work',
              'Screeding',
              'Floor Bedding',
              'Balcony Tiling',
              'Pool Tiling',
              'Leak Repairs',
              'Regrouting'
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-[#0c3d5f]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServicesPage;
