import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-dark-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-underline">Experience</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 ml-4 md:mx-auto md:left-0 md:right-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Date - Desktop left side, Mobile inside card */}
                <div className="hidden md:block md:text-right">
                  <h3 className="font-mono text-xl font-bold text-dark-800 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.period}
                  </p>
                </div>

                {/* Content */}
                <div className={`experience-card ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}>
                  <div className="flex items-center mb-4 md:hidden">
                    <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                    <div>
                      <h3 className="font-mono text-lg font-bold text-dark-800 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">
                    {exp.title}
                  </h4>
                  
                  <ul className="space-y-2 text-dark-600 dark:text-gray-400">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mr-2 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;