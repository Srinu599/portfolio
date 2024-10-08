import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';


const Portfolio = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </>
  );
};

export default Portfolio;