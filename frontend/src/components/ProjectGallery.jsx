import React, { useState, useEffect } from 'react';
import { projectImages } from '../data/mock';

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 4;
  
  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % projectImages.length;
      images.push({ src: projectImages[index], index });
    }
    return images;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c3d5f] text-center mb-12">
          View Our Amazing Results
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {getVisibleImages().map((image, idx) => (
            <div 
              key={`${image.index}-${idx}`}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img 
                src={image.src}
                alt={`Project ${image.index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0c3d5f]/0 group-hover:bg-[#0c3d5f]/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-[#29abe2] w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
