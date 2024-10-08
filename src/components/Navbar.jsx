import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1E293B] text-white fixed top-0 w-full z-20 shadow-md">
      <div className="container mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-bold">
          <a href="#home">B.Srinivasulu</a>
        </div>

        <ul className="hidden md:flex items-center space-x-6 font-bold">
          <li>
            <a href="#home" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
              <FaInfoCircle />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
              <FaProjectDiagram />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1E293B] shadow-md py-4 px-4 space-y-4 font-bold">
          <a href="#home" className="block hover:text-gray-400 transition-colors">Home</a>
          <a href="#about" className="block hover:text-gray-400 transition-colors">About</a>
          <a href="#projects" className="block hover:text-gray-400 transition-colors">Projects</a>
          <a href="#contact" className="block hover:text-gray-400 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;