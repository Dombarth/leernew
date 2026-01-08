import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, features } from '../data/mock';
import { Trophy, Award, DollarSign, Medal, ShieldCheck, Layers } from 'lucide-react';

const iconMap = {
  'trophy': Trophy,
  'award': Award,
  'dollar-sign': DollarSign,
  'medal': Medal,
  'shield-check': ShieldCheck,
  'layers': Layers,
};

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Content */}
          <div className="bg-[#0c3d5f] text-white p-10 rounded-lg relative">
            {/* Decorative background pattern */}
            <div 
              className="absolute inset-0 opacity-10 rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&h=600&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {companyInfo.name.toUpperCase()} &<br />WATERPROOFING
              </h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                {companyInfo.name}, your premier choice for tiling in Sydney, NSW. With over <strong>10 years of industry</strong> experience, we've completed <strong>1000s of projects</strong> in both residential and commercial markets.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                We offer a wide range of services that include all styles of tiling, waterproofing, stone work, screening, floor bedding, and also specialised applications for balconies, podiums, main floors, bathrooms and more.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-[#29abe2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1d8ab8] transition-all"
              >
                Learn More
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={feature.id} className="text-center p-4">
                  <div className="w-16 h-16 bg-[#e8f7fc] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#29abe2]" />
                  </div>
                  <h3 className="text-[#0c3d5f] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
