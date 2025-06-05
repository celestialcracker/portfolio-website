import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // This is a mock submit function - in a real app, you'd connect to an API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title heading-underline">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-2xl font-bold text-dark-800 dark:text-white mb-6">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-gray-400">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-2xl font-bold text-dark-800 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700
                         focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent
                         text-dark-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700
                         focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent
                         text-dark-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700
                         focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent
                         text-dark-800 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 dark:bg-primary-600 text-white rounded-md
                       hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-300"
              >
                Send Message
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center mt-4">
                  Message sent successfully!
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center mt-4">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;