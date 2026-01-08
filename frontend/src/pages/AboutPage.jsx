import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { companyInfo, features } from '../data/mock';
import { Trophy, Award, DollarSign, Medal, ShieldCheck, Layers, CheckCircle } from 'lucide-react';

const iconMap = {
  'trophy': Trophy,
  'award': Award,
  'dollar-sign': DollarSign,
  'medal': Medal,
  'shield-check': ShieldCheck,
  'layers': Layers,
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0c3d5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/80 text-lg">Sydney's trusted tiling and waterproofing specialists</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c3d5f] mb-6">
                Your Trusted Tiling Partners
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {companyInfo.name} is Sydney&apos;s premier choice for all tiling and waterproofing needs. With over <strong>10 years of industry experience</strong>, we&apos;ve completed thousands of projects across residential and commercial markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of skilled professionals is dedicated to delivering exceptional quality workmanship on every project. We take pride in our attention to detail and commitment to customer satisfaction.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '10+ years of industry experience',
                  '1000+ completed projects',
                  'Fully licensed and insured',
                  'Workmanship guarantee up to 10 years',
                  'Competitive and transparent pricing',
                  'Free quotes and consultations'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#29abe2]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#29abe2] text-white px-8 py-4 rounded font-semibold hover:bg-[#1d8ab8] transition-all"
              >
                Get Free Quote
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=500&fit=crop"
                alt="Professional tiling work"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0c3d5f] text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold text-[#29abe2]">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3d5f] text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={feature.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#e8f7fc] rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-[#29abe2]" />
                  </div>
                  <h3 className="text-[#0c3d5f] font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default AboutPage;
