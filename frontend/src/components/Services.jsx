import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mock';

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c3d5f] text-center mb-12">
          Our Services
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3d5f] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#0c3d5f] py-4 px-6">
                <h3 className="text-white font-bold text-lg text-center">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 bg-[#29abe2] text-white px-8 py-4 rounded font-semibold hover:bg-[#1d8ab8] transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
