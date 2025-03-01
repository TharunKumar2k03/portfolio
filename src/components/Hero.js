import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    // Parallax effect for background
    gsap.to(heroElement, {
      backgroundPositionY: '30%',
      scrollTrigger: {
        trigger: heroElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Text animation on scroll
    gsap.to(textElement, {
      y: 100,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Image animation on scroll
    gsap.to(imageElement, {
      y: 50,
      scale: 0.95,
      scrollTrigger: {
        trigger: heroElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1),transparent_70%)]"></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tertiary/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-quaternary/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div 
          ref={textRef}
          className="md:w-3/5 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-secondary font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-textPrimary mb-4"
          >
            Tharun Kumar <span className="text-secondary">K S</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-textSecondary mb-8"
          >
            Software Developer Trainee | Cloud Consultant
          </motion.p>
          <motion.p 
            className="text-textSecondary text-lg md:text-xl max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            A dynamic Computer Science and Engineering aspirant, passionate about cloud engineering and software development with a focus on social impact.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-secondary text-primary px-8 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors duration-300 hover-effect cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="border border-secondary text-secondary px-8 py-3 rounded font-semibold hover:bg-secondary/10 transition-colors duration-300 hover-effect cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Image/3D Element */}
        <motion.div 
          ref={imageRef}
          className="hidden md:block md:w-2/5 perspective preserve-3d mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full h-80 perspective preserve-3d">
            <motion.div 
              className="absolute inset-0 rounded-lg bg-tertiary/30 backdrop-blur-sm border border-quaternary/50 shadow-xl overflow-hidden"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  {/* <div className="text-secondary font-mono mb-2">Cloud Engineer</div> */}
                  <div className="text-textPrimary text-2xl font-bold mb-4">Software Developer</div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-textSecondary">
                    <div className="bg-quaternary/50 p-2 rounded">AWS</div>
                    <div className="bg-quaternary/50 p-2 rounded">Python</div>
                    <div className="bg-quaternary/50 p-2 rounded">MySQL</div>
                    <div className="bg-quaternary/50 p-2 rounded">Git</div>
                    <div className="bg-quaternary/50 p-2 rounded">Docker</div>
                    <div className="bg-quaternary/50 p-2 rounded">Kubernetes</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-textSecondary text-sm mb-2">Scroll Down</span>
        <FiArrowDown className="text-secondary text-xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
