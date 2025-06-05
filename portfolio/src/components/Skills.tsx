import { motion } from 'framer-motion';
import { Code, Settings } from 'lucide-react';
import { skills, tools } from '../data/portfolioData';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" className="bg-white dark:bg-dark-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-underline">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Technical Skills */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="font-mono text-2xl font-bold text-dark-800 dark:text-white">
                Technical Skills
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills[0].items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={item}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"></div>
                    <span className="text-dark-800 dark:text-gray-200">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Settings className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="font-mono text-2xl font-bold text-dark-800 dark:text-white">
                Tools & Platforms
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {tools[0].items.map((tool, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={item}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"></div>
                    <span className="text-dark-800 dark:text-gray-200">{tool}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;