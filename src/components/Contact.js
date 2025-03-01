import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    // Animate form and info sections
    gsap.fromTo(
      form,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );

    gsap.fromTo(
      info,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form fields
    e.target.reset();
    // Show success message
    alert('Your message has been sent!');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-tertiary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono text-secondary mb-2">
            Get In Touch
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
            Contact Me
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6 text-textPrimary">
              Send Me a Message
            </motion.h4>
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textSecondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-tertiary/30 backdrop-blur-sm rounded-lg p-3 border border-quaternary/30 focus:border-secondary/70 focus:outline-none text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-tertiary/30 backdrop-blur-sm rounded-lg p-3 border border-quaternary/30 focus:border-secondary/70 focus:outline-none text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-textSecondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-tertiary/30 backdrop-blur-sm rounded-lg p-3 border border-quaternary/30 focus:border-secondary/70 focus:outline-none text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-tertiary/30 backdrop-blur-sm rounded-lg p-3 border border-quaternary/30 focus:border-secondary/70 focus:outline-none text-textPrimary"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-secondary text-primary px-8 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors duration-300 hover-effect w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6 text-textPrimary">
              Contact Information
            </motion.h4>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center mb-4">
                <FiMail className="text-secondary text-xl mr-4" />
                <a href="mailto:mrtharunkumar2k03@gmail.com" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                  mrtharunkumar2k03@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FiPhone className="text-secondary text-xl mr-4" />
                <a href="tel:+919360522728" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                  +91 9360522728
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FiLinkedin className="text-secondary text-xl mr-4" />
                <a href="https://www.linkedin.com/in/tharunkumar-ks/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                  linkedin.com/in/tharunkumar-ks/
                </a>
              </div>
              <div className="flex items-center">
                <FiGithub className="text-secondary text-xl mr-4" />
                <a href="https://github.com/TharunK143" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                  github.com/TharunK143
                </a>
              </div>
            </motion.div>

            {/* Map or Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-10 bg-tertiary/20 backdrop-blur-sm rounded-lg p-6 border border-quaternary/30"
            >
              <h5 className="text-xl font-bold mb-4 text-textPrimary">Availability</h5>
              <p className="text-textSecondary mb-4">
                I'm currently available for freelance work, internships, and full-time positions in cloud engineering and software development.
              </p>
              <p className="text-textSecondary">
                Feel free to reach out if you have any questions or would like to discuss potential opportunities!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
