import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-underline">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-1 bg-gradient-to-r from-primary-500 to-secondary-500">
                {/* This is just a decorative top border */}
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Award className="w-6 h-6 text-primary-500 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-mono text-lg font-bold text-dark-800 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-dark-600 dark:text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-700">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;