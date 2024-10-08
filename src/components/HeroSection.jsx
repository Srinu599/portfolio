import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { profileImage } from "../assets/constant.jsx"; 
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 sm:pt-24 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center lg:items-start space-y-8 lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="https://i.postimg.cc/WzYJN6yb/Whats-App-Image-2024-10-07-at-18-34-40-ca1acd18.jpg"
              alt="Profile"
              className="object-cover w-full h-full -z-50"
            />
          </div>
          <div className="flex space-x-6 mx-6">
            <a
              href="https://github.com/srinu599"
              className="text-3xl sm:text-4xl text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/srinu-bathula-76ab692a6"
              className="text-3xl sm:text-4xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:seenubathula99@gmail.com"
              className="text-3xl sm:text-4xl text-gray-300 hover:text-red-400 transition-colors duration-300"
              aria-label="Gmail"
            >
              <SiGmail />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight font-[Poppins] text-white">
            B.Srinivasulu
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-indigo-200 font-[Montserrat]">
            Java Full Stack developer
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0 font-[Raleway]">
            Crafting elegant and efficient solutions for modern web challenges.
            Passionate about creating interactive and user-friendly experiences.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-[Montserrat]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
