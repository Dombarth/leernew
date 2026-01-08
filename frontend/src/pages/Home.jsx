import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectGallery from '../components/ProjectGallery';
import CTABanner from '../components/CTABanner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProjectGallery />
      <CTABanner />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
