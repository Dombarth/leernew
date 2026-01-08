import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { companyInfo, navLinks, services, areas } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex">
              <div className="w-10 h-10 bg-[#0c3d5f] flex items-center justify-center text-white font-bold text-sm transform -skew-x-6">
                L
              </div>
              <div className="flex flex-col -ml-1">
                <div className="w-6 h-5 bg-[#0c3d5f] flex items-center justify-center text-white font-bold text-xs transform -skew-x-6">
                  T
                </div>
                <div className="w-6 h-5 bg-[#29abe2] flex items-center justify-center text-white font-bold text-xs transform -skew-x-6">
                  W
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0c3d5f] font-bold text-xl tracking-wide">LEERBERG TILING</span>
              <span className="text-[#29abe2] text-sm">&Waterproofing</span>
            </div>
          </Link>

          {/* Right side - Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[#29abe2] font-semibold hover:text-[#0c3d5f] transition-colors">
              <Phone className="w-5 h-5" />
              <span>Call {companyInfo.phoneFormatted}</span>
            </a>
            <Link 
              to="/contact" 
              className="bg-[#29abe2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1d8ab8] transition-all flex items-center gap-2"
            >
              Get Free Quote
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block border-t border-gray-100">
          <ul className="flex items-center justify-center gap-8 py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => link.name === 'Services' ? setServicesOpen(true) : setAreasOpen(true)}
                    onMouseLeave={() => link.name === 'Services' ? setServicesOpen(false) : setAreasOpen(false)}
                  >
                    <button className={`flex items-center gap-1 font-medium transition-colors ${
                      isActive(link.href) ? 'text-[#29abe2]' : 'text-[#0c3d5f] hover:text-[#29abe2]'
                    }`}>
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown */}
                    {((link.name === 'Services' && servicesOpen) || (link.name === 'Areas We Serve' && areasOpen)) && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                        {link.name === 'Services' ? (
                          services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              className="block px-4 py-2 text-[#0c3d5f] hover:bg-gray-50 hover:text-[#29abe2] transition-colors"
                            >
                              {service.title}
                            </Link>
                          ))
                        ) : (
                          areas.map((area, idx) => (
                            <Link
                              key={idx}
                              to={`/areas/${area.toLowerCase().replace(/\s/g, '-')}`}
                              className="block px-4 py-2 text-[#0c3d5f] hover:bg-gray-50 hover:text-[#29abe2] transition-colors"
                            >
                              {area}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors ${
                      isActive(link.href) ? 'text-[#29abe2]' : 'text-[#0c3d5f] hover:text-[#29abe2]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 font-medium ${
                  isActive(link.href) ? 'text-[#29abe2]' : 'text-[#0c3d5f]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="block py-2 text-[#29abe2] font-semibold"
            >
              Call {companyInfo.phoneFormatted}
            </a>
            <Link 
              to="/contact"
              className="block w-full bg-[#29abe2] text-white text-center py-3 rounded font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
