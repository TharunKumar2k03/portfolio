import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Parallax effect for cards
    gsap.fromTo(
      cards.children,
      { y: 0 },
      {
        y: -30,
        stagger: 0.1,
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
        staggerChildren: 0.1,
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

  const technicalSkills = [
    { name: 'AWS', icon: '/skills/aws.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'MySQL', icon: '/skills/mysql.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'VM Ware', icon: '/skills/vmware.svg' },
    { name: 'Git & GitHub', icon: '/skills/git.svg' },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: '/skills/teamwork.svg' },
    { name: 'Communication', icon: '/skills/communication.svg' },
    { name: 'Problem-Solving', icon: '/skills/problem-solving.svg' },
    { name: 'Adaptability', icon: '/skills/adaptability.svg' },
    { name: 'Flexibility', icon: '/skills/flexibility.svg' },
  ];

  const certificates = [
    { 
      name: 'The Complete Python Bootcamp', 
      issuer: 'Udemy', 
      duration: '22 hours',
      image: '/certifications/python-bootcamp.jpeg'
    },
    { 
      name: 'AWS', 
      issuer: 'Prepinsta', 
      duration: '20+ hours',
      image: '/certifications/aws.jpeg'
    },
    { 
      name: 'Cloud Computing', 
      issuer: 'NPTEL', 
      duration: '8 weeks',
      image: '/certifications/cloud-computing-nptel.jpg'
    },
    { 
      name: 'Cloud Consultant', 
      issuer: 'NSDC', 
      duration: '12 weeks',
      image: '/certifications/cloud-consultant-nsdc.jpg'
    },
    { 
      name: 'Spoken English Graded Examination', 
      issuer: 'Trinity College London', 
      duration: '2 Days',
      image: '/certifications/trinity-college-sege.jpg'
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-quaternary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            My Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-textSecondary max-w-2xl mx-auto">
            Here are some of my technical and soft skills that I've developed throughout my journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-textPrimary mb-6">
              Technical Skills
            </motion.h3>
            <motion.div variants={itemVariants} ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-tertiary p-4 rounded-lg flex flex-col items-center justify-center hover:bg-tertiary/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/48?text=" + skill.name;
                      }}
                    />
                  </div>
                  <p className="text-textPrimary font-medium text-center">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-textPrimary mb-6">
              Soft Skills
            </motion.h3>
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-tertiary p-4 rounded-lg flex flex-col items-center justify-center hover:bg-tertiary/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/48?text=" + skill.name;
                      }}
                    />
                  </div>
                  <p className="text-textPrimary font-medium text-center">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-textPrimary mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flip-card h-64 w-full perspective"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                  {/* Front Side */}
                  <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-contain bg-white p-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x200?text=" + cert.name;
                      }}
                    />
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back absolute w-full h-full backface-hidden bg-tertiary rounded-lg p-6 shadow-lg flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-textPrimary mb-3">{cert.name}</h4>
                    <p className="text-textSecondary mb-2">Issuer: {cert.issuer}</p>
                    <p className="text-textSecondary">Duration: {cert.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
