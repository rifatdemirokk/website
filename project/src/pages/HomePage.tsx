import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import CompanyCarousel from '../components/CompanyCarousel';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      <CompanyCarousel />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;