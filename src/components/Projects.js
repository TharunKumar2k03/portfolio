import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Shieldz',
      description: 'Ensuring Security and Compliance of cloud-native applications',
      date: 'October 2024',
      technologies: ['Python', 'Figma', 'React.js', 'Docker', 'Falco', 'Prometheus', 'Grafana', 'AWS'],
      image: '/projects/cloud-shieldz.png',
      github: 'https://github.com/TharunK143/cloud-shieldz',
      live: '#'
    },
    {
      title: 'Cybersecurity Portal',
      description: 'Effective management of Servers and Firewalls',
      date: 'November 2023',
      technologies: ['Python', 'Figma', 'VMWare Workstation', 'RHEL ISO', 'Round Robin ILB'],
      image: '/projects/cybersecurity-portal.png',
      github: 'https://github.com/TharunK143',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-quaternary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">My Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flip-card h-[450px] w-full perspective"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain bg-gray-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x400?text=" + project.title;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.date}</p>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-tertiary rounded-lg p-6 shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-4">{project.title}</h3>
                    <p className="text-textSecondary mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-primary px-3 py-1 rounded-full text-xs text-textSecondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors duration-300"
                    >
                      <FiGithub className="mr-2" /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border border-secondary text-secondary px-4 py-2 rounded-md hover:bg-secondary/10 transition-colors duration-300"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
