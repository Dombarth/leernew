import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mock';
import { Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="bg-[#0c3d5f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Contact us today to get your project started!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 bg-white text-[#0c3d5f] px-8 py-4 rounded font-bold hover:bg-gray-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phoneFormatted}
            </a>
            <Link 
              to="/contact"
              className="flex items-center justify-center bg-[#29abe2] text-white px-8 py-4 rounded font-semibold hover:bg-[#1d8ab8] transition-all text-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
