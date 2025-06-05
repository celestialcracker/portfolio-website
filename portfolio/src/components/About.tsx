import { motion } from 'framer-motion';
import { GraduationCap, Languages, Lightbulb } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-underline">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Education */}
          <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-mono text-xl font-bold text-dark-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {aboutMe.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary-200 dark:border-primary-800 pl-4 py-1">
                  <h4 className="font-semibold text-dark-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-dark-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-dark-500 dark:text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <Languages className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-mono text-xl font-bold text-dark-800 dark:text-white">Languages</h3>
            </div>

            <ul className="space-y-2">
              {aboutMe.languages.map((language, index) => (
                <li 
                  key={index}
                  className="flex items-center py-2 border-b border-gray-100 dark:border-dark-700 last:border-0"
                >
                  <span className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"></span>
                  <span className="text-dark-700 dark:text-gray-300">{language}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-mono text-xl font-bold text-dark-800 dark:text-white">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {aboutMe.softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-gray-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;