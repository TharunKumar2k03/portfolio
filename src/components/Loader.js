import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.loader-text span', {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out'
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="loader-container">
        <div className="loader-text overflow-hidden">
          {['T', 'H', 'A', 'R', 'U', 'N', ' ', 'K', 'U', 'M', 'A', 'R'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block text-4xl md:text-6xl font-bold text-secondary transform translate-y-full"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        <motion.div 
          className="h-1 bg-secondary mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Loader;
