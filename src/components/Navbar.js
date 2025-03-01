import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="cursor-pointer"
        >
          <motion.div 
            className="text-2xl font-bold text-secondary hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TK
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-textSecondary hover:text-secondary transition-colors duration-300 cursor-pointer hover-effect"
                activeClass="text-secondary"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1LYwQZWv5Qxpjk0sq6wDjgQrTWkUiUPW1/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-primary py-2 px-4 rounded-md hover:bg-secondary/80 transition-all duration-300 flex items-center gap-1 hover-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="text-textPrimary focus:outline-none hover-effect"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-primary/95 z-50 flex flex-col items-center justify-center md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-2xl text-textSecondary hover:text-secondary transition-colors duration-300 cursor-pointer"
                    activeClass="text-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1LYwQZWv5Qxpjk0sq6wDjgQrTWkUiUPW1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary py-2 px-4 rounded-md hover:bg-secondary/80 transition-all duration-300 flex items-center gap-1 hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
