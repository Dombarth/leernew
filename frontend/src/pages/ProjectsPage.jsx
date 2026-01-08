import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { projectImages } from '../data/mock';

const ProjectsPage = () => {
  const allProjects = [
    ...projectImages,
    'https://images.unsplash.com/photo-1706629503571-c165023a7792?w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/7794427/pexels-photo-7794427.jpeg?w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/9376350/pexels-photo-9376350.jpeg?w=400&h=300&fit=crop'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0c3d5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-white/80 text-lg">View our portfolio of completed tiling and renovation projects</p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProjects.map((image, idx) => (
              <div 
                key={idx}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                <img 
                  src={image}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0c3d5f]/0 group-hover:bg-[#0c3d5f]/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                    View Details
                  </span>
                </div>
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

export default ProjectsPage;
