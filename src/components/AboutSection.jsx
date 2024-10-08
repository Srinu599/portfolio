import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 text-white">
      {/* About Content */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight font-[Montserrat] text-pink-200">
          About Me
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-[Raleway] text-gray-200">
        Hi, I'm B. Srinivasulu from Hyderabad, a dedicated Software Engineer with expertise in Core Java, HTML, CSS, JavaScript, and SQL. I am proficient in version control using Git and GitHub, and skilled in utilizing Visual Studio Code for development. I’m passionate about crafting efficient, user-friendly applications and thrive in collaborative environments, continuously seeking to enhance my skills.
        </p>
        <a
          href="https://drive.google.com/file/d/1mpX35DI-MNDvszP6iKQHotZDQ-PnqoIi/view?usp=sharing"  
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
