import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { testimonials, companyInfo } from '../data/mock';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + displayCount) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - displayCount + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + displayCount) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c3d5f] text-center mb-4">
          Client Testimonials
        </h2>
        
        {/* Google Rating Badge */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="bg-white rounded-lg shadow-md px-6 py-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0c3d5f] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <span className="text-green-600 font-bold text-lg">Excellent</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600">{companyInfo.name}</p>
              <p className="text-xs text-gray-500">Based on 53 reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fbbc05] text-[#fbbc05]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
                  {testimonial.review}
                </p>
                <p className="font-semibold text-[#0c3d5f]">{testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-[#0c3d5f]" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-[#0c3d5f]" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / displayCount))].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * displayCount)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / displayCount) === idx ? 'bg-[#29abe2] w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#29abe2] text-white px-8 py-4 rounded font-semibold hover:bg-[#1d8ab8] transition-all"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
