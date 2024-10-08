import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Security using ECC in Cloud',
    description:
      'Developed a comparative study on AES and ECC encryption for cloud security, showcasing ECCs efficiency in data protection. Implemented encryption algorithms using Python and Flask, conducted performance tests in Jupyter Notebook, and utilized SQLite3 for secure data storage.',
    technologies: ['Python',  'Frontend',"backend"],
    link: 'https://github.com/Srinu599/Security-using-Elliptic-curve-cryptography-in-cloud',
    image: 'https://i.postimg.cc/hP9f3nDt/Whats-App-Image-2024-10-07-at-18-44-14-6b328b6c.jpg',

  },{
    "title": "Portfolio Website",
    "description": "Developed a visually appealing and responsive portfolio website using React.js and CSS. The site features a smooth navigation experience with sections for Home, About, Projects, and Contact Us, showcasing work and providing a comprehensive overview of skills and achievements.",
    "technologies": ["React.js", "CSS"],
    "link": "https://github.com/yourprofile/portfolio-website",
    "image": "https://i.postimg.cc/3w3rq0LL/Screenshot-344.png"
}

];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-purple-800 to-indigo-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
      />
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-gray-200 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.1, backgroundColor: '#4F46E5' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white font-semibold py-2 mx-3 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(236, 72, 153, 0.7)' }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
      <motion.div
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-pink-500 opacity-10 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.h2 
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-[Raleway] text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Here are some of the projects I've worked on that demonstrate my skills in web development and machine learning.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;