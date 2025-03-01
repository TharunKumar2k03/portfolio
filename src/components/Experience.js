import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    // Animate timeline line drawing
    gsap.fromTo(
      '.timeline-line',
      { height: 0 },
      {
        height: '100%',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );

    // Animate timeline items
    gsap.fromTo(
      timeline.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power3.out',
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

  const experiences = [
    {
      title: 'Software Engineer Trainee',
      company: 'Wise Work',
      date: 'January 2025 - Present',
      description: 'Working on software development projects, applying practical skills in C#, Blazor, MongoDB, Supabase Auth and Docker.',
      skills: ['C#', 'Blazor', 'MongoDB', 'Supabase Auth', 'Docker']
    },
    {
      title: 'Cloud Consultant',
      company: 'MindFulAI',
      date: 'July 2023',
      description: 'Expanded expertise in cloud computing and networking concepts. Gained practical experience with various AWS services.',
      skills: ['AWS', 'Cloud Computing', 'Networking']
    },
    {
      title: 'Python Developer',
      company: 'Emglitz Technologies',
      date: 'February 2024',
      description: 'Acquired in-depth knowledge of Python concepts. Developed a project to apply practical skills.',
      skills: ['Python', 'Development', 'Problem Solving']
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-tertiary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
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
            My Experience
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </motion.h3>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-quaternary/30">
            <div className="timeline-line absolute left-0 top-0 bottom-0 w-full bg-secondary"></div>
          </div>

          {/* Timeline Items */}
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative z-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="bg-tertiary/30 backdrop-blur-sm rounded-lg p-6 border border-quaternary/30 hover:border-secondary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <h4 className="text-xl font-bold text-textPrimary mb-1">{exp.title}</h4>
                    <h5 className="text-secondary font-semibold mb-2">{exp.company}</h5>
                    <p className="text-textSecondary mb-4">{exp.description}</p>
                    <span className="text-sm text-textSecondary bg-quaternary/50 px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-primary px-3 py-1 rounded-full text-xs text-textSecondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-tertiary border-2 border-secondary"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
