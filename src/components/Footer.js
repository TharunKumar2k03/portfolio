import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/50 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-quaternary/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div 
            className="text-3xl font-bold text-secondary mb-6 hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
              TK
            </Link>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, i) => (
              <Link
                key={i}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-textSecondary hover:text-secondary transition-colors duration-300 cursor-pointer hover-effect"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <motion.a
              href="https://github.com/TharunK143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300 hover-effect"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tharunkumar-ks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300 hover-effect"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:mrtharunkumar2k03@gmail.com"
              className="text-textSecondary hover:text-secondary transition-colors duration-300 hover-effect"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail className="text-xl" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-textSecondary text-sm text-center">
            <p className="mb-2">
              Designed & Built by Tharun Kumar K S
            </p>
            <p>
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
