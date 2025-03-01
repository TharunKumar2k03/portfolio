import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Parallax effect for the image
    gsap.fromTo(
      image,
      { y: 0 },
      {
        y: -50,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Text animation
    gsap.fromTo(
      text,
      { y: 0 },
      {
        y: 50,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto md:mx-0"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/profile-photo.jpg"
                alt="Tharun Kumar K S"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-5 -left-5 w-full h-full bg-secondary/20 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={textRef}
            variants={itemVariants}
            className="md:w-1/2"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl font-mono text-secondary mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Challenges into Solutions
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-textSecondary text-lg mb-6">
              I'm a dynamic Computer Science and Engineering aspirant, currently pursuing my Bachelor's degree at SNS College of Engineering. With a passion for cloud engineering and software development, I focus on creating solutions that have a positive social impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-textSecondary text-lg mb-6">
              My journey in tech has equipped me with expertise in AWS, Python, Docker, and various other technologies. I believe in the power of technology to transform challenges into innovative solutions that can make a difference in the world.
            </motion.p>

            <motion.p variants={itemVariants} className="text-textSecondary text-lg mb-8">
              Beyond coding, I'm also a footballer and athlete who values teamwork, discipline, and continuous improvement - principles that I bring to my professional work as well.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                <span className="text-textPrimary">Problem Solver</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                <span className="text-textPrimary">Cloud Enthusiast</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                <span className="text-textPrimary">Team Player</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                <span className="text-textPrimary">Continuous Learner</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
