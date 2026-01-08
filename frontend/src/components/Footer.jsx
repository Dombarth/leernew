import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, services, areas } from '../data/mock';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c3d5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                <div className="w-8 h-8 bg-white flex items-center justify-center text-[#0c3d5f] font-bold text-sm transform -skew-x-6">
                  L
                </div>
                <div className="flex flex-col -ml-1">
                  <div className="w-5 h-4 bg-white flex items-center justify-center text-[#0c3d5f] font-bold text-xs transform -skew-x-6">
                    T
                  </div>
                  <div className="w-5 h-4 bg-[#29abe2] flex items-center justify-center text-white font-bold text-xs transform -skew-x-6">
                    W
                  </div>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg">LEERBERG TILING</span>
                <br />
                <span className="text-[#29abe2] text-sm">&Waterproofing</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              {companyInfo.name} is your premier choice for all tiling and waterproofing needs in Sydney. With over 10 years of experience, we deliver quality results every time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#29abe2] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#29abe2] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#29abe2] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-[#29abe2] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-[#29abe2] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-[#29abe2] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-[#29abe2] transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-[#29abe2] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-white/80 hover:text-[#29abe2] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/80 hover:text-[#29abe2] transition-colors">
                  <Phone className="w-5 h-5 text-[#29abe2]" />
                  {companyInfo.phoneFormatted}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-white/80 hover:text-[#29abe2] transition-colors">
                  <Mail className="w-5 h-5 text-[#29abe2]" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#29abe2] flex-shrink-0 mt-1" />
                  <span>{companyInfo.address}</span>
                </div>
              </li>
            </ul>
            
            {/* Areas We Serve */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Areas We Serve</h4>
              <p className="text-white/60 text-sm">
                {areas.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
