import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-950 z-0" />
      
      <motion.div
        className="section-container z-10 flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-mono font-bold text-dark-900 dark:text-white mb-4"
          variants={item}
        >
          <span className="text-primary-500 dark:text-primary-400">Umesh</span>
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl font-medium text-dark-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
          variants={item}
        >
          Aspiring Cybersecurity Specialist | IT Support | Tech Enthusiast
        </motion.h2>

        <motion.p 
          className="text-lg text-dark-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          I'm Umesh, a Computer Science student with a passion for cybersecurity and IT infrastructure. 
          I've completed industry-recognized certifications from Google and freeCodeCamp and bring experience 
          in logistics, data administration, and technical support.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={item}
        >
          <a 
            href={contactInfo.socials.find(s => s.name === 'GitHub')?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark-900 dark:bg-dark-800 text-white rounded-md
                     hover:bg-dark-800 dark:hover:bg-dark-700 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          
          <a 
            href={contactInfo.socials.find(s => s.name === 'LinkedIn')?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary-500 dark:bg-primary-600 text-white rounded-md
                     hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 px-6 py-3 border-2 border-dark-800 dark:border-white text-dark-800 dark:text-white rounded-md
                     hover:bg-dark-800 hover:text-white dark:hover:bg-white dark:hover:text-dark-800 transition-colors duration-300 cursor-pointer"
          >
            <span>Contact Me</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-dark-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary-500 dark:text-primary-400" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;